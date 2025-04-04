import { ref, computed, watchEffect } from 'vue';
import { useTeme } from '@/stores/theme';
import { Card } from '@/entities/Card';
import { Input } from '@/shared/Input';
import { NavBar } from '@/widgets/NavBar';
import { useCards } from '@/entities/Card/store/cards';
import { Pagination } from '@/shared/Pagination';
const theme = useTeme(); //Store Тема
const cards = useCards(); //Store Карточки
const searchText = computed(() => cards.search); //Текст
const typeTheme = computed(() => theme.theme); //Тип темы
const cardsData = computed(() => cards.cards); //Карточки
const page = ref(1); //Текущая. страница
const maxPage = computed(() => cards.maxPage); //Максимально страниц
const avtorsData = computed(() => cards.avtors); //Авторы
const locationsData = computed(() => cards.locations); //Локации
//Установка страницы
function setPage(p) {
    page.value = p;
}
//Запрос на получение
watchEffect(async () => {
    await cards.fetchCards(page.value); //Карточки
    await cards.seatchAvtor(); //Авторы
    await cards.seatchLocations(); //Локации
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (`app ${__VLS_ctx.typeTheme}`) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "container" },
});
const __VLS_0 = {}.NavBar;
/** @type {[typeof __VLS_components.NavBar, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "input-container" },
});
const __VLS_4 = {}.Input;
/** @type {[typeof __VLS_components.Input, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({}));
const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "error-container" },
});
if (__VLS_ctx.cardsData.length === 0) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: "noData-h2" },
    });
    (__VLS_ctx.searchText);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "noData-p" },
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "cards-container" },
});
for (const [card] of __VLS_getVForSourceType((__VLS_ctx.cardsData))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: (card.id),
        ...{ class: "card-wrapper" },
    });
    const __VLS_8 = {}.Card;
    /** @type {[typeof __VLS_components.Card, ]} */ ;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
        card: (card),
        location: (__VLS_ctx.locationsData && __VLS_ctx.locationsData[Math.floor(Math.random() * __VLS_ctx.locationsData?.length)]?.location),
        avtor: (__VLS_ctx.avtorsData && __VLS_ctx.avtorsData[Math.floor(Math.random() * __VLS_ctx.avtorsData?.length)]?.name),
    }));
    const __VLS_10 = __VLS_9({
        card: (card),
        location: (__VLS_ctx.locationsData && __VLS_ctx.locationsData[Math.floor(Math.random() * __VLS_ctx.locationsData?.length)]?.location),
        avtor: (__VLS_ctx.avtorsData && __VLS_ctx.avtorsData[Math.floor(Math.random() * __VLS_ctx.avtorsData?.length)]?.name),
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
}
if (__VLS_ctx.cardsData.length > 0) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "pagination-container" },
    });
    const __VLS_12 = {}.Pagination;
    /** @type {[typeof __VLS_components.Pagination, ]} */ ;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
        page: (__VLS_ctx.page),
        setPage: (__VLS_ctx.setPage),
        maxPage: (__VLS_ctx.maxPage),
    }));
    const __VLS_14 = __VLS_13({
        page: (__VLS_ctx.page),
        setPage: (__VLS_ctx.setPage),
        maxPage: (__VLS_ctx.maxPage),
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
}
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['input-container']} */ ;
/** @type {__VLS_StyleScopedClasses['error-container']} */ ;
/** @type {__VLS_StyleScopedClasses['noData-h2']} */ ;
/** @type {__VLS_StyleScopedClasses['noData-p']} */ ;
/** @type {__VLS_StyleScopedClasses['cards-container']} */ ;
/** @type {__VLS_StyleScopedClasses['card-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['pagination-container']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Card: Card,
            Input: Input,
            NavBar: NavBar,
            Pagination: Pagination,
            searchText: searchText,
            typeTheme: typeTheme,
            cardsData: cardsData,
            page: page,
            maxPage: maxPage,
            avtorsData: avtorsData,
            locationsData: locationsData,
            setPage: setPage,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
