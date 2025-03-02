import { useCards } from '@/entities/Card/store/cards';
import { ref, watch } from 'vue';
const cards = useCards(); //Store карточек
const searchText = ref(cards.search); //Инппут
//При изменение инпута запрашиваем карточки
watch(searchText, (newValue) => {
    cards.search = newValue;
    searchItem(cards.currPage, newValue);
});
//фунеция
async function searchItem(page, search) {
    await cards.searchCards(page, search);
}
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['input']} */ ;
/** @type {__VLS_StyleScopedClasses['input_c']} */ ;
/** @type {__VLS_StyleScopedClasses['input_c']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "input_c light_g " },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    src: "@/assets/images/icon-1.png",
    alt: "",
    ...{ class: "icon" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({
    ...{ class: "input" },
    type: "text",
    placeholder: "Painting title",
    value: (__VLS_ctx.searchText),
});
/** @type {__VLS_StyleScopedClasses['input_c']} */ ;
/** @type {__VLS_StyleScopedClasses['light_g']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['input']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            searchText: searchText,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
