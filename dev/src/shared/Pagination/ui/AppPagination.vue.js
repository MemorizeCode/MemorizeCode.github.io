import { computed, ref, watch } from 'vue';
import left from '/left.png';
import right from '/right.png';
import left_black from '/left_black.png';
import right_black from '/right_black.png';
import { useTeme } from '@/stores/theme';
const props = defineProps();
const pages = ref([]); // Храним список страниц (числа или '...')
const theme = useTeme();
const color_theme = computed(() => theme.theme);
// Вычисляемые свойства для стрелок
const leftArrow = computed(() => (color_theme.value === 'dark' ? left : left_black));
const rightArrow = computed(() => (color_theme.value === 'dark' ? right : right_black));
const updatePages = () => {
    const { page, maxPage } = props;
    console.log(page, maxPage);
    pages.value = [];
    if (page < 4) {
        for (let i = 1; i <= 4; i++) {
            pages.value.push(i);
        }
        pages.value.push('...');
        pages.value.push(maxPage);
    }
    else {
        if (page >= maxPage - 1 || page >= maxPage - 2) {
            pages.value.push(1);
            pages.value.push('...');
            pages.value.push(maxPage - 1);
            pages.value.push(maxPage);
        }
        else {
            pages.value.push(1);
            pages.value.push('...');
            pages.value.push(page - 1);
            pages.value.push(page);
            pages.value.push(page + 1);
            pages.value.push('...');
            pages.value.push(maxPage);
        }
    }
};
watch([() => props.page, () => props.maxPage], updatePages, { immediate: true });
function decPage() {
    if (props.page > 1) {
        props.setPage(props.page - 1);
    }
}
function incPage() {
    if (props.page < props.maxPage) {
        props.setPage(props.page + 1);
    }
}
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "solo_pagination" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    ...{ onClick: (__VLS_ctx.decPage) },
    src: (__VLS_ctx.leftArrow),
    ...{ style: ({ marginRight: '10px' }) },
});
for (const [page, index] of __VLS_getVForSourceType((__VLS_ctx.pages))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                typeof page === 'number' && props.setPage(page);
            } },
        key: (index),
        ...{ class: ({ active__page: props.page === page }) },
        disabled: (page === '...'),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ({ active__page__text: props.page === page }) },
    });
    (page);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    ...{ onClick: (__VLS_ctx.incPage) },
    src: (__VLS_ctx.rightArrow),
    ...{ style: ({ marginLeft: '10px' }) },
});
/** @type {__VLS_StyleScopedClasses['solo_pagination']} */ ;
/** @type {__VLS_StyleScopedClasses['active__page']} */ ;
/** @type {__VLS_StyleScopedClasses['active__page__text']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            pages: pages,
            leftArrow: leftArrow,
            rightArrow: rightArrow,
            decPage: decPage,
            incPage: incPage,
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
