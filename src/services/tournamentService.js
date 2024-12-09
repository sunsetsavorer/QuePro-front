import ApiClient from "./api";

export const fetchTournamnents = async (page = 1) => {
    try {
        const response = await ApiClient.get(`/tournaments?page=${page}`);
        return response.data.data;
    } catch (error) {
        console.log('Тут ошибка');
    }
}