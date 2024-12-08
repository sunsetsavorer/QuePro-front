<script>
import HeroBlock from '@/components/HeroBlock.vue';
import AboutSection from '@/components/AboutSection.vue';

export default {
    name: 'HomePage',
    components: {
        HeroBlock,
        AboutSection,
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
    </div>
</template>