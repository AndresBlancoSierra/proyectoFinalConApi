import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Highlights = () => {
  const [video, setVideo] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch("https://api.vimeo.com/videos/1180884774", {
          headers: {
            Authorization: `Bearer f0d5878ecd2a2a4dde6540deca92ce86`,
            Accept: "application/vnd.vimeo.*+json;version=3.4",
          },
        });

        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Vimeo respondió ${res.status}: ${text}`);
        }

        const data = await res.json();
        setVideo(data);
      } catch (err) {
        console.error(err);
        setError("No se pudo cargar el video desde Vimeo.");
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".thanks-text",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#highlights",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".vimeo-video",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#highlights",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  });

  return (
    <section id="highlights" className="py-20 lg:py-32">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center mb-16 lg:mb-24">
          <h2 className="thanks-text text-5xl lg:text-7xl font-medium">
            gracias
          </h2>
        </div>

        <div className="vimeo-video max-w-4xl mx-auto">
          {loading && <p>Cargando video...</p>}

          {error && <p style={{ color: "#FFB3BA" }}>{error}</p>}

          {!loading && !error && video && (
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={`https://player.vimeo.com/video/${video.uri.split("/").pop()}?title=0&byline=0&portrait=0`}
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={video.name}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Highlights;