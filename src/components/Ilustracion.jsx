import { performanceImages } from "../constants/index.js";
import InfiniteCarousel from "./InfiniteCarousel";
import AnimatedTitle from "./AnimatedTitle";

const Ilustracion = () => {
    return (
        <section id="ilustracion">
            <AnimatedTitle text="Ilustración" />

            <InfiniteCarousel items={performanceImages} />

            <div className="content">
                <p>
                    Desarrollo de ilustraciones digitales con técnicas avanzadas que capturan
                    la esencia de cada concepto. Utilizo herramientas profesionales para crear
                    obras que{" "}
                    <span style={{ color: "#e34c57" }}>
            combinan arte tradicional con tecnología digital de vanguardia.
          </span>{" "}
                    Cada proyecto es una oportunidad para explorar nuevos estilos y técnicas, siempre buscando
                    la máxima expresividad y calidad visual en cada creación.
                </p>
            </div>
        </section>
    )
}
export default Ilustracion
