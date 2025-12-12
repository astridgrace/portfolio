import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { MdWork } from "react-icons/md";
import Left from "./components/home/Left";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

const Home = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = useMemo(
    () => [
      { key: "about", label: "About", icon: <FaUser /> },
      { key: "resume", label: "Resume", icon: <IoIosPaper /> },
      { key: "projects", label: "Projects", icon: <MdWork /> },
      { key: "contact", label: "Contact", icon: <FaEnvelope /> },
    ],
    []
  );

  return (
    <div className="w-full lgl:w-[92%] min-h-[85vh] bg-transparent text-white z-50 flex items-start justify-between py-8">
      {/* ================= Left Icons End here ======================== */}
      <div className="w-20 hidden lgl:flex flex-col gap-3">
        <div className="w-full cardSurface py-6 flex flex-col items-center gap-4">
          {tabs.map(({ key, label, icon }) => {
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-200 ${
                  isActive
                    ? "bg-designColor/15 text-designColor border border-designColor/40 shadow-greenShadow"
                    : "text-textColor hover:text-white hover:bg-white/5 border border-transparent"
                }`}
                aria-label={label}
                title={label}
              >
                {icon}
              </button>
            );
          })}
        </div>
      </div>

      <div className="w-full lgl:w-[94%] h-full flex flex-col gap-8 lgl:gap-0 lgl:flex-row items-start">
        {/* ======================== Home Left Start here ============================ */}
        <Left />
        {/* ======================== Home Left End here ============================== */}
        <div className="w-full lgl:w-8/12 min-h-[90vh] cardSurface p-6">
          <div className="w-full h-full lgl:hidden bg-transparent rounded-2xl flex flex-col gap-10">
            <About />
            <Resume />
            <Projects />
            <Contact />
          </div>
          <div className="w-full hidden lgl:flex justify-center py-4">
            {activeTab === "about" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <About />
              </motion.div>
            )}
            {activeTab === "resume" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Resume />
              </motion.div>
            )}
            {activeTab === "projects" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Projects />
              </motion.div>
            )}
            {activeTab === "contact" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Contact />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
