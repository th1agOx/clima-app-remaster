import { axiosInstance } from "./axiosConfig.js";
import type { WeatherApiResponse } from "../types/weather.ts"
import axios from 'axios';

export async function getWeatherByCity(city: string): Promise<WeatherApiResponse | undefined> {
    try {
        const response = await axiosInstance.get<WeatherApiResponse>('/weather', {
            params: { q: city }
        });
        console.log("dados climáticos:", response.data)
        return response.data;
    } catch( error: unknown ) {
        if (axios.isAxiosError(error)) {
            console.error('Erro ao buscar dados climaticos:', error.response?.data || error.message )
        } else {
            console.error('[UnknownError]', error );
        }    
    }
}
