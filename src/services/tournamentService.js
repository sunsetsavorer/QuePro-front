import ApiClient from "./api";

export const fetchTournamnents = async (page = 1) => {
    try {
        const response = await ApiClient.get(`/tournaments?page=${page}`);
        return response.data.data;
    } catch (error) {
        console.log('Тут ошибка');
        return false;
    }
}

export const registerForTournament = async (tournamentId, data) => {
    try {
        const response = await ApiClient
            .post(
                `/tournaments/${tournamentId}/entries`,
                data,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );

        console.log(response);
        return true;
    } catch (error) {
        console.log('Ошибка при отправке заявки на участие');

        return false;
    }
}