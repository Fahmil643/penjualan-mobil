import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import './Kontak.css';

const contactInfo = [
    { icon: <Phone size={20} />, label: "Telepon", value: "+62 21 5550 1234", sub: "Senin - Sabtu, 09.00 - 18.00" },
    { icon: <Mail size={20} />, label: "Email", value: "halo@autoelite.id", sub: "Kami balas dalam 1x24 jam" },
    { icon: <MapPin size={20} />, label: "Lokasi", value: "Jl. Sudirman No. 88", sub: "Jakarta Pusat, DKI Jakarta 10220" },
    { icon: <Clock size={20} />, label: "Jam Operasional", value: "Senin – Sabtu", sub: "09.00 – 18.00 WIB" },
];

export default function Kontak() {
    const [form, setForm] = useState({ nama: '', email: '', telepon: '', pesan: '' });
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSent(true);
        }, 1500);
    };

    return (
        <div className="kontak">
            <div className="kontak__header">
                <div className="kontak__header-bg" />
                <div className="container kontak__header-content">
                    <span className="badge badge-accent">Kontak</span>
                    <h1>Hubungi <span className="gradient-text">Kami</span></h1>
                    <p>Ada pertanyaan atau ingin test drive? Tim kami siap membantu Anda menemukan kendaraan impian.</p>
                </div>
            </div>

            <div className="container kontak__body">
                <div className="kontak__grid">
                    {/* Info */}
                    <div className="kontak__info">
                        <h2>Informasi Kontak</h2>
                        <p>Jangan ragu menghubungi kami melalui berbagai saluran berikut atau kunjungi showroom kami langsung.</p>

                        <div className="kontak__cards">
                            {contactInfo.map(c => (
                                <div key={c.label} className="kontak__card card">
                                    <div className="kontak__card-icon">{c.icon}</div>
                                    <div>
                                        <div className="kontak__card-label">{c.label}</div>
                                        <div className="kontak__card-value">{c.value}</div>
                                        <div className="kontak__card-sub">{c.sub}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="kontak__map">
                            <iframe
                                title="Lokasi AutoElite"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521!2d106.8272!3d-6.2088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMzEuNyJTIDEwNsKwNDknMzguMiJF!5e0!3m2!1sen!2sid!4v1"
                                width="100%"
                                height="200"
                                style={{ border: 0, borderRadius: 12, filter: 'invert(90%) hue-rotate(180deg)' }}
                                allowFullScreen=""
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Form */}
                    <div className="kontak__form-wrap">
                        {sent ? (
                            <div className="kontak__success">
                                <div className="kontak__success-icon"><CheckCircle size={48} /></div>
                                <h3>Pesan Terkirim!</h3>
                                <p>Terima kasih telah menghubungi kami. Tim kami akan merespons dalam 1x24 jam.</p>
                                <button onClick={() => setSent(false)} className="btn btn-primary">Kirim Pesan Lain</button>
                            </div>
                        ) : (
                            <form className="kontak__form" onSubmit={handleSubmit}>
                                <h2>Kirim Pesan</h2>
                                <p>Isi formulir di bawah dan tim kami akan segera menghubungi Anda.</p>
                                <div className="kontak__field-row">
                                    <div className="kontak__field">
                                        <label htmlFor="nama">Nama Lengkap *</label>
                                        <input id="nama" name="nama" type="text" required placeholder="Masukkan nama Anda"
                                            value={form.nama} onChange={handleChange} />
                                    </div>
                                    <div className="kontak__field">
                                        <label htmlFor="email">Email *</label>
                                        <input id="email" name="email" type="email" required placeholder="nama@email.com"
                                            value={form.email} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="kontak__field">
                                    <label htmlFor="telepon">Nomor Telepon</label>
                                    <input id="telepon" name="telepon" type="tel" placeholder="+62 8xx xxxx xxxx"
                                        value={form.telepon} onChange={handleChange} />
                                </div>
                                <div className="kontak__field">
                                    <label htmlFor="pesan">Pesan *</label>
                                    <textarea id="pesan" name="pesan" required rows={5}
                                        placeholder="Tuliskan pertanyaan atau kebutuhan Anda..."
                                        value={form.pesan} onChange={handleChange} />
                                </div>
                                <button type="submit" className={`btn btn-primary kontak__submit ${loading ? 'loading' : ''}`} disabled={loading}>
                                    {loading ? (
                                        <span className="kontak__spinner" />
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            Kirim Pesan
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
