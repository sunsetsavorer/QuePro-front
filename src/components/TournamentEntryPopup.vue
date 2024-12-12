<script>
import { registerForTournament } from '@/services/tournamentService';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

export default {
    name: 'TournamentEntryPopup',
    methods: {
        closePopup() {
            this.$emit('close', 'Закрыть попап -_-');
            this.resetPopup();
        },
        async onSubmit(values) {
            this.isRequestSuccess = await registerForTournament(this.tournament.id, values);
            this.isDataSended = true;
        },
        resetPopup() {
            this.isDataSended = false;
            this.isRequestSuccess = null;
        }
    },
    props: {
        tournament: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            schema: yup.object({
                team_name: yup
                    .string('Это поле должно быть строкой')
                    .required('Это поле обязательно'),
                captain_fullname: yup
                    .string('Это поле должно быть строкой')
                    .required('Это поле обязательно'),
                captain_phone: yup
                    .string('Это поле должно быть строкой')
                    .required('Это поле обязательно')
                    .matches(/^7\d{10}$/, 'Телефон должен быть в формате 7##########'),
                captain_email: yup
                    .string('Это поле должно быть строкой')
                    .required('Это поле обязательно')
                    .email('Что-то не похоже на почту'),
            }),
            isDataSended: false,
            isRequestSuccess: null,
        }
    },
    components: {
        Form,
        Field,
        ErrorMessage,
    }
}
</script>

<template>
    <div class="tournament-popup">
        <Form
            @submit="onSubmit"
            :validation-schema="schema"
            class="tournament-popup__form"
        >
            <p class="g-title tournament-popup__form-title">ЗАЯВКА НА УЧАСТИЕ В ТУРНИРЕ</p>
            <div @click="closePopup" class="tournament-popup__close-button">
                <span></span>
                <span></span>
            </div>
            <div v-if="!isDataSended" class="tournament-popup__form-inputs-wrapper">
                <div class="tournament-popup__form-input-group">
                    <label class="tournament-popup__form-input-label g-star" for="team_name">Название команды</label>
                    <ErrorMessage 
                        class=" tournament-popup__form-validation-error-message"
                        name="team_name"
                    />
                    <Field 
                        class="tournament-popup__form-input"
                        name="team_name"
                        id="team_name"
                    />
                </div>
                <div class="tournament-popup__form-input-group">
                    <label class="tournament-popup__form-input-label g-star" for="captain_fullname">ФИО капитана</label>
                    <ErrorMessage 
                        class=" tournament-popup__form-validation-error-message"
                        name="captain_fullname"
                    />
                    <Field 
                        class="tournament-popup__form-input"
                        name="captain_fullname"
                        id="captain_fullname"
                    />
                </div>
                <div class="tournament-popup__form-input-group">
                    <label class="tournament-popup__form-input-label g-star" for="captain_phone">Телефон капитана</label>
                    <ErrorMessage 
                        class=" tournament-popup__form-validation-error-message"
                        name="captain_phone"
                    />
                    <Field 
                        class="tournament-popup__form-input"
                        name="captain_phone"
                        id="captain_phone"
                    />
                </div>
                <div class="tournament-popup__form-input-group">
                    <label class="tournament-popup__form-input-label g-star" for="captain_email">Электронная почта капитана</label>
                    <ErrorMessage 
                        class=" tournament-popup__form-validation-error-message"
                        name="captain_email"
                    />
                    <Field 
                        class="tournament-popup__form-input"
                        name="captain_email"
                        id="captain_email"
                    />
                </div>
                <input class="tournament-popup__form-input tournament-popup__form-input--submit" type="submit">
            </div>
            <div v-else class="tournament-popup__result-container">
                <img
                    class="tournament-popup__result-mark"
                    :src="isRequestSuccess
                        ? '/src/assets/images/ui/check-mark.svg'
                        : '/src/assets/images/ui/cross-mark.svg'" 
                    alt="Иконка результата"
                >
                <p
                    :style="{color: isRequestSuccess ? '#00FFC6' : '#FF0000',}"
                    class="tournament-popup__result-text"
                >
                    {{ isRequestSuccess
                        ? 'Ваш запрос успешно отправлен. С вами свяжутся в течении 10 минут!'
                        : 'Упс! При запросе произошла ошибка! Попробуйте позже.'
                    }}
                </p>
            </div>
        </form>
    </div>
