import React from "react";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FiMail, FiSend } from "react-icons/fi";
import CV from "../../assets/Astrid'CV.pdf";
import { bannerImg } from "../../assets/index";

const Left = () => {
  const [text] = useTypewriter({
    words: ["Développeuse fullstack", "Spécialiste mobile Flutter", "UI/UX designer"],
    loop: true,
    typeSpeed: 28,
    deleteSpeed: 18,
    delaySpeed: 1500,
  });
  return (
    <div className="w-full lgl:w-5/12 h-full cardSurface z-10 flex flex-col overflow-hidden">
      <div className="w-full h-3/5 relative">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={bannerImg}
          loading="priority"
          alt="bannerImage"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bodyColor via-black/40 to-transparent rounded-2xl" />
      </div>
      <div className="w-full h-2/5 flex flex-col justify-between rounded-b-2xl px-6 py-6">
        <div className="flex flex-col gap-3">
          <h1 className="text-textColor text-3xl lgl:text-4xl font-semibold">
            Astrid GANSONRE
          </h1>
          <p className="text-base text-designColor tracking-wide flex items-center gap-1">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <p className="text-sm text-textColor/70 leading-6">
            Développeuse web & mobile, je conçois des expériences sobres et efficaces
            en Flutter, Laravel et React.
          </p>
          <div className="flex gap-3 mt-1">
            <a
              href="https://www.linkedin.com/in/timbsaganda-grace-astrid-gansonre-91ba97336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-designColor duration-300 cursor-pointer text-xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:astridgansonre@gmail.com"
              className="hover:text-designColor duration-300 cursor-pointer text-xl"
              aria-label="Envoyer un mail"
            >
              <FiMail />
            </a>
          </div>
        </div>
        <div className="flex gap-3">
          <a
            href={CV}
            target="_blank"
            className="flex-1"
            rel="noreferrer"
          >
            <button className="w-full h-12 rounded-xl bg-designColor text-slate-950 text-sm font-semibold uppercase tracking-wide flex justify-center items-center gap-2 hover:shadow-greenShadow transition">
              Télécharger le CV <BsCloudLightningFill />
            </button>
          </a>
          <Link to="/contact" className="flex-1">
            <button className="w-full h-12 rounded-xl border border-zinc-700 text-sm font-semibold uppercase tracking-wide flex justify-center items-center gap-2 hover:border-designColor hover:text-designColor transition">
              Contact <FiSend />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Left;
