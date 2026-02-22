import { Link } from 'react-router-dom';
import { Car, Phone, Mail, MapPin, Instagram, Youtube, Twitter, Facebook, ArrowRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__glow" />
            <div className="container">
                <div className="footer__grid">
                    {/* Brand */}
                    <div className="footer__brand">
                        <Link to="/" className="footer__logo">
                            <div className="footer__logo-icon"><Car size={20} /></div>
                            <span>Auto<span className="gradient-text">Elite</span></span>
                        </Link>
                        <p className="footer__tagline">
                            Menghadirkan koleksi mobil premium terbaik dunia untuk Anda. Temukan kendaraan impian Anda bersama kami.
                        </p>
                        <div className="footer__socials">
                            <a href="#" className="footer__social"><Instagram size={18} /></a>
                            <a href="#" className="footer__social"><Youtube size={18} /></a>
                            <a href="#" className="footer__social"><Twitter size={18} /></a>
                            <a href="#" className="footer__social"><Facebook size={18} /></a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="footer__col">
                        <h4 className="footer__title">Navigasi</h4>
                        <ul className="footer__links">
                            <li><Link to="/">Beranda</Link></li>
                            <li><Link to="/katalog">Katalog Mobil</Link></li>
                            <li><Link to="/tentang">Tentang Kami</Link></li>
                            <li><Link to="/kontak">Kontak</Link></li>
                        </ul>
                    </div>

                    {/* Brand */}
                    <div className="footer__col">
                        <h4 className="footer__title">Brand</h4>
                        <ul className="footer__links">
                            <li><Link to="/katalog?brand=BMW">BMW</Link></li>
                            <li><Link to="/katalog?brand=Mercedes-Benz">Mercedes-Benz</Link></li>
                            <li><Link to="/katalog?brand=Porsche">Porsche</Link></li>
                            <li><Link to="/katalog?brand=Ferrari">Ferrari</Link></li>
                            <li><Link to="/katalog?brand=Lamborghini">Lamborghini</Link></li>
                            <li><Link to="/katalog?brand=Audi">Audi</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer__col">
                        <h4 className="footer__title">Hubungi Kami</h4>
                        <ul className="footer__contacts">
                            <li>
                                <MapPin size={16} />
                                <span>Jl. Sudirman No. 88, Jakarta Pusat, DKI Jakarta 10220</span>
                            </li>
                            <li>
                                <Phone size={16} />
                                <span>+62 21 5550 1234</span>
                            </li>
                            <li>
                                <Mail size={16} />
                                <span>halo@autoelite.id</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copy">© 2024 AutoElite. Semua hak dilindungi undang-undang.</p>
                    <div className="footer__bottom-links">
                        <a href="#">Kebijakan Privasi</a>
                        <a href="#">Syarat & Ketentuan</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
