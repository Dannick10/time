"use client";

import { useState } from "react";
import axios from "axios";

export default function useGetWeatherAPI() {
  const [data, SetData] = useState(null);
  const [erro, SetError] = useState(null);

  const fetchData = async (lat: string,lon: string) => {

    const api_key = process.env.NEXT_PUBLIC_KEY;
    const link = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${api_key}`;

    try {
      const response = await axios.get(link);
      SetData(response.data);
    } catch (error: any) {
      SetError(error);
    }
  };

  return {
    data,
    erro,
    fetchData,
  };
}
