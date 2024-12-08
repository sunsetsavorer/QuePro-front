<script>
// Splide library
import '@splidejs/vue-splide/css';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

export default {
    name: 'SliderSection',
    props: {
        title: {
            type: String,
            required: true,
        },
        sliderData: {
            type: Object,
            required: true,
        },
        cardComponent: {
            type: Object,
            required: true,
        },
    },
    components: {
        Splide,
        SplideSlide,
    }
}
</script>

<template>
    <section class="slider-section g-wrapper">
        <h2 class="g-title slider-section__title">{{ title }}</h2>
        <Splide
            :options="{
                rewind: true,
                perPage: 5,
                pagination: true,
                perMove: 1,
                drag: nodrag,
                autoplay: true,
                breakpoints: {
                    1800: {
                        perPage: 4,
                    },
                    1540: {
                        perPage: 3.5,
                    },
                    1380: {
                        perPage: 3,
                    },
                    1060: {
                        perPage: 2.5,
                        drag: true,
                        arrows: false,
                        pagination: false,
                    },
                    910: {
                        perPage: 2,
                    },
                    700: {
                        perPage: 1.5,
                    },
                    550: {
                        perPage: 1,
                    }
                }
            }"
        >
        <SplideSlide v-for="(item, index) in sliderData" :key="index">
            <component :is="cardComponent" :data="item"/>
        </SplideSlide>
        </Splide>
    </section>
</template>

<style scoped>
    .slider-section {
        padding-top: 30px;
        padding-bottom: 30px;
    }

    .slider-section__title {
        margin-bottom: 30px;
    }
</style>