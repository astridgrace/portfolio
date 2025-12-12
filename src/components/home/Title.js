import React from "react";

const Title = ({ title, subTitle }) => {
  return (
    <h1 className="font-titleFont font-bold text-2xl capitalize text-textColor flex items-center gap-3 px-6 py-4 border-b border-b-zinc-800">
      <span className="w-1.5 h-8 rounded-full bg-designColor inline-block" />
      <span className="text-designColor">{title}</span>
      <span className="text-textColor/90">{subTitle}</span>
    </h1>
  );
};

export default Title;
