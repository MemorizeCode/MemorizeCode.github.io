<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import left from '/left.png';
import right from '/right.png';
import left_black from '/left_black.png';
import right_black from '/right_black.png';
import { useTeme } from '@/stores/theme';

const props = defineProps<{
  page: number;
  maxPage: number;
  setPage: (page: number) => void;
}>();

const pages = ref<(number | string)[]>([]); // Храним список страниц (числа или '...')

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
    if (page >= maxPage || page >= maxPage - 1) {
      pages.value.push(1);
      pages.value.push('...');
      pages.value.push(maxPage - 1);
      pages.value.push(maxPage);
    }
    else if (page >= maxPage - 1) {
      pages.value.push(1);
      pages.value.push('...');
      pages.value.push(maxPage - 2);
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



</script>

<template>
  <div class="solo_pagination">
    <!-- Используем динамические иконки для стрелок -->
    <img :src="leftArrow" :style="{ marginRight: '10px' }" @click="decPage" />

    <button v-for="(page, index) in pages" :key="index" :class="{ active__page: props.page === page }"
      @click="typeof page === 'number' && props.setPage(page)" :disabled="page === '...'">
      <span :class="{ active__page__text: props.page === page }">
        {{ page }}
      </span>
    </button>

    <img :src="rightArrow" :style="{ marginLeft: '10px' }" @click="incPage" />
  </div>
</template>

<style scoped>
button {
  background-color: var(--color--pag);
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: none;
  outline: none;
  margin: 5px;
  font-weight: var(--font-w-300);
  cursor: pointer;
}

button:disabled {
  cursor: default;
  background-color: transparent;
  border-bottom: none !important;
}

button:hover:not(:disabled) {
  border-radius: 0px;
  border-bottom: 1px solid gray;
}

span {
  color: var(--color-secondary);
  font-size: 16px;
  font-weight: 300;
}

.active__page__text {
  font-weight: 500;
}

.active__page {
  border-radius: 4px;
  background-color: var(--color-secondary-p);
}

img {
  cursor: pointer;
}
</style>