import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge={<span style={{ color: "yellow" }}>2023- Present</span>}
          title="Mobile Developper (internship)"
          subTitle="Direction Générale des Impots"
          des="Ouagadougou, Burkina Faso"
        />
        <ResumeCard
          badge="2023"
          title="Web Developer"
          subTitle="Oxygen Health"
          des="Accra, Ghana"
        />
        <ResumeCard
          badge="2022"
          title="Freelance Fullstack"
          subTitle="Projets clients — Web & mobile"
          des="Conception UI, API Laravel, apps Flutter, intégrations paiement et analytics."
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge={<span style={{ color: "yellow" }}>2023- Present</span>}
          title="Burkina Institute of Technology"
          subTitle="Koudougou"
          des="Computer science, Programming and entrepreneurship"
        />
        <ResumeCard
          badge="2018 - 2022"
          title="Our lady of hope secondary school"
          subTitle="Ouagadougou, Burkina Faso"
          des="Specialization: Mathematics and biology  "
        />
        <ResumeCard
          badge="Formations"
          title="Certifications & ateliers"
          subTitle="En ligne"
          des="Flutter avancé, Laravel API sécurisée, UI/UX design system, Git & CI/CD."
        />
        
      </div>
    </div>
  );
};

export default Education;
