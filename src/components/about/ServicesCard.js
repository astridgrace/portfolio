import React from "react";

const ServicesCard = ({ icons, title, subTitle }) => {
  return (
    <div className="py-8 px-6 flex flex-col items-start gap-3 border-r border-b border-zinc-800/60">
      <span className="text-3xl text-designColor mb-1">{icons}</span>
      <h2 className="font-titleFont text-lg font-semibold text-textColor">{title}</h2>
      {subTitle && (
        <p className="text-sm leading-6 text-textColor/80">
          {subTitle}
        </p>
      )}
    </div>
  );
};

export default ServicesCard;
