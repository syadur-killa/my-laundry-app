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
import Pricing from "./Pages/Pricing/Pricing";
import Wash from "./Pages/Services/Wash";
import WashandIron from "./Pages/Services/WashandIron";
import Deals from "./Pages/Services/Deals";
import BulkItems from "./Pages/Services/BulkItems";
import Ironing from "./Pages/Services/Ironing";
import DryCleaning from "./Pages/Services/DryCleaning";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/price" element={<Pricing></Pricing>}>
          <Route path="wash" element={<Wash />} />
          <Route path="washandiron" element={<WashandIron />} />
          <Route path="dryclean" element={<DryCleaning />} />
          <Route path="ironing" element={<Ironing />} />
          <Route path="bulkitems" element={<BulkItems />} />
          <Route path="deals" element={<Deals />} />
        </Route>
        <Route path="/process" element={<Processes />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
