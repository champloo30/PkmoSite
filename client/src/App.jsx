import { useState } from "react"
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Leadership from "./pages/leadership/Leadership";
import Location from "./pages/location/Location";
import Menu from "./components/menu/Menu";
import Messages from "./pages/messages/Messages"
import Footer from "./components/footer/Footer";
import PeacePost from "./pages/peacepost/PeacePost";
import Connect from "./pages/connect/Connect";
import { Route, Routes } from "react-router-dom";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <a href="#home" className="skip-to-content-link">Skip To Content</a>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/about" element={<About />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/location" element={<Location />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/peacepost" element={<PeacePost />} />
        <Route path="/connect" element={<Connect />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
