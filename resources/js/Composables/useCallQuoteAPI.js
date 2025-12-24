import { ref } from "vue";

export function CallQuoteAPI(quote) {

    const lastApiCallTimestamp = ref(localStorage.getItem('lastApiCallTimestamp') || null);
    const apiUrl = 'https://api.quotable.io/quotes/random?tags=Work|Motivational|Inspirational|Creativity';

    async function fetchDataFromAPI() {
        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
            });

            if (!response.ok) {
                console.error('Quote API HTTP error:', response.status);
                throw new Error(`API returned status ${response.status}`);
            }

            const data = await response.json();

            if (!data || !Array.isArray(data) || data.length === 0) {
                console.error('Quote API returned empty or invalid data');
                throw new Error('Invalid API response');
            }

            quote.value = data[0]; // quote variable in front-end

            // Store the quote and set a timestamp for the last API call, to prevent calling the API more than once per day
            lastApiCallTimestamp.value = Date.now();
            localStorage.setItem('lastApiCallTimestamp', lastApiCallTimestamp.value);
            localStorage.setItem('quote', JSON.stringify(data));

            console.log('Quote loaded successfully:', quote.value);
        } catch (error) {
            console.error('Quote API Error:', error);
            // Set a fallback quote
            quote.value = {
                content: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
                author: "Winston Churchill"
            };
        }
    }

    function shouldFetchData() {
        if (!lastApiCallTimestamp.value) {
            return true; // API has not been called yet
        }
        const currentTime = Date.now();
        const twentyFourHours = 86400000; // 24 hours in milliseconds (was 93600000 - incorrect)
        return currentTime - lastApiCallTimestamp.value >= twentyFourHours;
    }

    if (shouldFetchData()) {
        fetchDataFromAPI();
    } else {
        const cached = localStorage.getItem('quote');
        if (cached) {
            try {
                const parsedQuote = JSON.parse(cached)?.[0];
                if (parsedQuote && parsedQuote.content) {
                    quote.value = parsedQuote;
                    console.log('Quote loaded from cache:', quote.value);
                } else {
                    // Cache is invalid, fetch new
                    fetchDataFromAPI();
                }
            } catch (e) {
                console.error('Error parsing cached quote:', e);
                fetchDataFromAPI();
            }
        } else {
            fetchDataFromAPI();
        }
    }

}
