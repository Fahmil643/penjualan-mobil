import { Link } from 'react-router-dom';
import { Users, Award, Shield, Headphones, Target, ArrowRight } from 'lucide-react';
import { stats } from '../data/cars';
import './Tentang.css';

const team = [
    { name: "Rizal Hakim", role: "CEO & Founder", avatar: "RH", desc: "20+ tahun di industri otomotif premium Indonesia." },
    { name: "Sari Indah", role: "Head of Sales", avatar: "SI", desc: "Spesialis penjualan kendaraan mewah berpengalaman." },
    { name: "Dimas Pratama", role: "Senior Advisor", avatar: "DP", desc: "Konsultan kendaraan tersertifikasi dari Jerman." },
];

export default function Tentang() {
    return (
        <div className="tentang">
            {/* Header */}
            <div className="tentang__header">
                <div className="tentang__header-bg" />
                <div className="container tentang__header-content">
                    <span className="badge badge-accent">Tentang Kami</span>
                    <h1>AutoElite — <span className="gradient-text">Lebih Dari Sekedar Dealer</span></h1>
                    <p>Kami hadir untuk mengubah cara Anda memiliki kendaraan premium. Kepercayaan, kualitas, dan pengalaman premium adalah fondasi kami.</p>
                </div>
            </div>

            <div className="container">
                {/* Story */}
                <section className="tentang__story section">
                    <div className="tentang__story-grid">
                        <div className="tentang__story-text">
                            <span className="badge badge-primary">Kisah Kami</span>
                            <h2 style={{ marginTop: 16 }}>Membangun Kepercayaan Sejak <span className="gradient-text">2008</span></h2>
                            <p>AutoElite lahir dari visi sederhana namun kuat: menghadirkan pengalaman berbelanja kendaraan premium yang transparan, menyenangkan, dan terpercaya bagi masyarakat Indonesia.</p>
                            <p>Selama lebih dari 15 tahun, kami telah melayani ribuan pelanggan dari berbagai kalangan, mulai dari profesional muda hingga kalangan eksekutif ternama. Setiap kendaraan yang kami jual melewati proses inspeksi ketat yang dilakukan oleh inspektor bersertifikat internasional.</p>
                            <p>Kami percaya bahwa membeli mobil mewah adalah sebuah pengalaman, bukan hanya transaksi. Itulah mengapa kami memberikan layanan konsultasi personal dan after-sales yang tak tertandingi.</p>
                            <Link to="/kontak" className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: 8 }}>
                                Hubungi Tim Kami <ArrowRight size={16} />
                            </Link>
                        </div>
                        <div className="tentang__story-stats">
                            {stats.map(s => (
                                <div key={s.label} className="tentang__stat card">
                                    <div className="tentang__stat-value">{s.value}</div>
                                    <div className="tentang__stat-label">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="section tentang__values">
                    <div className="section-header">
                        <span className="badge badge-gold">Nilai Kami</span>
                        <h2 style={{ marginTop: 12 }}>Komitmen Yang <span className="gradient-text">Kami Pegang</span></h2>
                        <div className="divider" />
                    </div>
                    <div className="grid-3">
                        {[
                            { icon: <Shield size={26} />, title: "Integritas", desc: "Transparansi harga dan kondisi kendaraan tanpa ada yang disembunyikan. Kami menjaga kejujuran di atas segalanya." },
                            { icon: <Award size={26} />, title: "Kualitas", desc: "Setiap kendaraan diinspeksi menyeluruh 200 titik oleh tim ahli bersertifikasi untuk memastikan kondisi prima." },
                            { icon: <Headphones size={26} />, title: "Pelayanan", desc: "Customer service 24/7 yang siap membantu Anda mulai dari konsultasi, test drive, hingga purna jual." },
                            { icon: <Target size={26} />, title: "Presisi", desc: "Kami mencocokkan Anda dengan kendaraan yang tepat sesuai kebutuhan, gaya hidup, dan anggaran Anda." },
                            { icon: <Users size={26} />, title: "Komunitas", desc: "Bergabunglah dengan komunitas AutoElite dan nikmati berbagai keuntungan eksklusif sebagai member." },
                            { icon: <Shield size={26} />, title: "Keamanan", desc: "Garansi dokumen lengkap dan legalitas terjamin. Semua proses KPM dipandu tim finansial kami." },
                        ].map(v => (
                            <div key={v.title} className="value-card card">
                                <div className="value-card__icon">{v.icon}</div>
                                <h3>{v.title}</h3>
                                <p>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Team */}
                <section className="section">
                    <div className="section-header">
                        <span className="badge badge-primary">Tim Kami</span>
                        <h2 style={{ marginTop: 12 }}>Orang-Orang di Balik <span className="gradient-text">AutoElite</span></h2>
                        <div className="divider" />
                    </div>
                    <div className="tentang__team">
                        {team.map(m => (
                            <div key={m.name} className="team-card card">
                                <div className="team-card__avatar">{m.avatar}</div>
                                <h3>{m.name}</h3>
                                <span className="team-card__role">{m.role}</span>
                                <p>{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
