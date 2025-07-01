import { axios } from "axios";

export const API_KEY = '6b1cc5572fb6573143caa44d1503dc1f';

export const axiosInstance = axios.create({
    baseUrl: `https://openweathermap.org/data/2.5/weather`,
    timeout: 5000,
    Headers: {
         "Content-Type" : "application/json",
         "Accept" : "application/json",
        },
    params: {
        appid: API_KEY,
    }
});

axiosInstance.interceptors.request.use( 
    (request) => {
        console.log(`[Axios][request] URL: ${request.url} | Método: ${request.method}`);
        return config;
    }, 
    (errors) => {
        console.error('[Axios][Request Error]', errors);
        return Promise.reject(errors);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        console.log(`[Axios][response] Sucesso:`, response.status);
        return response;
    },
    (errors) => {
        console.error();
        return Promise.reject(errors);
    }
)

//adicionar token JWT automático para autenticações futuras, Retry automático em falhas de rede, refresh token automático 