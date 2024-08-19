"use client";

import ExebitionWeather from "@/components/ExebitionWeather";
import Layout from "@/components/Layout";
import Skeleton from "@/components/Skeleton";
import useGetLocaleAPI from "@/services/useGetLocaleAPI";
import { personinfo } from "@/types/person";
import { useEffect, useState } from "react";

export default function Home() {
  const { data, error, fetchData, weather, SetCity, loading } =
    useGetLocaleAPI();

  const [person, SetPerson] = useState<personinfo>({name:'Daniel', city: 'caçapava', theme: 'coffee'});

  const handlePersonChange = (newPerson: personinfo) => {
    SetPerson(newPerson);
    fetchData();
    SetCity(newPerson.city);
    console.log(newPerson)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div data-theme={person.theme} className="transition-all delay-150">
      <Layout getInfo={(person) => handlePersonChange(person)}>
        {!loading ? <ExebitionWeather weather={weather} /> : <Skeleton />}d
      </Layout>
    </div>
  );
}
