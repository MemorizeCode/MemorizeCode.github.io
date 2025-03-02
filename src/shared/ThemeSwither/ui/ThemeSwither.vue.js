import { useTeme } from '@/stores/theme';
import { computed } from 'vue';
import black from '/switch_b.png';
import light from '/switch_l.png';
const theme = useTeme();
const typeTheme = computed(() => theme.theme);
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    src: (__VLS_ctx.typeTheme === 'dark' ? __VLS_ctx.black : __VLS_ctx.light),
    alt: (`${__VLS_ctx.typeTheme}`),
});
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            black: black,
            light: light,
            typeTheme: typeTheme,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
