import {useEffect, useRef} from "react";
import { gsap } from "gsap";

const pastelColors = [
    "#FFB3BA", "#FFDFBA", "#FFFFBA", "#BAFFC9", "#BAE1FF",
    "#E8BAFF", "#FFB3E6", "#B3FFE6", "#FFD9B3", "#B3D9FF",
    "#FFB3CC", "#CCFFB3", "#B3FFF0", "#F0B3FF", "#FFCCB3",
];

const Hero = () => {
    const containerRef = useRef();
    const ballRef = useRef();
    const titleRef = useRef();
    const letterRefs = useRef([]);

    useEffect(() => {
        const ball = ballRef.current;
        if (ball) {
            gsap.to(ball, {
                y: -100,
                duration: 0.8,
                repeat: -1,
                yoyo: true,
                ease: "power2.inOut"
            });

            gsap.to(ball, {
                x: "+=200",
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            });
        }

        const title = titleRef.current;
        if (title) {
            gsap.from(title, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out"
            });
        }

        const container = containerRef.current;
        if (container) {
            for (let i = 0; i < 15; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                particle.style.width = `${Math.random() * 10 + 5}px`;
                particle.style.height = particle.style.width;
                particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
                container.appendChild(particle);

                gsap.to(particle, {
                    y: `+=${Math.random() * 100 - 50}`,
                    x: `+=${Math.random() * 100 - 50}`,
                    duration: Math.random() * 3 + 2,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            }
        }

        return () => {
            if (container) {
                container.innerHTML = '';
            }
        };
    }, []);

    useEffect(() => {
        const letters = letterRefs.current.filter(Boolean);
        if (!letters.length) return;

        letters.forEach((letter, i) => {
            const delay = i * 0.08;

            gsap.set(letter, { y: 0 });

            gsap.to(letter, {
                y: -15,
                duration: 0.3 + Math.random() * 0.2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay,
            });

            gsap.to(letter, {
                rotation: (Math.random() - 0.5) * 6,
                duration: 0.4 + Math.random() * 0.3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: delay + 0.1,
            });

            letter.addEventListener("mouseenter", () => {
                gsap.to(letter, {
                    y: -30,
                    scale: 1.3,
                    rotation: 0,
                    duration: 0.25,
                    ease: "back.out(2)",
                });
            });

            letter.addEventListener("mouseleave", () => {
                gsap.to(letter, {
                    y: -15,
                    scale: 1,
                    rotation: (Math.random() - 0.5) * 6,
                    duration: 0.3,
                    ease: "power2.out",
                });
            });

            letter.addEventListener("mousemove", (e) => {
                const rect = letter.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                gsap.to(letter, {
                    x: x * 15,
                    y: y * 15 - 15,
                    rotation: x * 8,
                    duration: 0.15,
                });
            });
        });

        return () => {
            letters.forEach((letter) => {
                gsap.killTweensOf(letter);
            });
        };
    }, []);

    const letters = "DANNA BLANCO".split("");

    return (
        <section id="hero" ref={containerRef}>
            <div className="hero-content">
                <h1 ref={titleRef} className="hero-title">
                    {letters.map((letter, i) => (
                        <span
                            key={i}
                            ref={(el) => (letterRefs.current[i] = el)}
                            className="hero-letter"
                            style={{ color: letter === " " ? "transparent" : pastelColors[i % pastelColors.length] }}
                        >
                            {letter === " " ? "\u00A0" : letter}
                        </span>
                    ))}
                </h1>
                <h2 className="hero-subtitle">PROFESIONAL DE ANIMACIÓN</h2>
            </div>

            <div className="animation-ball" ref={ballRef}></div>

            <div className="floating-shapes">
                <div className="shape triangle"></div>
                <div className="shape circle"></div>
                <div className="shape square"></div>
            </div>

        </section>
    )
}
export default Hero
