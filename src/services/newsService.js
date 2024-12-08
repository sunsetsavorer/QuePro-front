import ApiClient from "./api";

export const fetchNews = async (page = 1) => {
    const response = await
        ApiClient.get(`/news?page=${page}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
            return null;
        });
    return response.data;
}