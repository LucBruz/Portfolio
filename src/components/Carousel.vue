<script>

import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css/skyblue';
import CarouselCard from './CarouselCard.vue';

export default {
    components: {
        Splide,
        SplideSlide,
        CarouselCard
    },
    props: ['data'],
    data() {
        return {
        }
    },
    methods: {
        
    },

}
</script>

<template>
    <div class="container">
        <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
            <SplideSlide v-for="element in data" :key="index">
                <CarouselCard :data="element" />
            </SplideSlide>
        </Splide>
    </div>
</template>

<style scoped >
.container {
    background: transparent;
    /* box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2); */
    border-radius: 0.5em;
    padding-top: 50px;
    padding-bottom: 50px;
}

.card {
    background-color: var(--background-color);

    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all 0.3s ease-in-out;

    transform: scale(1.3) translateY(0px);

    width: 100px;
    margin: 0 auto;
}

.card:hover {
    transform: scale(1.3);
    transition: all 0.3s ease-in-out;
}

.card img {
    width: 500px;
}
</style>