import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Phone, Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    const navLinks = [
        { to: '/', label: 'Beranda' },
        { to: '/katalog', label: 'Katalog' },
        { to: '/tentang', label: 'Tentang Kami' },
        { to: '/kontak', label: 'Kontak' },
    ];

    return (
        <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="container navbar__inner">
                <Link to="/" className="navbar__logo">
                    <div className="navbar__logo-icon">
                        <Car size={22} />
                    </div>
                    <span className="navbar__logo-text">
                        Auto<span className="gradient-text">Elite</span>
                    </span>
                </Link>

                <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`navbar__link ${location.pathname === link.to ? 'navbar__link--active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link to="/kontak" className="btn btn-primary navbar__cta-mobile">
                        <Phone size={16} />
                        Hubungi Kami
                    </Link>
                </nav>

                <div className="navbar__actions">
                    <Link to="/kontak" className="btn btn-primary navbar__cta">
                        <Phone size={16} />
                        Hubungi Kami
                    </Link>
                    <button
                        className="navbar__hamburger"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>
        </header>
    );
}
