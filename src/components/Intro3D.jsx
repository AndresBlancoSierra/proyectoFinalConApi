import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';

const Intro3D = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)'});

    useGSAP(() => {
        if(!isTablet) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#intro-3d',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true,
                }
            });

            timeline
                .fromTo('.mask img', 
                    { transform: 'matrix(80, 0, 0, 80, 0, 0)' },
                    { transform: 'matrix(1.1, 0, 0, 1.1, 0, 0)' }
                )
                .to('.content', { opacity: 1, y: 0, ease: 'power1.in' });
        }
    }, [isTablet])

    return (
        <section id="intro-3d">
            <div className="media">
                <video src="/videos/feature-1.mp4" loop muted autoPlay playsInline />
                <div className="mask">
                    <img src="/mask-logo3D.svg" />
                </div>
            </div>

            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-w-md">
                         <h2>Animación 3D</h2>

                        <div className="space-y-5 mt-7 pe-10">
                            <p>
                                 Presentando {" "}
                                <span className="text-gray-900 font-bold">
                                    modelado 3D, texturizado y animación avanzada
                                </span>
                                . Creación de
                            </p>
                            <p>
                                 Desarrollamos modelos 3D detallados y animaciones realistas que capturan la esencia del espacio tridimensional, permitiendo crear mundos virtuales y personajes con profundidad y realismo en cada proyecto.
                            </p>
                            <p>
                                 Utilizamos software de vanguardia para modelado, texturizado, rigging y animación 3D, ofreciendo precisión en cada polígono y fluidez en cada movimiento para resultados visualmente impactantes.
                            </p>
                        </div>
                    </div>

                     <div className="max-w-3xs space-y-14">
                        <div className="space-y-2">
                            <p>Hasta</p>
                            <h3>24 fps</h3>
                             <p>animación fluida en tiempo real</p>
                        </div>
                        <div className="space-y-2">
                            <p>Más de</p>
                            <h3>100+</h3>
                             <p>modelos 3D creados</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Intro3D
