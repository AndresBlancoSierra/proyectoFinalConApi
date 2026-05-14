import {Canvas} from "@react-three/fiber";
import StudioLights from "./three/StudioLights.jsx";
import {Suspense, useRef} from "react";
import {Html} from "@react-three/drei";
import CasaModel from "./models/casa/CasaModel.jsx";
import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';

const ModelScroll = () => {
    const groupRef = useRef(null);
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)'})

    useGSAP(() => {
        const modelTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#f-canvas',
                start: 'top top',
                end: 'bottom  top',
                scrub: 1,
                pin: true,
            }
        });

        if(groupRef.current) {
            modelTimeline.to(groupRef.current.rotation, { y: Math.PI * 2, ease: 'power1.inOut'})
        }
    }, []);

    return (
        <group ref={groupRef}>
            <Suspense fallback={<Html><h1 style={{ color: "#E8BAFF" }} className="text-3xl uppercase">Loading...</h1></Html>}>
                <CasaModel scale={isMobile ? 0.32 : 0.48} position={[0, -1, 0]} />
            </Suspense>
        </group>
    )
}

const Trabajos3D = () => {
    return (
        <section id="trabajos-3d">
            <Canvas 
                id="f-canvas" 
                camera={{ position: [0, 20, 40], fov: 50, near: 0.1, far: 400 }}
                shadows
            >
                <color attach="background" args={['#FFF5F7']} />
                <StudioLights />
                <ModelScroll />
            </Canvas>
        </section>
    )
}

export default Trabajos3D
