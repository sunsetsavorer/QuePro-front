<script>
import { fetchNewsDetail } from '@/services/newsService';
import router from '@/router';

export default {
    name: 'NewsDetailPage',
    props: {
        slug: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            news: null,
        }
    },
    mounted() {
        this.fetch();
    },
    methods: {
        async fetch() {
            this.news = await fetchNewsDetail(this.slug);

            if(!this.news)
                router.push({ name: 'News' });

            document.title = this.news.title;
        }
    }
}
</script>

<template>
    <section v-if="this.news" class="news-section g-wrapper">
        <h1 class="g-title news-section__title">{{ news.title }}</h1>
        <p class="news-section__publication-date">{{ news.publication_date }}</p>
        <p class="news-section__description">{{ news.description }}</p>
        <a class="news-section__image-wrapper" :href="news.video_link" target="_blank">
            <img class="news-section__image":src="news.picture_path" alt="Фото новости">
            <div class="news-section__image-overlay">
                <p class="news-section__image-overlay-text g-title">СМОТРЕТЬ ВИДЕО</p>
            </div>
        </a>
    </section>
</template>

<style scoped>
    .news-section {
        display: flex;
        flex-direction: column;

        padding-top: 127px;
        padding-bottom: 100px;
    }

    .news-section__title {
        margin-bottom: 15px;
    }

    .news-section__description,
    .news-section__publication-date {
        font-family: var(--roboto);
        color: var(--color-text-primary);

        margin-bottom: 20px;
    }

    .news-section__publication-date {
        font-size: 24px;
    }

    .news-section__description {
        font-size: 30px;
    }

    .news-section__image-wrapper {
        position: relative;
        overflow: hidden;
        align-self: flex-start;
    }

    .news-section__image {
        width: 60vw;

        transition: .3s ease;
    }

    .news-section__image-overlay {
        position: absolute;

        top: 0;
        right: 0;
        left: 0;
        bottom: 0;

        background-color: rgba(0, 0, 0, .7);

        display: none;
    }

    .news-section__image-overlay-text {
        text-align: center;
    }

    .news-section__image-wrapper:hover .news-section__image {
        transform: scale(1.2);
    }

    .news-section__image-wrapper:hover .news-section__image-overlay {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    @media (max-width: 1240px) {
        .news-section {
            padding-top: 120px;
        }
    }

    @media (max-width: 768px) {
        .news-section {
            padding-top: 100px;
        }

        .news-section__publication-date {
            font-size: 20px;
        }

        .news-section__description {
            font-size: 24px;
        }

        .news-section__image {
            width: 100%;
        }
    }

    @media (max-width: 375px) {
        .news-section {
            padding-top: 70px;
        }

        .news-section__publication-date {
            font-size: 16px;
        }

        .news-section__description {
            font-size: 20px;
        }
    }
</style>