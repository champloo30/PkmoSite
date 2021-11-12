import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Menu from "./components/menu/Menu"
import Welcome from "./components/welcome-section/Welcome";
import PeacePost from "./components/peace-posts/PeacePost";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import "./app.scss";
import { useState } from "react"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Hero />
        <Welcome />
        <About />
        <PeacePost />
        <Footer />
      </div>
    </div>
  );
}

export default App;