</template>

<style scoped>
.tournament-popup {
    position: fixed;
    z-index: 100;

    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    background-color: rgba(0, 0, 0, .7);

    display: flex;
    justify-content: center;
    align-items: center;
}   

.tournament-popup__form {
    background-color: var(--color-background-dark);
    
    width: 65%;

    position: relative;

    padding: 50px;
    padding-top: 90px;
}

.tournament-popup__form-inputs-wrapper {
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    width: 50%;
}

.tournament-popup__form-title {
    text-align: center;
}

.tournament-popup__form-input-label {
    font-family: var(--montserrat);
    color: var(--color-accent);
    font-weight: 700;
    font-size: 22px;
    text-wrap: nowrap;

    margin-top: 15px;
    margin-bottom: 8px;

    display: flex;
    align-items: center;
}

.tournament-popup__form-validation-error-message {
    font-size: 14px;
    font-family: var(--roboto);
    font-weight: 300;
    color: red;
    border: 3px solid red;
    border-radius: 5px;

    display: inline-block;

    margin-bottom: 8px;
    padding: 5px 10px;
}

.tournament-popup__form-input {
    padding: 15px 20px;

    border-radius: 7px;
    border: none;

    font-family: var(--montserrat);
    font-weight: 700;
    font-size: 18px;

    width: 100%;
    box-sizing: border-box;

    color: var(--color-background-dark);
}

.tournament-popup__form-input--submit {
    align-self: center;
    margin-top: 20px;

    text-transform: uppercase;
    font-size: 24px;

    background-color: var(--color-accent);
}

.tournament-popup__close-button {
    position: absolute;

    right: 30px;
    top: 30px;

    height: 50px;
    width: 50px;
}

.tournament-popup__close-button span {
    position: absolute;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    height: 5px;
    width: 100%;

    background-color: var(--color-accent);
}

.tournament-popup__close-button span:nth-child(1) {
    transform: translate(-50%, -50%) rotate(45deg);
}

.tournament-popup__close-button span:nth-child(2) { 
    transform: translate(-50%, -50%) rotate(-45deg);
}

.tournament-popup__result-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    min-height: 485px;
}

.tournament-popup__result-mark {
    width: 300px;
    height: 300px;
}

.tournament-popup__result-text {
    text-align: center;
    font-family: var(--montserrat);
    font-size: 36px;
    font-weight: 700;
}

@media (max-width: 1240px) {
    .tournament-popup__form-input-label {
        font-size: 18px;
    }

    .tournament-popup__form-inputs-wrapper {
        width: 70%;
    }

    .tournament-popup__form-validation-error-message {
        border-width: 3px;
    }
}

@media (max-width: 768px) {
    .tournament-popup__form-inputs-wrapper {
        width: 100%;
    }

    .tournament-popup__form-input-label {
        font-size: 14px;
    }

    .tournament-popup__form-input {
        font-size: 14px;
        padding: 10px 15px;
    }

    .tournament-popup__close-button {
        width: 40px;
        height: 40px;
    }

    .tournament-popup__form {
        padding-top: 70px;
    }

    .tournament-popup__form-validation-error-message {
        font-size: 12px;
        border-width: 2px;
    }

    .tournament-popup__result-mark {
        width: 250px;
        height: 250px;
    }

    .tournament-popup__result-text {
        font-size: 30px;
    }
}

@media (max-width: 375px) {
    .tournament-popup__form-inputs-wrapper {
        width: 100%;
    }

    .tournament-popup__form-input-label {
        font-size: 10px;
    }

    .tournament-popup__form-input {
        font-size: 10px;
        padding: 10px 15px;
    }

    .tournament-popup__close-button {
        width: 30px;
        height: 30px;
    }

    .tournament-popup__form {
        padding-top: 60px
    }

    .tournament-popup__form-validation-error-message {
        font-size: 10px;
        border-width: 2px;
    }

    .tournament-popup__result-mark {
        width: 200px;
        height: 200px;
    }

    .tournament-popup__result-text {
        font-size: 24px;
    }
}
</style>