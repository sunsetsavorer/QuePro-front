<script>
export default {
    name: 'NavigationList'
}
</script>

<template>
    <ul class="navigation-list">
        <li><a href="/news">Новости</a></li>
        <li><a href="/tournaments">Турниры</a></li>
    </ul>
</template>

<style scoped>
a {
    color: var(--color-text-primary);

    font-family: var(--montserrat);
    font-weight: 500;
    font-size: 22px;

    text-wrap: nowrap;
}
</style>