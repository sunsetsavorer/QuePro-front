import ApiClient from "./api";

export const fetchNews = async (page = 1) => {
    try {
        const response = await ApiClient.get(`/news?page=${page}`);
        return response.data.data;
    } catch (error) {
        console.log('Тут ошибка');
        return false;
    }
}

export const fetchNewsDetail = async (slug) => {
    try {
        const response = await ApiClient.get(`/news/${slug}`);
        return response.data.data;
    } catch (error) {
        console.log('Тут ошибка');
        return false;
    }
}