import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
export const useTeme = defineStore('theme', () => {
    const theme = ref('dark');
    const switchTheme = computed(() => {
        return theme.value === 'dark' ? 'ligth' : 'dark';
    });
    return { theme, switchTheme };
});
