<script>
export default {
    name: 'HeroBlock',
    props: {
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            required: true,
        },
        videoSource: {
            type: String,
            required: true,
        },
        ctaText: {
            type: String,
            required: true,
        },
        ctaLink: {
            type: String,
            required: true,
        }
    }
}
</script>

<template>
    <section class="hero-block">
        <video class="hero-block__background" autoplay loop muted playsinline>
            <source :src="this.videoSource" type="video/mp4">
            <p>Ваш браузер не поддерживает видео.</p>
        </video>
        <div class="hero-block__content g-wrapper">
            <h1 class="hero-block__title">{{ title  }}</h1>
            <p class="hero-block__subtitle">{{ subtitle }}</p>
            <a class="hero-block__cta-button" :href="ctaLink" target="_blank">
                {{ ctaText }}
            </a>
        </div>
    </section>
</template>

<style scoped>
.hero-block {
    position: relative;
}

.hero-block__background {
    width: 100%;
    min-height: 400px;

    object-fit: cover;

    position: relative;
    z-index: -1;

    opacity: .15;
}

.hero-block__content {
    position: absolute;

    width: 100%;
    box-sizing: border-box;

    top: 30%;

    display: flex;
    flex-direction: column;

    gap: 10px;
}

.hero-block__title {
    font-family: var(--montserrat);
    font-weight: 700;
    font-size: 36px;
    color: var(--color-accent);
}

.hero-block__subtitle {
    font-family: var(--roboto);
    color: var(--color-text-primary);
    font-size: 32px;

    width: 25%;
}

.hero-block__cta-button {
    font-family: var(--roboto);
    font-weight: 700;
    color: var(--color-accent);
    font-size: 26px;

    border: 2px solid white;

    padding: 10px 20px;

    align-self: flex-start;
}

@media (max-width: 1240px) {
    .hero-block__title {
        font-size: 30px;
    }

    .hero-block__subtitle {
        font-size: 28px;
    }

    .hero-block__cta-button {
        font-size: 20px;
    }
}

@media (max-width: 768px) {
    .hero-block__title {
        font-size: 26px;
    }

    .hero-block__subtitle {
        font-size: 24px;
    }

    .hero-block__cta-button {
        font-size: 16px;
    }
}
</style>