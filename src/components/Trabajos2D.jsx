import { useState, useRef } from "react";
import { trabajos2D } from "../constants/index.js";

const videos = trabajos2D.filter((item) => item.type === "video");

const Trabajos2D = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selected, setSelected] = useState(null);
    const videoRef = useRef(null);

    const totalItems = videos.length;
    const visibleCount = 3;
    const maxStart = Math.max(0, totalItems - visibleCount);
    const startIndex = Math.min(currentIndex, maxStart);

    const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
    const next = () => setCurrentIndex((i) => Math.min(totalItems - 1, i + 1));

    const selectItem = (item) => {
        setSelected(item);
        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play();
            }
        }, 100);
    };

    const closeDetail = () => setSelected(null);

    return (
        <section id="trabajos-2d">
            <div className="carousel-2d">
                <button className="carousel-arrow left" onClick={prev} disabled={currentIndex === 0}>‹</button>

                <div className="carousel-2d-track">
                    {videos.slice(startIndex, startIndex + visibleCount).map((item) => (
                        <div
                            key={item.id}
                            className={`carousel-2d-item ${selected?.id === item.id ? "active" : ""}`}
                            onClick={() => selectItem(item)}
                        >
                            <video src={item.src} muted loop playsInline />
                        </div>
                    ))}
                </div>

                <button className="carousel-arrow right" onClick={next} disabled={currentIndex >= totalItems - 1}>›</button>
            </div>

            {selected && (
                <div className="detail-2d">
                    <button className="detail-close" onClick={closeDetail}>✕</button>

                    <div className="detail-media">
                        <video
                            ref={videoRef}
                            src={selected.src}
                            controls
                            autoPlay
                            muted
                            playsInline
                        />
                    </div>

                    <div className="detail-info">
                        <div className="detail-storyboard">
                            {selected.storyboard ? (
                                <>
                                    <h4>Storyboard</h4>
                                    <img
                                        src={selected.storyboard}
                                        alt={`Storyboard ${selected.title}`}
                                    />
                                </>
                            ) : (
                                <p className="sb-placeholder">Sin storyboard disponible</p>
                            )}
                        </div>
                    </div>
                </div>
            )}

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
