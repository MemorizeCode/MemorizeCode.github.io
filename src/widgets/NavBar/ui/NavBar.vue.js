import { useTeme } from '@/stores/theme';
import { ThemeSwither } from '@/shared/ThemeSwither';
import { computed } from 'vue';
import logoL from '/logo_l.png';
import logoB from '/logo_b.png';
const theme = useTeme();
const typeTheme = computed(() => theme.theme);
const changeTheme = () => {
    theme.theme = theme.switchTheme;
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({
    ...{ class: "header" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    src: (__VLS_ctx.typeTheme === 'dark' ? __VLS_ctx.logoL : __VLS_ctx.logoB),
    alt: "Logo",
});
const __VLS_0 = {}.ThemeSwither;
/** @type {[typeof __VLS_components.ThemeSwither, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ 'onClick': {} },
}));
const __VLS_2 = __VLS_1({
    ...{ 'onClick': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_4;
let __VLS_5;
let __VLS_6;
const __VLS_7 = {
    onClick: (__VLS_ctx.changeTheme)
};
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['header']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            ThemeSwither: ThemeSwither,
            logoL: logoL,
            logoB: logoB,
            typeTheme: typeTheme,
            changeTheme: changeTheme,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
