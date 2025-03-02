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

import {ref } from 'vue';


const hover = ref(false);
const props = defineProps<{
    card: CardSchema;
    location: string;
    avtor: string;
}>();



</script>

<template>
    <div class="card" @mouseenter="hover = true" @mouseleave="hover = false">
        <img :src="`https://test-front.framework.team${props.card.imageUrl}`">
        <div class="card__block" :class="{ 'fade-out': hover }">
            <h2>{{ props.card.name }}</h2>
            <p>{{ props.card.created }}</p>
        </div>
        <div class="new-card__block" v-if="hover">
            <h2>{{ props.avtor }}</h2>
            <p>{{ props.location }}</p>
        </div>
    </div>
</template>

<style scoped>
.card {
    flex: 0 1 calc(25% - 16px);
    position: relative;
    width: 392px;
    height: 260px;
    overflow: hidden;
    transition:  0.5s;
}
.card img {
    transition:  0.5s;

}
.card:hover img {
    transition:  0.5s;
    transform:  scale(1.15);
}

.card__block {
    position: absolute;
    bottom: 0;
    width: 300px;
    height: 82px;
    padding: 5px;
    background-color: var(--bg-color);
}

.card__block::before {
    content: '';
    position: absolute;
    top: 50%; 
    left: 0;  
    transition:   0.5s;
    transform: translateY(-50%); 
    height: 50px;
    width: 2px; 
    background-color: var(--accent);
}

img {
    width: 392px;
    height: 260px;
}

h2 {
    color: var(--color-secondary);
    padding-left: 5px;

}

p {
    color: var(--accent);
    font-size: 16px;
    padding-left: 5px;
}

.fade-out {
    transform: translateY(60px); 
    transition:  0.5s;
    
}

.new-card__block {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 300px;
    height: 82px;
    padding: 5px;
    background-color: var(--bg-color);
    transition:  0.5s;
}


.new-card__block ::before {
    content: '';
    transition:  0.5s;
    position: absolute;
    top: 50%; 
    left: 0;   
    transform: translateY(-50%); 
    height: 50px;
    width: 2px; 
    background-color: var(--accent);
}



@media (max-width: 768px) {

    .card {
        width: 352px;
        height: 220px;
    }

    .card img {
        width: 352px;
        height: 220px;
    }

    .card__block, .new-card__block {
        height: 66px;
    }
}


@media (max-width: 320px) {
    .card {
        width: 280px;
        height: 185px;
    }

    .card img {
        width: 280px;
        height: 185px;
    }

    .card__block, .new-card__block {
        width: 236px;
        height: 45px;
    }
  

}


</style>