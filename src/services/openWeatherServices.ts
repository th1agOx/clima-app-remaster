import { axiosInstance } from "./axiosConfig.js";
import type { WeatherApiResponse } from "../types/weather.ts"

export async function getWeatherByCity(city: string): Promise<WeatherApiResponse | undefined> {
    try {
        const response = await axiosInstance.get<WeatherApiResponse>('/weather', {
            params: { q: city}
        });
        console.log("dados climáticos:", response.data)
        return response.data;
    } catch( error ) {
        console.log('Erro ao buscar dados climaticos:', error)
        return undefined
    }
}

//elevar logs , desestruturar data