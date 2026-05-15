const navLinks = [
    { label: "Inicio" },
    { label: "Animaciones 2D" },
    { label: "Ilustración" },
    { label: "3D" },
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
        src: "/trabajos2d/camina frojo.gif", 
        type: "gif",
        title: "Camina Frojo",
        description: "Animación de caminata con estilo frojo",
    },
    { 
        id: "t4", 
        src: "/trabajos2d/camina.mp4", 
        type: "video",
        title: "Camina",
        description: "Animación de caminata",
    },
    { 
        id: "t5", 
        src: "/trabajos2d/correrr.gif", 
        type: "gif",
        title: "Correr",
        description: "Animación de carrera",
    },
    { 
        id: "t6", 
        src: "/trabajos2d/durmiendo.gif", 
        type: "gif",
        title: "Durmiendo",
        description: "Animación de descanso",
    },
    { 
        id: "t7", 
        src: "/trabajos2d/gifcaminar.gif", 
        type: "gif",
        title: "Caminar",
        description: "Animación de caminata cíclica",
    },
    { 
        id: "t8", 
        src: "/trabajos2d/hongo.mp4", 
        type: "video",
        title: "Hongo",
        description: "Animación de hongo animado",
        storyboard: "/trabajos2d/Sin título-l.png"
    },
    { 
        id: "t9", 
        src: "/trabajos2d/pendulos siire.mp4", 
        type: "video",
        title: "Péndulos Sincronizados",
        description: "Estudio de movimiento y física de péndulos",
    },
    { 
        id: "t10", 
        src: "/trabajos2d/saltar.gif", 
        type: "gif",
        title: "Saltar",
        description: "Animación de salto",
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

const collageSizes = [
    { w: 240, h: 180 }, { w: 180, h: 240 }, { w: 280, h: 200 },
    { w: 200, h: 280 }, { w: 220, h: 220 }, { w: 300, h: 200 },
    { w: 180, h: 180 }, { w: 260, h: 300 },
];

const imageFiles3D = [
    "1 (1).png", "3.png", "4 (1).png", "5.png", "6.png",
    "10.png", "11.png", "12png.png", "casa1.png",
    "1.png", "4.png", "8.png",
    "452.png", "WhatsApp Image 2026-02-25 at 7.35.06 AM.jpeg",
    "3e5rtgv.png", "bcfgbfb.png", "cielo.png", "huesos .png", "perfilllllllll.png",
    "render1.png", "render2.png", "render3.png", "render5.png",
    "sjjnansdvnk.png", "Untitled.png", "vdsfdf.png",
];

const trabajos3D2 = imageFiles3D.map((file, i) => ({
    id: `r${i + 1}`,
    src: `/trabajos3d2/${file}`,
    size: collageSizes[i % collageSizes.length],
    alt: file.replace(/\.[^.]+$/, ""),
}));

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
    trabajos3D2,
};
