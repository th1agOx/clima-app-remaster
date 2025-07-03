import { API_KEY, BaseUrl } from "../config/env";
import axios, { 
    AxiosError,
    AxiosInstance, 
    AxiosResponse,
    InternalAxiosRequestConfig
} from "axios";

export const axiosInstance : AxiosInstance = axios.create({
    baseURL: BaseUrl,
    timeout: 5000,
    headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
    },
    params: {
        appid: API_KEY,
        units: 'metric',
        lang: 'pt-br'
    }
});

axiosInstance.interceptors.request.use( 
    (config : InternalAxiosRequestConfig ) => {
        console.log(`[Axios][request] URL: ${config.url} | Método: ${config.method}`);
        return config;
    }, 
    (error: AxiosError ) => {
        console.error('[Axios][Request Error]', error.message);
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response : AxiosResponse ) => {
        console.log(`[Axios][response] Sucesso:`, response.status);
        return response;
    },
    (error: AxiosError ) => {
        console.error(`[Axios][response] Erro:`, error.message);
        return Promise.reject(error);
    }
)

//adicionar token JWT automático para autenticações futuras, Retry automático em falhas de rede, refresh token automático 