<script setup lang="ts">
import { useTeme } from '@/stores/theme';
import {ThemeSwither} from '@/shared/ThemeSwither';
import { computed } from 'vue';

import logoL from '/logo_l.png';
import logoB from '/logo_b.png';

const theme = useTeme();
const typeTheme = computed(() => theme.theme);
const changeTheme = () => {
  theme.theme = theme.switchTheme;
};

</script>

<template>
    <header class="header">
        <img :src="typeTheme === 'dark' ? logoL : logoB" alt="Logo">
        <ThemeSwither @click="changeTheme" />
    </header>
</template>

<style>

</style>