import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importation de Router, Routes, et Route
import Home from "./Home";
import Contact from "./components/contact/Contact";
 // Import de la page Contact

function App() {
  return (
    <Router> {/* Enveloppe ton app avec Router pour activer le routage */}
      <div className="w-full min-h-screen font-bodyfont overflow-hidden text-textColor bg-bodyColor">
        <div className="max-w-screen-2xl min-h-screen mx-auto flex justify-center items-center px-4">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Route pour la page d'accueil */}
            <Route path="/contact" element={<Contact />} /> {/* Route pour la page Contact */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
