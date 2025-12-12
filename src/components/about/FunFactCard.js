import React from "react";

const FunFactCard = ({ icon, des }) => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col items-center gap-3 py-8 border-r border-r-zinc-800/60 border-b border-b-zinc-800/60">
        <span className="text-2xl text-designColor">{icon}</span>
        <p className="text-sm w-32 text-center text-textColor/80 hover:text-white duration-200 leading-5">
          {des}
        </p>
      </div>
    </div>
  );
};

export default FunFactCard;
