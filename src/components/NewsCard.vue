<script>
export default {
    name: 'NewsCard',
    props: {
        data: {
            type: Object,
            default: {
                title: 'Киберновость',
                publication_date: 'no-data',
                slug: '',
                picture_path: '/src/assets/images/mockups/news.png'
            }
        },
    },
    data() {
        return {
            slug: this.data.slug
                ? `/news/${this.data.slug}`
                : `/news`,
        }
    }
}
</script>

<template>
    <a :href="slug" class="news-card">
        <div class="news-card__texts">
            <p class="news-card__title">{{ data.title }}</p>
            <p class="news-card__date">{{ data.publication_date }}</p>
        </div>
        <img
            class="news-card__image"
            :src="data.picture_path"
            alt="Картинка Новости"
            >
    </a>
</template>

<style scoped>
    .news-card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        height: 350px;
        width: 300px;

        background-color: #2E2E2E;

        overflow: hidden;

        transition: .3s ease;
    }

    .news-card:hover {
        transform: translateY(10px);
    }

    .news-card__image {
        transition: .3s ease;
    }

    .news-card:hover .news-card__image {
        transform: scale(1.1);
    }

    .news-card__texts {
        padding: 20px;
    }

    .news-card__title {
        font-family: var(--roboto);
        color: var(--color-text-primary);

        margin-bottom: 20px;
    }

    .news-card__date {
        font-family: var(--roboto);
        color: #ACACAC;
    }
</style>