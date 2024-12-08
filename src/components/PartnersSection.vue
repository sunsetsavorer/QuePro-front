<script>
export default {
    name: 'PartnersSection',
    props: {
        partners: {
            type: Array,
            default: [],
        },
    }
}
</script>

<template>
    <section class="partners-section g-wrapper">
        <h2 class="g-title g-title--dark partners-section__title">Наши партнеры</h2>
        <div class="partners-section__partners-list">
            <img
                class="partners-section__partner-icon"
                v-for="(partnerSrc, index) in partners" :key="index"
                :src="partnerSrc"
                alt="Иконка партнера"
            >
        </div>
    </section>
</template>

<style scoped>
    .partners-section {
        background-color: var(--color-accent);

        padding-top: 30px;
        padding-bottom: 30px;
    }

    .partners-section__partners-list {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
    }

    .partners-section__partners-list,
    .partners-section__partner-icon {
        transition: .3s ease
    }

    .partners-section__title {
        margin-bottom: 30px;
    }

    @media (max-width: 768px) {
        .partners-section__partners-list {
            gap: 15px;
        }

        .partners-section__partner-icon {
            height: 50px;
        }
    }

    @media (max-width: 375px) {
        .partners-section__partner-icon {
            height: 30px;
        }
    }
</style>