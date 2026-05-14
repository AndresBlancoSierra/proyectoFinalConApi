const navLinks = [
    { label: "Inicio" },
    { label: "Animaciones 2D" },
    { label: "Ilustración" },
    { label: "Animaciones 3D" },
    { label: "Contacto" },
];

const noChangeParts = [
    // Para la casa, dejamos vacío para que todo cambie de color
    // O podemos especificar partes específicas que no deben cambiar
];

const performanceImages = [
    { id: "p1", src: "/performance1.png" },
    { id: "p2", src: "/performance2.png" },
    { id: "p3", src: "/performance3.png" },
    { id: "p4", src: "/performance4.png" },
    { id: "p5", src: "/performance5.jpg" },
    { id: "p6", src: "/performance6.png" },
    { id: "p7", src: "/performance7.png" },
];

const performanceImgPositions = [
    {
        id: "p1",
        left: 5,
        bottom: 65,
    },
    {
        id: "p2",
        right: 10,
        bottom: 60,
    },
    {
        id: "p3",
        right: -5,
        bottom: 45,
    },
    {
        id: "p4",
        right: -10,
        bottom: 0,
    },
    {
        id: "p5",
        left: 20,
        bottom: 50,
    },
    {
        id: "p6",
        left: 2,
        bottom: 30,
    },
    {
        id: "p7",
        left: -5,
        bottom: 0,
    },
];

const features = [
    {
        id: 1,
        icon: "/feature-icon1.svg",
        highlight: "Animación 3D.",
        text: "Creación de modelos y animaciones tridimensionales para proyectos visuales impactantes.",
        styles: "left-5 md:left-20 top-[20%] opacity-0 translate-y-5",
    },
    {
        id: 2,
        icon: "/feature-icon2.svg",
        highlight: "Motion Graphics.",
        text: "Diseño y animación de gráficos en movimiento para videos y presentaciones dinámicas.",
        styles: "right-5 md:right-20 top-[30%] opacity-0 translate-y-5",
    },
    {
        id: 3,
        icon: "/feature-icon3.svg",
        highlight: "Character Design.",
        text: "Desarrollo de personajes únicos con personalidad y expresividad para narrativas visuales.",
        styles: "left-5 md:left-20 top-[50%] opacity-0 translate-y-5",
    },
    {
        id: 4,
        icon: "/feature-icon4.svg",
        highlight: "Visual Effects.",
        text: "Implementación de efectos visuales que elevan la calidad y realismo de las producciones.",
        styles: "right-5 md:right-20 top-[70%] opacity-0 translate-y-5",
    },
    {
        id: 5,
        icon: "/feature-icon5.svg",
        highlight: "Storyboarding.",
        text: "Planificación visual de secuencias animadas para narrativas coherentes y efectivas.",
        styles: "left-5 md:left-20 top-[90%] opacity-0 translate-y-5",
    },
];

const featureSequence = [
    { videoPath: "/videos/feature-1.mp4", boxClass: ".box1", delay: 1 },
    { videoPath: "/videos/feature-2.mp4", boxClass: ".box2", delay: 0 },
    { videoPath: "/videos/feature-3.mp4", boxClass: ".box3", delay: 0 },
    { videoPath: "/videos/feature-4.mp4", boxClass: ".box4", delay: 0 },
    { videoPath: "/videos/feature-5.mp4", boxClass: ".box5", delay: 0 },
];

const footerLinks = [];

const trabajos2D = [
    { 
        id: "t1", 
        src: "/trabajos2d/almohada.mp4", 
        type: "video",
        title: "Almohada Animada",
        description: "Animación suave de objeto con física realista",
        storyboard: "/trabajos2d/Sin título-l.png"
    },
    { 
        id: "t2", 
        src: "/trabajos2d/araña.mp4", 
        type: "video",
        title: "Araña Mecánica",
        description: "Animación de personaje mecánico con movimiento articulado",
        storyboard: "/trabajos2d/story ara.png"
    },
    { 
        id: "t3", 
        src: "/trabajos2d/pendulos siire.mp4", 
        type: "video",
        title: "Péndulos Sincronizados",
        description: "Estudio de movimiento y física de péndulos"
    },
];

const trabajos2DPositions = [
    {
        id: "t1",
        left: 5,
        bottom: 65,
        transform: "scale(0.5)",
    },
    {
        id: "t2",
        right: 10,
        bottom: 60,
        transform: "scale(0.5)",
        zIndex: 0,
    },
    {
        id: "t3",
        right: -5,
        bottom: 45,
        transform: "scale(0.5)",
    },
    {
        id: "t4",
        right: -10,
        bottom: 0,
        transform: "scale(0.5)",
    },
    {
        id: "t5",
        left: 20,
        bottom: 50,
        transform: "scale(0.5)",
    },
    {
        id: "t6",
        left: 2,
        bottom: 30,
        transform: "scale(0.5)",
    },
];

export {
    features,
    featureSequence,
    footerLinks,
    navLinks,
    noChangeParts,
    performanceImages,
    performanceImgPositions,
    trabajos2D,
    trabajos2DPositions,
};
