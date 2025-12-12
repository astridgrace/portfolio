import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold text-textColor mb-2">Hello! I'm GANSONRE Astrid</h2>
          <p className="text-base leading-6 text-textColor/80">
            Développeuse web et mobile, j’accompagne les équipes sur des produits sobres et
            performants en Flutter, Laravel et React, du prototype au déploiement. Je privilégie
            des interfaces claires, des parcours utilisateurs fluides et une architecture
            maintenable.
          </p>
          <p className="text-base leading-6 text-textColor/70 mt-3">
            J’interviens de la découverte des besoins jusqu’au suivi post-livraison : cadrage,
            design system léger, développement frontend/backend, intégration API, tests, mise en
            production et itérations rapides.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            20
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>
            Ouagadougou
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Freelance:</span>
            Available
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
