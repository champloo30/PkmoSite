import Navbar from "./components/navbar/Navbar";
import Hero from "./components/about/About";
import Welcome from "./components/welcome section/Welcome";
import PeacePost from "./components/peace posts/PeacePost";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
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
