<script>
import HeroBlock from '@/components/HeroBlock.vue';

export default {
    name: 'HomePage',
    components: {
        HeroBlock,
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
    </div>
</template>