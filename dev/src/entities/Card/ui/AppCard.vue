<script setup lang="ts">
export interface CardSchema {
    authorId: number;
    created: number;
    id: number;
    imageUrl: string;
    locationId: number;
    name: string;
};

export interface AvtorSchema {
    id: number;
    name: string;
};

export interface LocationsSchema {
    id: number;
    location: string;
};

import { ref } from 'vue';

const hover = ref(false);
const props = defineProps<{
    card: CardSchema;
    location: string;
    avtor: string;
}>();
</script>

<template>
    <div 
        class="card" 
        @mouseenter="hover = true" 
        @mouseleave="hover = false"
    >
        <div class="card__image-wrapper">
            <img 
                :src="`https://test-front.framework.team${card.imageUrl}`"
                alt="Card image"
                class="card__image"
            >
        </div>
        <div class="card__content" :class="{ 'card__content--hidden': hover }">
            <h2 class="card__title">{{ card.name }}</h2>
            <p class="card__date">{{ card.created }}</p>
        </div>
        <div class="card__hover-content" :class="{ 'card__hover-content--visible': hover }">
            <h2 class="card__author">{{ avtor }}</h2>
            <p class="card__location">{{ location }}</p>
        </div>
    </div>
</template>

<style scoped>
.card {
    position: relative;
    width: 392px;
    height: 260px;
    overflow: hidden;
    border-radius: 4px;
}

.card__image-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease-in-out;
}

.card:hover .card__image {
    transform: scale(1.15);
}

.card__content,
.card__hover-content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 300px;
    height: 82px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 15px;
    background-color: var(--bg-color);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform, opacity;
}

.card__content {
    opacity: 1;
    transform: translateY(0);
}

.card__content--hidden {
    opacity: 0;
    transform: translateY(100%);
}

.card__hover-content {
    opacity: 0;
    transform: translateX(-100%);
}

.card__hover-content--visible {
    opacity: 1;
    transform: translateX(0);
}

.card__content::before,
.card__hover-content::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 50px;
    width: 2px;
    background-color: var(--accent);
    transition: inherit;
}

.card__title {
    color: var(--color-secondary);
    font-size: 16px;
    font-family: 'Cormorant SC';
    margin-bottom: 4px;
}

.card__date,
.card__author,
.card__location {
    font-family: 'Caption';
    font-weight: 700;
    padding-left: 5px;
}

.card__date {
    color: var(--accent);
    font-size: 12px;
}

.card__author {
    color: var(--color-secondary);
    font-size: 16px;
}

.card__location {
    color: var(--accent);
    font-size: 12px;
}

@media (max-width: 768px) {
    .card {
        width: 352px;
        height: 220px;
    }
}

@media (max-width: 320px) {
    .card {
        width: 280px;
        height: 185px;
    }
    
    .card__content,
    .card__hover-content {
        width: 100%;
        padding: 12px;
    }
}
</style>