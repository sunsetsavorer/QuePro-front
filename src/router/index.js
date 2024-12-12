import { createRouter, createWebHistory } from "vue-router";

// Pages
import HomePage from "@/pages/HomePage.vue";
import NewsDetailPage from "@/pages/NewsDetailPage.vue";
import PaginationPage from "@/pages/PaginationPage.vue";

// Components
import NewsCard from "@/components/NewsCard.vue";
import TournamentCard from "@/components/TournamentCard.vue";

// Functions
import { fetchNews } from "@/services/newsService";
import { fetchTournamnents } from "@/services/tournamentService";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/news/:slug',
        name: 'NewsDetail',
        component: NewsDetailPage,
        props: true,
    },
    {
        path: '/news',
        name: 'News',
        component: PaginationPage,
        props: {
            title: 'Новости',
            cardComponent: NewsCard,
            fetchFunction: fetchNews,
        },
    },
    {
        path: '/tournaments',
        name: 'Tournaments',
        component: PaginationPage,
        props: {
            title: 'Турниры',
            cardComponent: TournamentCard,
            fetchFunction: fetchTournamnents,
        },
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;