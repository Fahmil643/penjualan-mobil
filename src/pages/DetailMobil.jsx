import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Fuel, Gauge, Settings, Users, Zap, ChevronRight, Phone, MessageSquare, Calendar, Shield, Star, CheckCircle } from 'lucide-react';
import { cars, formatPrice } from '../data/cars';
import CarCard from '../components/CarCard';
import './DetailMobil.css';

export default function DetailMobil() {
    const { id } = useParams();
    const navigate = useNavigate();
    const car = cars.find(c => c.id === parseInt(id));

    if (!car) {
        return (
            <div className="detail-notfound">
                <h2>Mobil tidak ditemukan</h2>
                <Link to="/katalog" className="btn btn-primary">Kembali ke Katalog</Link>
            </div>
        );
    }

    const related = cars.filter(c => c.id !== car.id && (c.type === car.type || c.brand === car.brand)).slice(0, 3);

    const specs = [
        { label: 'Tenaga', value: car.power, icon: <Gauge size={18} /> },
        { label: 'Transmisi', value: car.transmission, icon: <Settings size={18} /> },
        { label: 'Bahan Bakar', value: car.fuel, icon: car.fuel === 'Electric' ? <Zap size={18} /> : <Fuel size={18} /> },
        { label: 'Kapasitas', value: `${car.seats} Kursi`, icon: <Users size={18} /> },
        { label: 'Top Speed', value: car.topSpeed, icon: <Gauge size={18} /> },
        { label: '0-100 km/h', value: car.acceleration, icon: <Zap size={18} /> },
    ];

    return (
        <div className="detail">
            <div className="container">
                {/* Breadcrumb */}
                <div className="detail__breadcrumb">
                    <button onClick={() => navigate(-1)} className="detail__back">
                        <ArrowLeft size={18} /> Kembali
                    </button>
                    <span className="detail__breadcrumb-sep">›</span>
                    <Link to="/katalog">Katalog</Link>
                    <span className="detail__breadcrumb-sep">›</span>
                    <span>{car.name}</span>
                </div>

                {/* Main Grid */}
                <div className="detail__grid">
                    {/* Left - Image & Specs */}
                    <div className="detail__left">
                        <div className="detail__img-wrap">
                            <img
                                src={car.image}
                                alt={car.name}
                                className="detail__img"
                                onError={(e) => { e.target.src = `https://placehold.co/800x500/111827/3B82F6?text=${encodeURIComponent(car.name)}`; }}
                            />
                            <div className="detail__img-overlay" />
                            <div className="detail__img-top">
                                <span className={`badge badge-${car.badgeType}`}>{car.badge}</span>
                                <span className="detail__year-badge">{car.year}</span>
                            </div>
                        </div>

                        {/* Specs */}
                        <div className="detail__specs-grid">
                            {specs.map(s => (
                                <div key={s.label} className="detail__spec-item">
                                    <div className="detail__spec-icon">{s.icon}</div>
                                    <div>
                                        <div className="detail__spec-label">{s.label}</div>
                                        <div className="detail__spec-value">{s.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Info */}
                    <div className="detail__right">
                        <div className="detail__brand">{car.brand} • {car.type} • {car.year}</div>
                        <h1 className="detail__name">{car.name}</h1>

                        <div className="detail__rating">
                            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />)}
                            <span>(124 ulasan)</span>
                        </div>

                        <div className="detail__price-box">
                            <div className="detail__price-label">Harga</div>
                            <div className="detail__price">{formatPrice(car.price)}</div>
                            <div className="detail__price-note">*Harga dapat berubah. Hubungi kami untuk penawaran terbaik.</div>
                        </div>

                        <p className="detail__desc">{car.description}</p>

                        <div className="detail__features">
                            <h3>Fitur Unggulan</h3>
                            <div className="detail__features-grid">
                                {car.features.map(f => (
                                    <div key={f} className="detail__feature">
                                        <CheckCircle size={15} />
                                        <span>{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="detail__info-chips">
                            <div className="detail__chip">
                                <Shield size={14} />
                                Garansi Resmi
                            </div>
                            <div className="detail__chip">
                                <Calendar size={14} />
                                Test Drive Gratis
                            </div>
                            <div className="detail__chip">
                                <CheckCircle size={14} />
                                Inspeksi 200 Titik
                            </div>
                        </div>

                        <div className="detail__actions">
                            <a href="https://wa.me/6221555001234" target="_blank" rel="noopener noreferrer" className="btn btn-primary detail__btn-main">
                                <Phone size={18} />
                                Hubungi Sekarang
                            </a>
                            <Link to="/kontak" className="btn btn-outline">
                                <MessageSquare size={18} />
                                Kirim Pesan
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Related */}
                {related.length > 0 && (
                    <div className="detail__related">
                        <div className="detail__related-header">
                            <h2>Kendaraan <span className="gradient-text">Serupa</span></h2>
                            <Link to="/katalog" className="btn btn-ghost">Lihat Semua <ChevronRight size={16} /></Link>
                        </div>
                        <div className="grid-3">
                            {related.map(c => <CarCard key={c.id} car={c} />)}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
