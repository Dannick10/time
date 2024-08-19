import Input from "../components/Input";
import React from "react";
import { Weather } from "@/types/Weather";
import Image from "next/image";
import Daniel from '../../public/us/jonata.jpg'
import Mycaela from '../../public/us/mavis.jpg'
import { personinfo } from "@/types/person";


type Props = {
  title?: string;
  weather?: any;
  children?: any;
  getInfo: (person: personinfo) => void
};

const Layout = (props: Props) => {


  return (
    <main className="p-2">
      <label className="swap swap-flip text-xl">
        <input type="checkbox" />
        <div className="swap-on flex items-center justify-center gap-1" onClick={() => props.getInfo({name: 'Mycaela', city: 'caçapava', theme: 'coffee' })}>
            <span className="avatar">
                <div className="rounded-full">
                <Image src={Mycaela} width={50} height={50} alt="Mycaela"/>
                </div>
                </span>
          <p  className="badge badge-primary badge-outline">Mycaela Natalli</p>
        </div>
        <div className="swap-off flex items-center justify-center gap-1"  onClick={() => props.getInfo({name: 'Daniel', city: 'aracaju', theme: 'synthwave' })}>
        <span className="avatar">
                <div className="rounded-full">
                <Image src={Daniel} width={50} height={50} alt="Mycaela"/>
                </div>
                </span>
         <p className="badge badge-primary badge-outline">Daniel Rocha</p> 
        </div>
      </label>

      <div>{props.children}</div>
    </main>
  );
};

export default Layout;
