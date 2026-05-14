import { trabajos2D } from "../constants/index.js";
import InfiniteCarousel from "./InfiniteCarousel";

const Trabajos2D = () => {
    return (
        <section id="trabajos-2d">
            <InfiniteCarousel
                items={trabajos2D}
                renderItem={(item) => (
                    <div className="carousel-slide-wrapper">
                        {item.type === "video" ? (
                            <video
                                src={item.src}
                                className="carousel-media"
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                        ) : (
                            <img
                                src={item.src}
                                className="carousel-media"
                                alt={item.title}
                            />
                        )}
                    </div>
                )}
            />

            <div className="content-trabajos">
                <p>
                    Colección de proyectos de animación 2D que demuestran mi versatilidad técnica
                    y creativa en el campo del motion design. Cada trabajo representa{" "}
                    <span className="text-white">
                        un enfoque único en la narrativa visual y la expresividad del movimiento.
                    </span>{" "}
                    Desde animaciones frame-by-frame hasta motion graphics complejos, estos
                    proyectos muestran mi capacidad para adaptar diferentes estilos y técnicas
                    según los requerimientos de cada concepto, siempre buscando la máxima
                    calidad y coherencia visual en cada producción.
                </p>
            </div>
        </section>
    )
}

export default Trabajos2D
