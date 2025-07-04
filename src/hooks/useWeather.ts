import useSWR from 'swr';
import { axiosInstance } from "../services/axiosConfig";
import type { WeatherApiResponse } from '../types/weather';
import type { AxiosError } from 'axios';

const fetcher = (url: string) => 
    axiosInstance.get<WeatherApiResponse>(url).then(response => response.data); 

export function useWeather( cityName:string ) {
    const { data, error, isLoading } = useSWR<WeatherApiResponse | AxiosError> (
        cityName ? `/weather?q=${cityName}&units=metric&lang=pt_br` : null, 
        fetcher
    )
    return {
        data,
        loading: isLoading,
        error: error?.response?.data?.message || null
    }
};