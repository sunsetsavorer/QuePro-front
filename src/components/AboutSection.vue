<script>
export default {
    name: 'AboutSection',
    props: {
        title: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        mobilePhotoSource: {
            type: String,
            required: true,
        },
        pcPhotoSource: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            isMobile: false,
        }
    },
    methods: {
        handleWindowResize() {
            this.isMobile = window.innerWidth <= 768;
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleWindowResize);
    },
    destroyed() {
        window.removeEventListener('resize', this.handleWindowResize);
    },
}
</script>

<template>
    <section class="about-section g-wrapper">
        <div class="about-section__texts-wrapper">
            <h2 class="about-section__title g-title">{{ title }}</h2>
            <p class="about-section__text">{{ text }}</p>
        </div>
        <img
            class="about-section__image"
            alt="QuePro"
            :src="isMobile
                ? mobilePhotoSource
                : pcPhotoSource"
        >
    </section>
</template>

<style scoped>
.about-section {
    padding-top: 10vh;
    padding-bottom: 10vh;

    display: flex;
    justify-content: space-around;
    gap: 20px;
}

.about-section__texts-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
}

.about-section__image {
    width: 340px;
    height: 550px;
}

.about-section__text {
    font-family: var(--roboto);
    color: var(--color-text-primary);
    font-size: 24px;

    max-width: 500px;
}

@media (max-width: 940px) {
    .about-section__text {
        font-size: 20px;
    }
}

@media (max-width: 768px) {
    .about-section {
        flex-direction: column;
        gap: 30px;
    }

    .about-section__text {
        font-size: 18px;
        max-width: 100%;
    }

    .about-section__image {
        width: 100%;
        height: auto
    }
}
</style>