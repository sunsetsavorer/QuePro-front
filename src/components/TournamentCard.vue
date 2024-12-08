<script>
export default {
    name: 'TournamentCard',
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            cardBackgroundColor: this.data.discipline.hex_color,
        }
    }
}
</script>

<template>
    <div class="tournament-card" :style="{ backgroundColor: cardBackgroundColor }">
        <img :src="data.discipline.icon_path" alt="Иконка игры">
        <p class="tournament-card__name">{{ data.name }}</p>
        <p class="tournament-card__prize-fund">{{ data.prize_fund + ' руб.' }}</p>
        <p class="tournament-card__event-date">{{ data.event_date }}</p>
    </div>
</template>

<style scoped>
    .tournament-card {
        height: 350px;
        width: 300px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;

        padding-top: 20px;

        background-color: #2e2e2e;

        transition: .3s ease;
    }

    .tournament-card:hover {
        transform: translateY(10px);
    }

    .tournament-card p {
        color: var(--color-text-primary);
        text-align: center;
    }

    .tournament-card__name,
    .tournament-card__prize-fund {
        font-size: 20px;
        font-weight: 700;
    }

    .tournament-card__event-date {
        font-size: 12px;
    }

    .tournament-card__prize-fund,
    .tournament-card__event-date {
        font-family: var(--roboto);
    }

    .tournament-card__name {
        font-family: var(--montserrat);
    }
</style>