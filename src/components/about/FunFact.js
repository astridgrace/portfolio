import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { FaUsers } from 'react-icons/fa';
import FunFactCard from "./FunFactCard";

const FunFact = () => {
  return (
    <div className="px-0 grid grid-cols-2 md:grid-cols-4 pb-10">
      <FunFactCard icon={<BsTrophyFill />} des="2 competitions Won" />
      <FunFactCard icon={<SiAntdesign />} des="+10 Projects" />
      <FunFactCard icon={<BiCodeAlt />} des="100 hours of coding" />
      <FunFactCard icon={<FaUsers />} des="4 team projects" />
    </div>
  );
};

export default FunFact;
