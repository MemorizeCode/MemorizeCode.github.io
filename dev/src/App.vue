<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue';
import { useTeme } from '@/stores/theme';
import { Card } from '@/entities/Card';
import { Input } from '@/shared/Input';
import { NavBar } from '@/widgets/NavBar';
import { useCards } from '@/entities/Card/store/cards';
import type { AvtorSchema, CardSchema, LocationsSchema } from './entities/Card/ui/AppCard.vue';
import { Pagination } from '@/shared/Pagination';

const theme = useTeme(); //Store Тема
const cards = useCards(); //Store Карточки
const searchText = computed(() => cards.search); //Текст
const typeTheme = computed(() => theme.theme); //Тип темы
const cardsData = computed(() => cards.cards as CardSchema[]); //Карточки
const page = ref(1); //Текущая. страница
const maxPage = computed(() => cards.maxPage); //Максимально страниц
const avtorsData = computed(() => cards.avtors as AvtorSchema[]); //Авторы
const locationsData = computed(() => cards.locations as LocationsSchema[]); //Локации

//Установка страницы
function setPage(p: number) {
  page.value = p;
}

//Запрос на получение
watchEffect(async () => {
  await cards.fetchCards(page.value); //Карточки
  await cards.seatchAvtor(); //Авторы
  await cards.seatchLocations(); //Локации
});
</script>

<template>
  <div :class="`app ${typeTheme}`">
    <div class="container">
      <NavBar />
      <main>
        <div class="input-container">
          <Input />
        </div>
        <div class="error-container">
          <div v-if="cardsData.length === 0">
            <h2 class="noData-h2">No matches for {{ searchText }}</h2>
            <p class="noData-p">Please try again with a different spelling or keywords.</p>
          </div>
        </div>
        <div class="cards-container">
          <div v-for="card in cardsData" :key="card.id" class="card-wrapper">
            <Card :card="card"
              :location="locationsData && locationsData[Math.floor(Math.random() * locationsData?.length)]?.location"
              :avtor="avtorsData && avtorsData[Math.floor(Math.random() * avtorsData?.length)]?.name" />
          </div>
        </div>
        <div class="pagination-container" v-if="cardsData.length > 0">
            <Pagination :page="page" :setPage="setPage" :maxPage="maxPage" />
        </div>
      </main>
    </div>
  </div>
</template>

<style>
main {
  display: contents;
}

.input-container {
  grid-column: 12;
  grid-row: 2;
  display: flex;
  justify-content: flex-end;
  width: 336px;
  max-width: 336px;
}

.cards-container {
  grid-column: 1 / -1;
  grid-row: 3;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 32px;
  width: 1240px;
  margin-top: 20px;
}

.card-wrapper {
  flex: 0 0 392px;
  max-width: 392px;
}

.error-container {
  grid-column: 1 / -1;
  grid-row: 4;
  margin-top: 50px;
  text-align: center;
}

.pagination-container {
  position: fixed;
  bottom: 0;
  margin-bottom: 160px;
  left: 50%;
  transform: translateX(-50%);
  grid-column: 1 / -1;
  grid-row: 5;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.noData-h2,
.noData-p {
  color: var(--color-secondary);
}


/* 768 */
@media (max-width: 768px) {
  h1,
  h2,
  span,
  p {
    font-size: 16px;
  }
  .header {
    grid-column: 1 / 0;
  }

  .input-container {
    grid-column: 8;
  }

  .cards-container {
    display: flex;
    max-width: 728px;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
  }

  .error-container {
    grid-column: 1 / 9;
  }

  .pagination-container {
    grid-column: 1 / 9;
  }

  .card-wrapper {
    flex-basis: calc(50% - 10px);
    max-width: calc(50% - 10px);
  }
}


/* 320 */
@media (max-width: 320px) {

  h1,
  h2,
  span,
  p {
    font-size: 12px;
  }

  .header {
    grid-column: 1 / 0;
  }

  .input-container {
    width: 100%;
    grid-column: 1 / 0;

  }

  .error-container {
    grid-column: 1 / 7;
  }

  .pagination-container {
    position: relative;
    display: flex;
    justify-content: center;

  }

  .cards-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
    grid-column: 1 / -1;
  }

  .card-wrapper {
    flex-basis: 100%;
    max-width: 100%;
    margin-bottom: 10px;
  }


}
</style>
