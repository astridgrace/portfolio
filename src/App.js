import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importation de Router, Routes, et Route
import RoundOne from "./components/roundDesigns/RoundOne";
import RoundTwo from "./components/roundDesigns/RoundTwo";
import RoundThree from "./components/roundDesigns/RoundThree";
import RoundFour from "./components/roundDesigns/RoundFour";
import RoundFive from "./components/roundDesigns/RoundFive";
import Home from "./Home";
import Contact from "./components/contact/Contact";
 // Import de la page Contact

function App() {
  return (
    <Router> {/* Enveloppe ton app avec Router pour activer le routage */}
      <div className="w-full lgl:h-screen font-bodyfont overflow-hidden text-textColor bg-black relative">
        <div className="max-w-screen-2xl h-full mx-auto flex justify-center items-center">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Route pour la page d'accueil */}
            <Route path="/contact" element={<Contact />} /> {/* Route pour la page Contact */}
          </Routes>
        </div>
        <div className="w-full h-full absolute top-0 left-0 z-10">
          <RoundOne />
          <RoundTwo />
          <RoundThree />
          <RoundFour />
          <RoundFive />
        </div>
      </div>
    </Router>
  );
}

export default App;
