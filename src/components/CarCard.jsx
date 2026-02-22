import { Link } from 'react-router-dom';
import { Fuel, Gauge, Settings, Users, Zap, ArrowRight, Heart } from 'lucide-react';
import { formatPrice } from '../data/cars';
import './CarCard.css';

export default function CarCard({ car, featured = false }) {
    const fuelIcon = car.fuel === 'Electric' ? <Zap size={13} /> : <Fuel size={13} />;

    return (
        <Link to={`/mobil/${car.id}`} className={`car-card card ${featured ? 'car-card--featured' : ''}`}>
            <div className="car-card__image-wrap">
                <img
                    src={car.image}
                    alt={car.name}
                    className="car-card__image"
                    onError={(e) => {
                        e.target.src = `https://placehold.co/800x500/111827/3B82F6?text=${encodeURIComponent(car.name)}`;
                    }}
                />
                <div className="car-card__overlay" />
                <div className="car-card__top">
                    <span className={`badge badge-${car.badgeType}`}>{car.badge}</span>
                    <button className="car-card__wish" onClick={(e) => e.preventDefault()}>
                        <Heart size={16} />
                    </button>
                </div>
                <div className="car-card__fuel-badge">
                    {fuelIcon}
                    {car.fuel}
                </div>
            </div>

            <div className="car-card__body">
                <div className="car-card__brand">{car.brand} • {car.year}</div>
                <h3 className="car-card__name">{car.name}</h3>

                <div className="car-card__specs">
                    <div className="car-card__spec">
                        <Gauge size={14} />
                        <span>{car.power}</span>
                    </div>
                    <div className="car-card__spec">
                        <Settings size={14} />
                        <span>{car.transmission}</span>
                    </div>
                    <div className="car-card__spec">
                        <Users size={14} />
                        <span>{car.seats} Kursi</span>
                    </div>
                </div>

                <div className="car-card__footer">
                    <div>
                        <div className="car-card__price-label">Harga Mulai</div>
                        <div className="car-card__price">{formatPrice(car.price)}</div>
                    </div>
                    <div className="car-card__cta">
                        <span>Detail</span>
                        <ArrowRight size={16} />
                    </div>
                </div>
            </div>
        </Link>
    );
}
