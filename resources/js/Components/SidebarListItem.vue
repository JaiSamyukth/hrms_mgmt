<script setup>
import {Link} from "@inertiajs/vue3";

const props = defineProps({
    itemName: String,
    link: String,
    hasBadge: Boolean,
    badge: String,
    badgeContent: String,
    activeLinksRecursive: Array,
    activeLinks: Array, // ['employees.index, employees.create, etc ]
})

</script>

<template>
    <li>
        <Link :href="route(link)"
              class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 dark:text-gray-100 transition-all duration-150"
              :class="{'bg-blue-50 dark:bg-blue-900/30' :
              activeLinksRecursive ? activeLinksRecursive.some(item => $page.url.includes(item)) :
              activeLinks.includes(route().current())
        }">
            <svg aria-hidden="true"
                 class="flex-shrink-0 w-6 h-6 text-gray-50 transition duration-75 dark:text-gray-100
                        group-hover:text-gray-900 dark:group-hover:text-white"
                 fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
                <slot/>
            </svg>

            <span class="flex-1 mx-3 whitespace-nowrap">{{ itemName }}</span>

            <span v-if="hasBadge"
                  :class="{'inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-white bg-accent-blue rounded-full': badge === 'number',
                            'inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-accent-blue dark:text-white': badge !== 'number'}">
                {{ badgeContent }}
                </span>
        </Link>
    </li>
</template>

<style scoped>

</style>
