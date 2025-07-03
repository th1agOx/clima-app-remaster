export interface WeatherApiResponse {
    name: string
    main: {
        temp: number;
        temp_min: number;
        temp_max: number;
        humidity: number;
    }
    weather: {
        description: string;
        icon: string;
        main: string;
    }[]
    wind: {
        speed: number
    }
}