import { useCards } from '@/entities/Card/store/cards';
import { computed } from 'vue';
const props = defineProps();
const cards = useCards();
const currentPage = computed(() => cards.currPage);
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: (`solo_pagination`) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            props.setPage(props.page);
        } },
    ...{ class: (` ${props.page == __VLS_ctx.currentPage ? 'active__page' : ''}`) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: (` ${props.page == __VLS_ctx.currentPage ? 'active__page__text' : ''}`) },
});
(props.page);
/** @type {__VLS_StyleScopedClasses['solo_pagination']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            currentPage: currentPage,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
