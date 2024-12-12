<script>
// Splide library
import '@splidejs/vue-splide/css';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

// Components
import TournamentEntryPopup from './TournamentEntryPopup.vue';
import { date } from 'yup';

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
        isDataFetched: {
            type: Boolean,
            required: true,
        }
    },
    data() {
        return {
            isPopupOpen: false,
            selectedTournament: null,
        }
    },
    components: {
        Splide,
        SplideSlide,
        TournamentEntryPopup,
    },
    methods: {
        openPopup(tournament) {
            this.selectedTournament = tournament;
            this.isPopupOpen = true;
        },
        closePopup() {
            this.isPopupOpen = false;
        }
    },
}
</script>

<template>
    <section class="slider-section g-wrapper">
        <TournamentEntryPopup
            v-if="isPopupOpen"
            @close="closePopup"
            :tournament="selectedTournament"
        />
        <h2 class="g-title slider-section__title">{{ title }}</h2>
        <Splide
            v-if="isDataFetched"
            class="slider-section__slider"
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
            <component
                :is="cardComponent"
                :data="item"
                @openTournamentPopup="openPopup(item)"
            />
        </SplideSlide>
        </Splide>
        <div v-else class="slider-section__loading-container">
            <p class="g-title">Загрузка...</p>
        </div>
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

    .slider-section__loading-container {
        min-height: 370px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>