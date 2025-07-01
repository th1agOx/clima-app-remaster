import { axiosInstance, API_KEY} from "./axiosConfig";

export async function getWeatherByCity(city) {
    try {
        const response = await axiosInstance.get('/weather', {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric',
                lang: 'pt-br',
            },
        });
        console.log("dados climáticos:", response.data)
        return response.data;
    } catch(error) {
        console.log('error:',error)
    }
}