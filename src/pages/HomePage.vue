<script>
// Api
import { fetchNews } from '@/services/newsService';
import { fetchTournamnents } from '@/services/tournamentService';

// Components
import HeroBlock from '@/components/HeroBlock.vue';
import AboutSection from '@/components/AboutSection.vue';
import PartnersSection from '@/components/PartnersSection.vue';
import SliderSection from '@/components/SliderSection.vue';
import NewsCard from '@/components/NewsCard.vue';
import TournamentCard from '@/components/TournamentCard.vue';

export default {
    name: 'HomePage',
    components: {
        HeroBlock,
        AboutSection,
        PartnersSection,
        SliderSection,
        NewsCard,
        TournamentCard,
    },
    mounted() {
        this.fetch();
    },
    data() {
        return {
            NewsCardComponent: NewsCard,
            TournamentCardComponent: TournamentCard,
            news: null,
            tournaments: null,
        };
    },
    methods: {
        async fetch() {
            this.news = await fetchNews();
            this.tournaments = await fetchTournamnents();
        }
    }
}
</script>

<template>
    <div class="home-page">
        <HeroBlock
            title="QuePro"
            subtitle=
            "Организатор Киберспортивных Событий"
            videoSource="/src/assets/videos/hero-block-bg.mp4"
            ctaText="СМОТРЕТЬ"
            ctaLink="https://www.youtube.com/@LofiGirl"
        />
        <AboutSection
            title="О нас"
            mobilePhotoSource="/src/assets/images/about_us_section/mobile.png"
            pcPhotoSource="/src/assets/images/about_us_section/pc.png"
            text="Мы — QuePro, платформа для киберспортсменов и любителей игр.
                Организуем и освещаем самые захватывающие турниры, чтобы каждый участник и
                фанат мог погрузиться в мир профессионального гейминга. Присоединяйтесь к нам,
                чтобы следить за новостями, участвовать в событиях и поддерживать своих фаворитов!"
        />
        <PartnersSection
            :partners="[
                '/src/assets/images/partners/adobe.svg',
                '/src/assets/images/partners/github.svg',
                '/src/assets/images/partners/hubspot.svg',
                '/src/assets/images/partners/ibm.svg',
                '/src/assets/images/partners/notion.svg',
                '/src/assets/images/partners/gitlab.svg',
                '/src/assets/images/partners/google.svg',
                '/src/assets/images/partners/tinder.svg',
                '/src/assets/images/partners/zoom.svg',
                '/src/assets/images/partners/spotify.svg',
                '/src/assets/images/partners/microsoft.svg',
            ]"
        />
        <SliderSection
            v-if="news"
            title="Последние новости"
            :sliderData="news"
            :cardComponent="NewsCardComponent"
        />
        <SliderSection
            v-if="tournaments"
            title="Предстоящие турниры"
            :sliderData="tournaments"
            :cardComponent="TournamentCardComponent"
        />
    </div>
</template>