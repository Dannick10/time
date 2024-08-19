"use client";

import { useState } from "react";
import axios from "axios";

export default function useGetWeatherAPI() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (lat: string, lon: string) => {
    const api_key = process.env.NEXT_PUBLIC_KEY;
    const link = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;

    try {
      const response = await axios.get(link);
      setData(response.data);
      setError(null);
    } catch (error: any) {
      setError(error.message || "Erro ao buscar dados");
    }
  };

  return {
    data,
    error,
    fetchData,
  };
}
