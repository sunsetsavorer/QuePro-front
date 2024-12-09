<script>

export default {
    name: 'PaginationPage',
    data() {
        return {
            page: 1,
            data: [],
            isDataFetched: false,
            isFetchingPagination: false,
        }
    },
    methods: {
        async increasePage() {
            this.page++;
        },
        async decreasePage() {
            this.page--;
        },
        async fetchData() {
            this.data = await this.fetchFunction(this.page);
            this.isDataFetched = true;
        },
        async fetchPagination() {
            await this.increasePage();
            const dataPagination = await this.fetchFunction(this.page);

            if(dataPagination.length)
                this.data.push(...dataPagination);
            else
                await this.decreasePage();

            this.isFetchingPagination = false;
        },
        async handleScroll() {
            const scrollPosition = window.scrollY + window.innerHeight;
            const pageHeight = document.documentElement.scrollHeight;

            if(scrollPosition >= pageHeight && !this.isFetchingPagination)
            {
                this.isFetchingPagination = true;
                await this.fetchPagination();
            }
        },
    },
    mounted() {
        this.fetchData();

        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        cardComponent: {
            type: Object,
            required: true,
        },
        fetchFunction: {
            type: Function,
            required: true,
        },
    }
}
</script>

<template>
    <div :class="
        [
            'data-page',
            'g-wrapper',
            {
                'data-page--empty': !data,
            }
        ]">
        <h1 class="g-title data-page__title">{{ title }}</h1>
        <div v-if="data" class="data-page__content-wrapper">
            <component
                :is="cardComponent"
                class="data-page__data-card"
                v-for="(item, index) in data" :key="index"
                :data="item"
            />
        </div>
        <div v-else-if="!data" class="data-page__content-preloader">
            <p class="g-title">
                {{
                    isDataFetched
                    ? 'Тут ничего нет x_x^'
                    : 'Загрузка...'
                }}
            </p>
        </div>
    </div>
</template>

<style scoped>
.data-page {
    padding-top: 127px;
    padding-bottom: 100px;
}

.data-page--empty {
    height: 100%;
}

.data-page__title {
    margin-bottom: 30px;
}

.data-page__content-preloader {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
}

.data-page__data-card {
}

.data-page__content-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
}

.data-page__data-card:hover {
    transform: scale(1.05);
}

@media (max-width: 1240px) {
    .data-page {
        padding-top: 120px;
    }
}

@media (max-width: 768px) {
    .data-page {
        padding-top: 100px;
    }
}

@media (max-width: 375px) {
    .data-page {
        padding-top: 70px;
    }
}
</style>