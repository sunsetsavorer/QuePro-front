<script>
import NavigationList from './NavigationList.vue';

export default {
    name: 'BurgerMenu',
    components: {
        NavigationList,
    },
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
        },
    },
}
</script>

<template>
    <div class="burger-menu">
        <div :class="['burger-menu__list-wrapper', {'burger-menu__list-wrapper--active': isOpen}]">
            <NavigationList class="burger-menu__list g-wrapper"/>
        </div>
        <div @click="toggleMenu" :class="['burger-menu__button', {'burger-menu__button--active': isOpen}]">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<style scoped>
    .burger-menu__button {
        height: 50px;
        width: 50px;
        
        position: relative;
    }

    .burger-menu__button span {
        position: absolute;

        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);

        height: 5px;
        width: 100%;

        background-color: var(--color-accent);

        transition: .3s ease;
    }

    .burger-menu__button span:nth-child(1) { top: 25%; }

    .burger-menu__button span:nth-child(3) { top: 75%; }

    .burger-menu__button--active span:nth-child(1) {
        top: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
    }

    .burger-menu__button--active span:nth-child(2) { opacity: 0; }

    .burger-menu__button--active span:nth-child(3) {
        top: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
    }

    .burger-menu__list-wrapper {
        background-color: var(--color-background-dark);

        height: 100vh;
        width: 100%;

        position: fixed;

        top: 0;
        right: -100%;

        transition: .5s ease;
    }

    .burger-menu__list-wrapper--active { 
        right: 0; 
    }

    .burger-menu__list {
        margin-top: 150px;

        display: flex;
        flex-direction: column;

        gap: 15px;
    }

    @media (max-width: 1240px) {
        .burger-menu__list {
            margin-top: 110px;
        }
    }


    @media (max-width: 768px) {
        .burger-menu__button {
            width: 40px;
            height: 40px;
        }

        .burger-menu__button span {
            height: 4px;
        }

        .burger-menu__list {
            margin-top: 100px;
        }
    }

    @media (max-width: 375px) {
        .burger-menu__button {
            width: 30px;
            height: 30px;
        }

        .burger-menu__button span {
            height: 3px;
        }

        .burger-menu__list {
            margin-top: 70px;
        }
    }
</style>