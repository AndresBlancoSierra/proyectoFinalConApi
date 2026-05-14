import useMacbookStore from "../store";
import clsx from "clsx";
import {Canvas} from "@react-three/fiber";
import StudioLights from "./three/StudioLights.jsx";
import ModelSwitcher from './three/ModelSwitcher.jsx'
import {useMediaQuery} from "react-responsive";

const ProductViewer = () => {
    const { color, scale, setColor, setScale } = useMacbookStore();

    const isMobile = useMediaQuery({ query: '(max-width: 1024px)'});

    return (
        <section id="product-viewer">
            <h2>Portafolio de Animación - Danna Blanco</h2>

            <div className="controls">
                <p className="info">Proyectos 3D | Disponible en vista 14" & 16" con diferentes estilos visuales</p>

                <div className="flex-center gap-5 mt-5">
                    <div className="color-control">
                        <div
                            onClick={() => setColor('#adb5bd')}
                            className={clsx('bg-neutral-300', color === '#adb5bd' && 'active')}
                        />
                        <div
                            onClick={() => setColor('#2e2c2e')}
                            className={clsx('bg-neutral-900', color === '#2e2c2e' && 'active')}
                        />
                    </div>

                    <div className="size-control">
                        <div
                            onClick={() => setScale(0.36)}
                            className={clsx(scale === 0.36 ? 'bg-white' : '')}
                        >
                            <p>14"</p>
                        </div>
                        <div
                            onClick={() => setScale(0.48)}
                            className={clsx(scale === 0.48 ? 'bg-white' : '')}
                        >
                            <p>16"</p>
                        </div>
                    </div>
                </div>
            </div>

            <Canvas 
                id="canvas" 
                camera={{ position: [0, 20, 40], fov: 50, near: 0.1, far: 400}}
                shadows
            >
                <StudioLights />

                <ModelSwitcher scale={isMobile ? scale - 0.03 : scale} isMobile={isMobile} />
            </Canvas>
        </section>
    )
}
export default ProductViewer
