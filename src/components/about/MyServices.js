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
        
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Web and mobile Design"
        
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Mobile Application"
        
      />
      <ServicesCard
        icons={<FaDatabase />}
        title="Database management"
        
      />
    </div>
  );
};

export default MyServices;
