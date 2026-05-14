import {useEffect, useRef} from "react";
import { gsap } from "gsap";

const pastelColors = [
    "#e34c57", "#d93a45", "#e8606a", "#ef7a83",
];

const Hero = () => {
    const titleRef = useRef();
    const letterRefs = useRef([]);

    useEffect(() => {
        const title = titleRef.current;
        if (title) {
            gsap.from(title, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out"
            });
        }
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
        <section id="hero">
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
                <h2 className="hero-subtitle">PORTFOLIO</h2>
            </div>
        </section>
    )
}
export default Hero
