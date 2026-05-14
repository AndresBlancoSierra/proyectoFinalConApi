import {PresentationControls} from "@react-three/drei";
import CasaModel16 from "../models/casa/CasaModel16.jsx";
import CasaModel14 from "../models/casa/CasaModel14.jsx";

const ModelSwitcher = ({ scale, isMobile }) => {
    const SCALE_LARGE_DESKTOP = 0.48;
    const SCALE_LARGE_MOBILE = 0.32;

    const showLargeCasa = scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;

    const controlsConfig = {
        snap: true,
        speed: 1,
        zoom: 1,
        azimuth: [-Infinity, Infinity],
        config: {mass:1, tension: 0, friction: 26}
    }

    return (
        <PresentationControls {...controlsConfig}>
            {showLargeCasa ? (
                <CasaModel16 scale={isMobile ? 0.32 : 0.48} />
            ) : (
                <CasaModel14 scale={isMobile ? 0.2 : 0.36} />
            )}
        </PresentationControls>
    )
}
export default ModelSwitcher
