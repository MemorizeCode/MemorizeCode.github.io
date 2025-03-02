<script setup lang="ts">
import { useCards } from '@/entities/Card/store/cards';
import { computed } from 'vue';

const props = defineProps<{
    page: number;
    setPage: (page: number) => void;
}>();

const cards = useCards();
const currentPage = computed(() => cards.currPage);
</script>

<template>
    <div :class="`solo_pagination`">
        <button @click="props.setPage(props.page)" :class="` ${props.page == currentPage ? 'active__page' : ''}`"><span :class="` ${props.page == currentPage ? 'active__page__text' : ''}`" >{{ props.page }}</span></button>
    </div>
</template>

<style scoped>
button {
    background-color: var(--color--pag);
    width: 24px;
    height: 24px;
    border-radius: 4px;
    border: none;
    outline: none;
    margin: 5px;
    font-weight: var(--font-w-300);
}
span{
    color: var(--color-secondary);
    font-size:16px;
    font-weight: 300;
}

.active__page__text {
    font-weight: 500;
}

.active__page {
    border-radius: 4px;
    background-color: var(--color-secondary-p);
}
</style>