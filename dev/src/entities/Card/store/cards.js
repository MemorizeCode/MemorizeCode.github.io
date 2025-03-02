import { ref } from 'vue';
import { defineStore } from 'pinia';
import { $api } from '@/api/api.js';
export const useCards = defineStore('cards', () => {
    const cards = ref([]); //Карточки
    const avtors = ref([]); //Авторы
    const locations = ref([]); //Локация
    const search = ref(""); //Текст поиска
    const total = ref(0); //Всего карточек
    const maxPage = ref(0); //Максмально страниц
    const currPage = ref(0); //Текущая страница
    //Получить карточки
    async function fetchCards(page = 0, limit = 6) {
        currPage.value = page;
        const response = await $api.get(`/paintings/?_page=${page}&_limit=${limit}`);
        cards.value = response.data;
        total.value = response.headers['x-total-count'];
        maxPage.value = Math.ceil(total.value / limit);
    }
    //Поиск с текстом
    async function searchCards(page, search) {
        currPage.value = page;
        const response = await $api.get(`/paintings/?_page=${1}&_limit=6&q=${search}`);
        cards.value = response.data;
    }
    //Получение авторов
    async function seatchAvtor() {
        const response = await $api.get('/authors');
        avtors.value = response.data;
    }
    //Получение локакаций
    async function seatchLocations() {
        const response = await $api.get('/locations');
        locations.value = response.data;
    }
    return { cards, fetchCards, searchCards, search, total, maxPage, currPage, seatchAvtor, avtors, seatchLocations, locations };
});
