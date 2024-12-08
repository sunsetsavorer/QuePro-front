<script>
import BurgerMenu from './BurgerMenu.vue';
import NavigationList from './NavigationList.vue';

export default {
    name: 'Header',
    components: {
        BurgerMenu,
        NavigationList,
    },
    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY > 30;
        }
    },
    data() {
        return {
            isScrolled: false,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
};
</script>

<template>
    <header :class="['header', 'g-wrapper', {'header--scrolled': isScrolled}]">
        <span class="header__logo"><a href="/">QuePro</a></span>
        <nav>
            <NavigationList class="header__list"/>
            <BurgerMenu class="header__burger"/>
        </nav>
    </header>
</template>

<style scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        position: fixed;
        width: 100%;
        box-sizing: border-box;

        padding-top: 50px;
        padding-bottom: 50px;

        transition: .3s ease;

        z-index: 100;
    }

    .header--scrolled {
        background-color: var(--color-background-dark);
    }

    .header__logo a{
        position: relative;
        z-index: 1;

        color: var(--color-text-primary);

        font-family: var(--montserrat);
        font-weight: 500;
        font-size: 22px;

        text-wrap: nowrap;
    }

    .header__list {
        display: flex;
        gap: 50px;
    }

    .header__burger {
        display: none;
    }

    @media (max-width: 1240px) {
        .header__list { 
            display: none;
        }

        .header__burger {
            display: block;
        }

        .header {
            padding-top: 35px;
            padding-bottom: 35px;
        }
    }

    @media (max-width: 768px) {
        .header {
            padding-top: 30px;
            padding-bottom: 30px;
        }
    }

    @media (max-width: 375px) {
        .header {
            padding-top: 20px;
            padding-bottom: 20px;
        }

        .header__logo {
            font-size: 20px;
        }
    }
</style>