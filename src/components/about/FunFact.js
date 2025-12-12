import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { FaUsers } from 'react-icons/fa';
import FunFactCard from "./FunFactCard";

const FunFact = () => {
  return (
    <div className="px-0 grid grid-cols-2 md:grid-cols-3 pb-10">
      <FunFactCard icon={<BsTrophyFill />} des="2 compétitions remportées" />
      <FunFactCard icon={<SiAntdesign />} des="10+ projets livrés" />
      <FunFactCard icon={<FaUsers />} des="4 projets en équipe" />
    </div>
  );
};

export default FunFact;
