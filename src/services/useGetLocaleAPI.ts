"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Weather } from "@/types/Weather";

export default function useGetLocaleAPI() {

  const [data, setData] = useState(null);
  const [city, setCity] = useState<string>("aracaju");
  const [loading, setLoading] = useState<boolean>(false);
  const [weather, setWeather] = useState<Weather | null>(null);
  const [error, setError] = useState<string | null>(null);
  const api_key = process.env.NEXT_PUBLIC_KEY;

  const fetchData = async () => {
    const countryCode = "BR";
    const language = "pt";
    const limit = 1;
    const link = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${countryCode}&limit=${limit}&appid=${api_key}&lang=${language}`;
    setLoading(true);
    try {
      const response = await axios.get(link);
      const locationData = response.data[0];
      setData(locationData);
      
      fetchDataWeather(locationData.lat, locationData.lon);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const fetchDataWeather = async (lat: string, lon: string) => {
    const link = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&lang=pt&units=metric`;

    try {
      const response = await axios.get(link);
      setWeather(response.data);
      console.log(response.data);
    } catch (error: any) {
      setError(error.message);
    }
    setLoading(false);
  };

  return {
    data,
    error,
    fetchData,
    weather,
    setCity,
    loading
  };
}
