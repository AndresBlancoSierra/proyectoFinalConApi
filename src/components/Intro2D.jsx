import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';

const Intro2D = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)'});

    useGSAP(() => {
        if(!isTablet) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#intro-2d',
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
        <section id="intro-2d">
            <div className="media">
                <video src="/videos/game.mp4" loop muted autoPlay playsInline />
                <div className="mask">
                    <img src="/mask-logo.svg" />
                </div>
            </div>

            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-w-md">
                         <h2>Animación 2D</h2>

                        <div className="space-y-5 mt-7 pe-10">
                            <p>
                                Presentando {" "}
                                <span className="text-gray-900 font-bold">
                                    técnicas tradicionales y digitales combinadas
                                </span>
                                . Creación de
                            </p>
                            <p>
                                Desarrollamos animaciones frame-by-frame que capturan la esencia del movimiento clásico, permitiendo expresar emociones y narrativas con autenticidad y estilo único en cada proyecto.
                            </p>
                            <p>
                                Utilizamos herramientas digitales de vanguardia que mantienen la calidez del arte tradicional, ofreciendo precisión en cada trazo y fluidez en cada secuencia animada para resultados visualmente impactantes.
                            </p>
                        </div>
                    </div>

                     <div className="max-w-3xs space-y-14">
                        <div className="space-y-2">
                            <p>Hasta</p>
                            <h3>24 fps</h3>
                            <p>animación fluida frame-by-frame</p>
                        </div>
                        <div className="space-y-2">
                            <p>Más de</p>
                            <h3>100+</h3>
                            <p>proyectos de animación completados</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Intro2D
