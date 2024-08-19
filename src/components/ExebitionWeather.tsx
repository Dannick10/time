import React from "react";
import Image from "next/image";
import clear from "../../public/Weather/clear-day.svg";
import { ArrowDownIcon, ArrowupIcon } from "@/icons/Icons";
import { Weather } from "@/types/Weather";


type ExebitionWeatherProps = {
  weather: Weather | null;
};

const ExebitionWeather = ({ weather }: ExebitionWeatherProps) => {
  return (
    <div>
      <section className="hero">
        <div className="hero-content flex items-center justify-center">
          <span className="flex items-center justify-center relative">
            <Image
              src={clear}
              width={150}
              height={150}
              alt="clima"
              className="min-w-full translate-x-10 translate-y-5"
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
                <span>SVG</span>
                <p>Sensação térmica</p>
              </td>
              <td>{Math.round(weather?.main.feels_like || 0)}º</td>
            </tr>
            <tr>
              <td className="flex gap-2">
                <span>svg</span>
                <p>Pressão atmosférica</p>
              </td>
              <td>{weather?.main.pressure} hPa</td>
            </tr>
            <tr>
              <td className="flex gap-2">
                <span>SVG</span>
                <p>Umidade relativa do ar</p>
              </td>
              <td>{weather?.main.humidity}%</td>
            </tr>
            <tr>
              <td className="flex gap-2">
                <span>SVG</span>
                <p>Pressão ao nível do mar</p>
              </td>
              <td>{weather?.main.sea_level || weather?.main.pressure} hPa</td>
            </tr>
            <tr>
              <td className="flex gap-2">
                <span>SVG</span>
                <p>Direção do vento</p>
              </td>
              <td>{weather?.wind.deg}º</td>
            </tr>
            <tr>
              <td className="flex gap-2">
                <span>SVG</span>
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
