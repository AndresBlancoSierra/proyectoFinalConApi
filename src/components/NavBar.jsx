import {navLinks} from "../constants";

const NavBar = () => {
    const handleContactClick = () => {
        const phoneNumber = "+573232823205";
        const message = "Hola Danna, vi tu portafolio de animación y me gustaría contactarte.";
        const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <header>
            <nav>
                <div className="nav-left">
                    {/* Logo removido */}
                </div>

                <ul>
                    {navLinks.map(({ label }) => {
                        let href = "#";
                        switch(label) {
                            case "Inicio":
                                href = "#hero";
                                break;
                            case "Animaciones 2D":
                                href = "#intro-2d";
                                break;
                            case "Ilustración":
                                href = "#ilustracion";
                                break;
                            case "3D":
                                href = "#intro-3d";
                                break;
                            case "Contacto":
                                href = "#contacto";
                                break;
                            default:
                                href = `#${label.toLowerCase().replace(/\s+/g, '-')}`;
                        }
                        return (
                            <li key={label}>
                                <a href={href}>{label}</a>
                            </li>
                        );
                    })}
                </ul>

                <div className="flex-center gap-3">
                    <button 
                        className="contact-btn"
                        onClick={handleContactClick}
                    >
                        Contáctame
                    </button>
                </div>
            </nav>
        </header>
    )
}
export default NavBar
