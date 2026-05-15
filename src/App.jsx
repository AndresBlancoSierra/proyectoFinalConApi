import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import Intro2D from "./components/Intro2D.jsx";
import Trabajos2D from "./components/Trabajos2D.jsx";
import Ilustracion from "./components/Ilustracion.jsx";
import Intro3D from "./components/Intro3D.jsx";
import Trabajos3D3 from "./components/Trabajos3D3.jsx";
import Footer from "./components/Footer.jsx";

gsap.registerPlugin(ScrollTrigger)

const App = () => {
    return (
        <main>
            <NavBar />
            <Hero />
            <Intro2D />
            <Trabajos2D />
            <Ilustracion />
            <Trabajos3D3 />
            <Footer />
            
        </main>
    )
}

export default App
