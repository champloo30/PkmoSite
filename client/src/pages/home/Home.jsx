import './home.scss'
import Hero from "../../components/home/hero/Hero"
import Welcome from "../../components/home/welcome/Welcome"
import About from "../../components/home/about/About"
import Bottom from "../../components/home/bottom/Bottom"
import Info from "../../components/home/info/Info"

export default function Home() {
    return (
        <div className="home" id="home">
            <Hero />
            <Welcome />
            <About />
            <Bottom />
            <Info />
        </div>
    )
}
