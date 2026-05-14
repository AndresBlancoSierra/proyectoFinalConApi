import {Canvas} from "@react-three/fiber";
import StudioLights from "./three/StudioLights.jsx";
import {features, featureSequence} from "../constants/index.js";
import clsx from "clsx";
import {Suspense, useEffect, useRef} from "react";
import {Html} from "@react-three/drei";
import CasaModel from "./models/casa/CasaModel.jsx";
import {useMediaQuery} from "react-responsive";
import useMacbookStore from "../store/index.js";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';

const ModelScroll = () => {
    const groupRef = useRef(null);
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)'})
    const { setTexture } = useMacbookStore();



    useGSAP(() => {
        // 3D MODEL ROTATION ANIMATION
        const modelTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#f-canvas',
                start: 'top top',
                end: 'bottom  top',
                scrub: 1,
                pin: true,
            }
        });

        // SYNC THE FEATURE CONTENT
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#f-canvas',
                start: 'top center',
                end: 'bottom  top',
                scrub: 1,
            }
        })

        // 3D SPIN
        if(groupRef.current) {
            modelTimeline.to(groupRef.current.rotation, { y: Math.PI * 2, ease: 'power1.inOut'})
        }

        // Content Sync (solo animación de textos, sin cambiar texturas)
        timeline
            .to('.box1', { opacity: 1, y: 0, delay: 1 })
            .to('.box2', { opacity: 1, y: 0 })
            .to('.box3', { opacity: 1, y: 0 })
            .to('.box4', { opacity: 1, y: 0})
            .to('.box5', { opacity: 1, y: 0 })
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
             <h2>Trabajos 3D</h2>

            <Canvas 
                id="f-canvas" 
                camera={{ position: [0, 20, 40], fov: 50, near: 0.1, far: 400 }}
                shadows
            >
                <color attach="background" args={['#FFF5F7']} />
                <StudioLights />
                <ModelScroll />
            </Canvas>

            <div className="absolute inset-0">
                {features.map((feature, index) => (
                    <div key={feature.id} className={clsx('box', `box${index + 1}`, feature.styles)}>
                        <img src={feature.icon} alt={feature.highlight} />
                        <p>
                            <span className="font-bold">{feature.highlight}</span>
                            {" "}{feature.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Trabajos3D
