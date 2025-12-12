import React from "react";

const ProjectsCard = ({ image, title, category }) => {
  return (
    <div className="w-full py-6 flex flex-col justify-center items-center border-b border-b-zinc-800/70">
      <div className="w-full h-52 md:h-60 xl:h-64 mb-4 overflow-hidden relative cursor-pointer group rounded-2xl bg-[#0c1018] border border-zinc-800/60">
        <img
          className="w-full h-full object-cover scale-100 group-hover:scale-105 duration-300 cursor-pointer rounded-2xl"
          src={image}
          alt="ImageOne"
        />
        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-black/25 to-black/10 group-hover:bg-designColor/15 transition"></div>
      </div>
      <h3 className="font-titleFont text-lg font-semibold text-textColor">
        {title}
      </h3>
      <p className="text-sm text-textColor/70 -mt-1">{category}</p>
    </div>
  );
};

export default ProjectsCard;
