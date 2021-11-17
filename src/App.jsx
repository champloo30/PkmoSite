import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Message from "./components/message/Message"
import Footer from "./components/footer/Footer";
import PeacePost from "./components/peacepost/PeacePost";
import Connect from "./components/connect/Connect";
import "./app.scss";
import { useState } from "react"
import { Route, Routes } from "react-router-dom";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/about" element={<About />} />
        <Route path="/message" element={<Message />} />
        <Route path="/peacepost" element={<PeacePost />} />
        <Route path="/connect" element={<Connect />} /> 
      </Routes>
      <Footer />
    </div>
  );
}


