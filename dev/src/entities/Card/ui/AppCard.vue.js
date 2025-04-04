;
;
;
import { ref } from 'vue';
const hover = ref(false);
const props = defineProps();
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['card__image']} */ ;
/** @type {__VLS_StyleScopedClasses['card__content']} */ ;
/** @type {__VLS_StyleScopedClasses['card__hover-content']} */ ;
/** @type {__VLS_StyleScopedClasses['card__content']} */ ;
/** @type {__VLS_StyleScopedClasses['card__hover-content']} */ ;
/** @type {__VLS_StyleScopedClasses['card__date']} */ ;
/** @type {__VLS_StyleScopedClasses['card__author']} */ ;
/** @type {__VLS_StyleScopedClasses['card__location']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['card__content']} */ ;
/** @type {__VLS_StyleScopedClasses['card__hover-content']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onMouseenter: (...[$event]) => {
            __VLS_ctx.hover = true;
        } },
    ...{ onMouseleave: (...[$event]) => {
            __VLS_ctx.hover = false;
        } },
    ...{ class: "card" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "card__image-wrapper" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    src: (`https://test-front.framework.team${__VLS_ctx.card.imageUrl}`),
    alt: "Card image",
    ...{ class: "card__image" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "card__content" },
    ...{ class: ({ 'card__content--hidden': __VLS_ctx.hover }) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
    ...{ class: "card__title" },
});
(__VLS_ctx.card.name);
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "card__date" },
});
(__VLS_ctx.card.created);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "card__hover-content" },
    ...{ class: ({ 'card__hover-content--visible': __VLS_ctx.hover }) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
    ...{ class: "card__author" },
});
(__VLS_ctx.avtor);
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "card__location" },
});
(__VLS_ctx.location);
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['card__image-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['card__image']} */ ;
/** @type {__VLS_StyleScopedClasses['card__content']} */ ;
/** @type {__VLS_StyleScopedClasses['card__content--hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['card__title']} */ ;
/** @type {__VLS_StyleScopedClasses['card__date']} */ ;
/** @type {__VLS_StyleScopedClasses['card__hover-content']} */ ;
/** @type {__VLS_StyleScopedClasses['card__hover-content--visible']} */ ;
/** @type {__VLS_StyleScopedClasses['card__author']} */ ;
/** @type {__VLS_StyleScopedClasses['card__location']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            hover: hover,
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
