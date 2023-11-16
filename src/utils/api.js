import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY1,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
        'X-Content-Type-Options': 'nosniff'
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
}



