import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Headphones, ChevronRight, Star, Play } from 'lucide-react';
import CarCard from '../components/CarCard';
import { cars, testimonials, stats, formatPrice } from '../data/cars';
import './Home.css';

const featuredCars = cars.filter(c => c.featured);

export default function Home() {
    return (
        <div className="home">
            {/* Hero */}
            <section className="hero">
                <div className="hero__bg">
                    <div className="hero__bg-img" />
                    <div className="hero__grid-overlay" />
                    <div className="hero__glow hero__glow--1" />
                    <div className="hero__glow hero__glow--2" />
                </div>

                <div className="container hero__content">
                    <div className="hero__text">
                        <span className="badge badge-primary hero__badge">
                            <span className="hero__badge-dot" /> Koleksi Premium 2024
                        </span>
                        <h1 className="hero__title">
                            Temukan Mobil <br />
                            <span className="gradient-text">Impian Anda</span>
                        </h1>
                        <p className="hero__subtitle">
                            Koleksi eksklusif kendaraan premium dan supercar terbaik dunia.
                            Dari BMW hingga Ferrari — semuanya ada di AutoElite.
                        </p>
                        <div className="hero__actions">
                            <Link to="/katalog" className="btn btn-primary hero__btn-main">
                                Jelajahi Katalog
                                <ArrowRight size={18} />
                            </Link>
                            <Link to="/kontak" className="btn btn-outline">
                                <Play size={16} />
                                Konsultasi Gratis
                            </Link>
                        </div>

                        <div className="hero__stats">
                            {stats.map((s) => (
                                <div key={s.label} className="hero__stat">
                                    <div className="hero__stat-value">{s.value}</div>
                                    <div className="hero__stat-label">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hero__visual">
                        <div className="hero__car-card">
                            <img
                                src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900&q=80"
                                alt="BMW M4"
                                className="hero__car-img"
                                onError={(e) => { e.target.src = 'https://placehold.co/800x500/111827/3B82F6?text=BMW+M4'; }}
                            />
                            <div className="hero__float-badge">
                                <div className="hero__float-badge-inner">
                                    <span className="hero__float-badge-title">BMW M4 Competition</span>
                                    <span className="hero__float-badge-price">{formatPrice(2850000000)}</span>
                                </div>
                                <Link to="/mobil/1" className="hero__float-badge-btn">
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <span className="badge badge-gold">Unggulan</span>
                        <h2 style={{ marginTop: 12 }}>Koleksi <span className="gradient-text">Pilihan</span></h2>
                        <div className="divider" />
                        <p>Kendaraan premium terpilih dengan kondisi terbaik dan harga kompetitif.</p>
                    </div>
                    <div className="grid-3">
                        {featuredCars.map((car) => (
                            <CarCard key={car.id} car={car} featured />
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: 40 }}>
                        <Link to="/katalog" className="btn btn-outline">
                            Lihat Semua Koleksi <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Us */}
            <section className="section why-us">
                <div className="container">
                    <div className="section-header">
                        <span className="badge badge-accent">Keunggulan Kami</span>
                        <h2 style={{ marginTop: 12 }}>Mengapa Pilih <span className="gradient-text">AutoElite?</span></h2>
                        <div className="divider" />
                    </div>
                    <div className="grid-3">
                        {[
                            {
                                icon: <Shield size={28} />,
                                title: "Garansi Resmi",
                                desc: "Setiap kendaraan dilengkapi garansi resmi pabrikan dan inspeksi menyeluruh 200 titik.",
                            },
                            {
                                icon: <Award size={28} />,
                                title: "Bersertifikat",
                                desc: "Tim inspektor bersertifikat internasional memastikan kualitas setiap unit yang kami jual.",
                            },
                            {
                                icon: <Headphones size={28} />,
                                title: "Layanan 24/7",
                                desc: "Customer support kami siap 24 jam 7 hari seminggu untuk membantu Anda.",
                            },
                        ].map((item) => (
                            <div key={item.title} className="why-card card">
                                <div className="why-card__icon">{item.icon}</div>
                                <h3 className="why-card__title">{item.title}</h3>
                                <p className="why-card__desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <span className="badge badge-primary">Testimonial</span>
                        <h2 style={{ marginTop: 12 }}>Kata Mereka Tentang <span className="gradient-text">Kami</span></h2>
                        <div className="divider" />
                    </div>
                    <div className="grid-3">
                        {testimonials.map((t) => (
                            <div key={t.id} className="testi-card card">
                                <div className="testi-card__stars">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                                    ))}
                                </div>
                                <p className="testi-card__text">"{t.text}"</p>
                                <div className="testi-card__car">Membeli: {t.car}</div>
                                <div className="testi-card__author">
                                    <div className="testi-card__avatar">{t.avatar}</div>
                                    <div>
                                        <div className="testi-card__name">{t.name}</div>
                                        <div className="testi-card__role">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-banner">
                        <div className="cta-banner__bg" />
                        <div className="cta-banner__content">
                            <h2>Siap Menemukan Mobil Impian Anda?</h2>
                            <p>Hubungi tim ahli kami sekarang dan dapatkan konsultasi pembelian gratis.</p>
                            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
                                <Link to="/katalog" className="btn btn-primary">
                                    Jelajahi Katalog <ArrowRight size={16} />
                                </Link>
                                <Link to="/kontak" className="btn btn-outline">
                                    Hubungi Kami
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
