import { useState, useEffect } from "react";
import { axiosInstance } from "../services/axiosConfig";

export function useWeather(cityName) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!cityName) return

        setLoading(true)
        setError(null)

        axiosInstance.get(`/weather`, {
            params: {
                q: cityName,
                appid: false,
                units: 'metric',
                lang: 'pt-br'
            },
        })
        .then((response) => {
            setData(response.data)
        })
        .catch((err) => {
            setError(err.response?.data?.message || 'Erro desconhecido ')
        })
        .finally( () => {
            setLoading(false)
        })
    },[cityName] )
    return { data, loading, error }
}

