import React from "react";
import Image from "next/image";
import { AirIcon, ArrowDownIcon, ArrowupIcon, DirectionIcon, PressureIcon, SpeedIcon, ThermometerIcon, WaveIcon } from "@/icons/Icons";
import { Weather } from "@/types/Weather";

import clearDay from "../../public/Weather/clear-day.svg";
import clearNight from "../../public/Weather/clear-night.svg";
import fewCloudsDay from "../../public/Weather/cloudy-1-day.svg";
import fewCloudsNight from "../../public/Weather/cloudy-1-night.svg";
import scatteredCloudsDay from "../../public/Weather/cloudy-2-day.svg";
import scatteredCloudsNight from "../../public/Weather/cloudy-2-night.svg";
import showerRainDay from "../../public/Weather/rainy-2-day.svg";
import showerRainNight from "../../public/Weather/rainy-2-night.svg";
import rainDay from "../../public/Weather/rainy-3-day.svg";
import rainNight from "../../public/Weather/rainy-3-night.svg";
import thunderstormDay from "../../public/Weather/scattered-thunderstorms-day.svg";
import thunderstormNight from "../../public/Weather/scattered-thunderstorms-night.svg";
import snowDay from "../../public/Weather/snowy-2-day.svg";
import snowNight from "../../public/Weather/snowy-2-night.svg";
import mistDay from "../../public/Weather/tropical-storm.svg";
import mistNight from "../../public/Weather/tropical-storm.svg";

type ExebitionWeatherProps = {
  weather: Weather | null;
};

const ExebitionWeather = ({ weather }: ExebitionWeatherProps) => {
  const getDescription = weather?.weather[0].description;

  const normalizeText = (text: string) => {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/\s+/g, '');
  };

  const getImage = () => {
    const isNight = weather?.weather[0].icon.endsWith("n");

    switch (normalizeText(getDescription || '')) {
      case "ceuclaro":
        return isNight ? clearNight : clearDay;
      case "poucasnuvens":
        return isNight ? fewCloudsNight : fewCloudsDay;
      case "nuvensdispersas":
        return isNight ? scatteredCloudsNight : scatteredCloudsDay;
      case "nuvensquebradas":
        return isNight ? showerRainNight : showerRainDay;
      case "chuva":
        return isNight ? rainNight : rainDay;
      case "tempestade":
        return isNight ? thunderstormNight : thunderstormDay;
      case "neve":
        return isNight ? snowNight : snowDay;
      case "nevoa":
        return mistDay;
      default:
        return  isNight ? clearNight : clearDay;
    }
  };

  const weatherImage = getImage();

  return (
    <div>
      <section className="hero">
        <div className="hero-content flex items-center justify-center">
          <span className="flex items-center justify-center relative">
            <Image
              src={weatherImage}
              width={150}
              height={150}
              alt="clima"
              className="translate-y-8"
            />
          </span>
          <h1 className="text-5xl font-bold">
            {Math.round(weather?.main.temp || 0)}º
          </h1>
        </div>
        <div className="hero-overlay p-2">
          <p>{weather?.name}</p>
        </div>
      </section>
      <section className="hero">
        <div className="hero-overlay justify-center flex">
          {weather?.weather[0]?.description.toUpperCase()}
        </div>
        <div className="hero-content pt-10">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex gap-2">
              <h1 className="text-2xl font-bold">MAX</h1>
              <span>
                <ArrowupIcon />
              </span>
            </div>
            {Math.round(weather?.main.temp_max || 0)}º
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex gap-2">
              <h1 className="text-2xl font-bold">MIN</h1>
              <span>
                <ArrowDownIcon />
              </span>
            </div>
            {Math.round(weather?.main.temp_min || 0)}º
          </div>
        </div>
      </section>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <tbody>
            <tr>
              <td className="flex gap-2">
                <span className="text-xl"><ThermometerIcon/></span>
                <p>Sensação térmica</p>
              </td>
              <td>{Math.round(weather?.main.feels_like || 0)}º</td>
            </tr>
            <tr>
              <td className="flex gap-2">
                <span className="text-xl"><PressureIcon/></span>
                <p>Pressão atmosférica</p>
              </td>
              <td>{weather?.main.pressure} hPa</td>
            </tr>
            <tr>
              <td className="flex gap-2">
                <span className="text-xl"><AirIcon/></span>
                <p>Umidade relativa do ar</p>
              </td>
              <td>{weather?.main.humidity}%</td>
            </tr>
            <tr>
              <td className="flex gap-2">
                <span className="text-xl"><WaveIcon /></span>
                <p>Pressão ao nível do mar</p>
              </td>
              <td>{weather?.main.sea_level || weather?.main.pressure} hPa</td>
            </tr>
            <tr>
              <td className="flex gap-2">
                <span className={`text-xl`} style={{rotate: `${weather?.wind.deg}deg`}}><DirectionIcon/></span>
                <p>Direção do vento</p>
              </td>
              <td>{weather?.wind.deg}º</td>
            </tr>
            <tr>
              <td className="flex gap-2">
                <span className="text-xl"><SpeedIcon/></span>
                <p>Velocidade do vento</p>
              </td>
              <td>{weather?.wind.speed} m/s</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExebitionWeather;
