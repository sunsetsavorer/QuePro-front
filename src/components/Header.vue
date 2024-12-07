<script>
import BurgerMenu from './BurgerMenu.vue';
import NavigationList from './NavigationList.vue';

export default {
    name: 'Header',
    components: {
        BurgerMenu,
        NavigationList,
    },
};
</script>

<template>
    <header class="header g-wrapper">
        <a href="#" class="header__logo">QuePro</a>
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

        padding-top: 50px;
        padding-bottom: 50px;

        height: 50px;
    }

    .header__logo {
        color: var(--color-text-primary);

        font-family: var(--montserrat);
        font-weight: 500;
        font-size: 22px;

        text-wrap: nowrap;

        position: relative;
        z-index: 1;
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
            padding-top: 40px;
            padding-bottom: 40px;
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
            padding-top: 10px;
            padding-bottom: 10px;
        }

        .header__logo {
            font-size: 20px;
        }
    }
</style>