import { useState } from "react";
import { trabajos3D2 } from "../constants/index.js";
import AnimatedTitle from "./AnimatedTitle";

const COLS = 5;
const rows = [];
for (let i = 0; i < trabajos3D2.length; i += COLS) {
    rows.push(trabajos3D2.slice(i, i + COLS));
}

const Trabajos3D3 = () => {
    const [selected, setSelected] = useState(null);

    return (
        <section id="trabajos-3d3">
            <AnimatedTitle text="TRABAJOS 3D" />
            <div className={`mural-grid${selected ? " blurred" : ""}`}>
                {rows.map((rowItems, r) => (
                    <div className="mural-row" key={r}>
                        {rowItems.map((item) => (
                            <div key={item.id} className="mural-card" onClick={() => setSelected(item)}>
                                <img src={item.src} alt={item.alt} />
                            </div>
                        ))}
                        {Array.from({ length: COLS - rowItems.length }).map((_, i) => (
                            <div key={`empty-${i}`} className="mural-card empty" />
                        ))}
                    </div>
                ))}
            </div>

            {selected && (
                <div className="mural-overlay" onClick={() => setSelected(null)}>
                    <button className="mural-overlay-close" onClick={() => setSelected(null)}>✕</button>
                    <img src={selected.src} alt={selected.alt} onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </section>
    );
};

export default Trabajos3D3;
