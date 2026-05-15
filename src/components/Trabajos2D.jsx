import { useState, useRef } from "react";
import { trabajos2D } from "../constants/index.js";

const Trabajos2D = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selected, setSelected] = useState(null);
    const mediaRef = useRef(null);

    const totalItems = trabajos2D.length;
    const visibleCount = 3;
    const maxStart = Math.max(0, totalItems - visibleCount);
    const startIndex = Math.min(currentIndex, maxStart);

    const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
    const next = () => setCurrentIndex((i) => Math.min(totalItems - 1, i + 1));

    const selectItem = (item) => {
        setSelected(item);
        setTimeout(() => {
            if (mediaRef.current && item.type === "video") {
                mediaRef.current.currentTime = 0;
                mediaRef.current.play();
            }
        }, 100);
    };

    const closeDetail = () => setSelected(null);

    return (
        <section id="trabajos-2d">
            <div className="carousel-2d">
                <button className="carousel-arrow left" onClick={prev} disabled={currentIndex === 0}>‹</button>

                <div className="carousel-2d-track">
                    {trabajos2D.slice(startIndex, startIndex + visibleCount).map((item) => (
                        <div
                            key={item.id}
                            className={`carousel-2d-item ${selected?.id === item.id ? "active" : ""}`}
                            onClick={() => selectItem(item)}
                        >
                            {item.type === "video" ? (
                                <video src={item.src} muted loop playsInline />
                            ) : (
                                <img src={item.src} alt={item.title} />
                            )}
                        </div>
                    ))}
                </div>

                <button className="carousel-arrow right" onClick={next} disabled={currentIndex >= totalItems - 1}>›</button>
            </div>

            {selected && (
                <div className="detail-2d">
                    <button className="detail-close" onClick={closeDetail}>✕</button>

                    <div className="detail-media">
                        {selected.type === "video" ? (
                            <video
                                ref={mediaRef}
                                src={selected.src}
                                controls
                                autoPlay
                                muted
                                playsInline
                            />
                        ) : (
                            <img src={selected.src} alt={selected.title} />
                        )}
                    </div>

                    {selected.storyboard && (
                        <div className="detail-info">
                            <div className="detail-storyboard">
                                <h4>Storyboard</h4>
                                <img
                                    src={selected.storyboard}
                                    alt={`Storyboard ${selected.title}`}
                                />
                            </div>
                        </div>
                    )}
                </div>
            )}

            <div className="content-trabajos">
                <p>
                    Colección de proyectos de animación 2D que demuestran mi versatilidad técnica
                    y creativa en el campo del motion design. Cada trabajo representa{" "}
                    <span style={{ color: "#e34c57" }}>
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
