<script setup lang="ts">
import { useCards } from '@/entities/Card/store/cards';
import { ref, watch } from 'vue';

const cards = useCards(); //Store карточек
const searchText = ref(cards.search); //Инппут

//При изменение инпута запрашиваем карточки
watch(searchText, (newValue) => {
  cards.search = newValue; 
  searchItem(cards.currPage,newValue);
});

//фунеция
async function searchItem(page: number,search: string) {
  await cards.searchCards(page, search); 
}

</script>

<template>
    <div class="input_c light_g ">
        <img src="@/assets/images/icon-1.png" alt="" class="icon">
        <input class="input" type="text" placeholder="Painting title" v-model="searchText">
    </div>
</template>

<style scoped>
.input_c {
    display: flex; 
    align-items: center;
    background-color: var(--bg-secondary);
    width: 100%; 
    height: 36px;
    border-radius: 4px;
    border: none;
    padding-left: 10px;
}
.icon {
    .icon {
        margin-right: 10px;
    }
}

.input {
    background-color: var(--bg-secondary);
    width: 336px;
    height: 36px;
    border-radius: 4px;
    outline: none;
    border: none;
    color: var();
    padding-left: 30px;
    grid-column: 10 / span 12;
}

.input {
    flex-grow: 1;
    height: 100%;
    border: none;
    outline: none;
    color: var(--color-secondary);
}

.input_c:focus-within {
    border: 1px solid var(--color-secondary);
}
.light_g {
    border: 1px solid var(--color-primary-lightgray);
}

/* 320 */
@media (max-width: 320px) {
    .input_c{
        width: 280px;
        height: 33px;
    }

}

</style>