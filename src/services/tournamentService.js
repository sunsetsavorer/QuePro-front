import ApiClient from "./api";

export const fetchTournamnents = async (page = 1) => {
    const response = await
        ApiClient.get(`/tournaments?page=${page}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
            return null;
        });
    return response.data;
}