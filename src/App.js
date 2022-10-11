import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Pages/Sheared/Navbar";
import Footer from "./Pages/Sheared/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/Aboutus/About";
import Home from "./Pages/Home/Home";
import Faq from "./Pages/FAQ/Faq";
import Services from "./Pages/Services/Services";
import Login from "./Pages/Login/Login";
import Processes from "./Pages/Process/Processes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/process" element={<Processes />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
