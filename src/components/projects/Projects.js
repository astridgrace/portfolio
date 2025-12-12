import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgSix,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="Snitch Up"
            category="Mobile App(team)"
            image={workImgThree}
          />
          <ProjectsCard
            title="BTP"
            category="Logo"
            image={workImgOne}
          />
          <ProjectsCard
            title="BIT APP"
            category="Mobile app"
            image={workImgTwo}
          />
          <ProjectsCard
            title="Analytics Dashboard"
            category="Web app"
            image={workImgThree}
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="E-clean"
            category="Mobile App"
            image={workImgFour}
          />
          <ProjectsCard
            title="Fast Drop"
            category="Mobile App(team)"
            image={workImgSix}
          />
          <ProjectsCard
            title="Portfolio V2"
            category="UI/UX + Frontend"
            image={workImgFour}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
