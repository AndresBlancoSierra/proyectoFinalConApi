import {footerLinks} from "../constants/index.js";

const Footer = () => {
    const handleWhatsAppClick = () => {
        const phoneNumber = "+573232823205";
        const message = "Hola Danna, vi tu portafolio de animación y me gustaría contactarte.";
        const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <footer id="contacto">
            <div className="container">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                    {/* Información de contacto */}
                    <div className="text-center lg:text-left">
                        <h3 className="text-3xl lg:text-4xl font-bold mb-6">Contáctame</h3>
                        <p className="text-gray-300 text-lg mb-4">
                            Portafolio de Animación - Danna Blanco
                        </p>
                        <p className="text-gray-300 text-lg mb-2">
                            Contacto: danna.blanco@taller5.edu.co
                        </p>
                        <p className="text-gray-300 text-lg">
                            Tel: +57 323 2823205
                        </p>
                    </div>

                    {/* Botón de WhatsApp */}
                    <div>
                        <button
                            onClick={handleWhatsAppClick}
                        >
                            Enviar mensaje por WhatsApp
                        </button>
                    </div>
                </div>

                <hr className="my-12 border-gray-700" />

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-gray-400 text-sm">
                        Copyright © 2024 Danna Blanco - Portafolio de Animación. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer
