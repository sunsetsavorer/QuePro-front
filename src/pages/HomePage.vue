<script>
import HeroBlock from '@/components/HeroBlock.vue';
import AboutSection from '@/components/AboutSection.vue';
import PartnersSection from '@/components/PartnersSection.vue';

export default {
    name: 'HomePage',
    components: {
        HeroBlock,
        AboutSection,
        PartnersSection,
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
    </div>
</template>