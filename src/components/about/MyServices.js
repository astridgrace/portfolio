import React from "react";
import { FaDatabase } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="Sites vitrines et dashboards performants en React et Tailwind."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Web and mobile Design"
        subTitle="UI/UX claires, design system léger, prototypage rapide."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Mobile Application"
        subTitle="Apps Flutter fiables, architecture propre et animations discrètes."
      />
      <ServicesCard
        icons={<FaDatabase />}
        title="Database management"
        subTitle="Modélisation, API Laravel sécurisée, performance et suivi."
      />
    </div>
  );
};

export default MyServices;
