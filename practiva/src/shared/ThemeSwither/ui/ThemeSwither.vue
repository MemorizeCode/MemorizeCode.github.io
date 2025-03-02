<script setup lang="ts">
import { useTeme } from '@/stores/theme';
import { computed } from 'vue';

import black from '/switch_b.png';
import light from '/switch_l.png';


const theme = useTeme();
const typeTheme = computed(() => theme.theme);
</script>

<template>
    <img :src="typeTheme === 'dark' ? black : light" :alt="`${typeTheme}`">
</template>