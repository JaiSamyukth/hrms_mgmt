<script setup>
import {Link} from "@inertiajs/vue3";

defineProps({
    href: String,
})

</script>

<template>
    <td class="px-6 py-4 ">
        <Link :href="href" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
            <slot />
        </Link>
    </td>
</template>
