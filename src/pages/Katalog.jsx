import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import CarCard from '../components/CarCard';
import { cars, brands, types, fuels } from '../data/cars';
import './Katalog.css';

export default function Katalog() {
    const [searchParams] = useSearchParams();
    const [search, setSearch] = useState('');
    const [selectedBrand, setSelectedBrand] = useState(searchParams.get('brand') || 'Semua');
    const [selectedType, setSelectedType] = useState('Semua');
    const [selectedFuel, setSelectedFuel] = useState('Semua');
    const [sortBy, setSortBy] = useState('default');
    const [showFilters, setShowFilters] = useState(false);

    const filtered = useMemo(() => {
        let result = [...cars];
        if (search) result = result.filter(c =>
            c.name.toLowerCase().includes(search.toLowerCase()) ||
            c.brand.toLowerCase().includes(search.toLowerCase())
        );
        if (selectedBrand !== 'Semua') result = result.filter(c => c.brand === selectedBrand);
        if (selectedType !== 'Semua') result = result.filter(c => c.type === selectedType);
        if (selectedFuel !== 'Semua') result = result.filter(c => c.fuel === selectedFuel);
        if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
        if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);
        if (sortBy === 'year') result.sort((a, b) => b.year - a.year);
        return result;
    }, [search, selectedBrand, selectedType, selectedFuel, sortBy]);

    const clearFilters = () => {
        setSearch('');
        setSelectedBrand('Semua');
        setSelectedType('Semua');
        setSelectedFuel('Semua');
        setSortBy('default');
    };

    const hasFilter = search || selectedBrand !== 'Semua' || selectedType !== 'Semua' || selectedFuel !== 'Semua';

    return (
        <div className="katalog">
            <div className="katalog__header">
                <div className="katalog__header-bg" />
                <div className="container katalog__header-content">
                    <span className="badge badge-primary">Katalog</span>
                    <h1>Temukan <span className="gradient-text">Kendaraan Anda</span></h1>
                    <p>Jelajahi koleksi lengkap mobil premium dari berbagai brand ternama dunia.</p>
                </div>
            </div>

            <div className="container katalog__body">
                {/* Search & Filter Bar */}
                <div className="katalog__toolbar">
                    <div className="katalog__search">
                        <Search size={18} className="katalog__search-icon" />
                        <input
                            type="text"
                            placeholder="Cari nama atau brand mobil..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="katalog__search-input"
                        />
                        {search && (
                            <button onClick={() => setSearch('')} className="katalog__search-clear">
                                <X size={16} />
                            </button>
                        )}
                    </div>
                    <button
                        className={`btn btn-ghost katalog__filter-btn ${showFilters ? 'active' : ''}`}
                        onClick={() => setShowFilters(!showFilters)}
                    >
                        <SlidersHorizontal size={16} />
                        Filter
                    </button>
                    <div className="katalog__sort">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="katalog__select"
                        >
                            <option value="default">Urutkan: Default</option>
                            <option value="price-asc">Harga: Terendah</option>
                            <option value="price-desc">Harga: Tertinggi</option>
                            <option value="year">Tahun: Terbaru</option>
                        </select>
                    </div>
                </div>

                {/* Filter Panel */}
                {showFilters && (
                    <div className="katalog__filters">
                        <div className="katalog__filter-group">
                            <label>Brand</label>
                            <div className="katalog__filter-chips">
                                {brands.map(b => (
                                    <button
                                        key={b}
                                        className={`katalog__chip ${selectedBrand === b ? 'active' : ''}`}
                                        onClick={() => setSelectedBrand(b)}
                                    >{b}</button>
                                ))}
                            </div>
                        </div>
                        <div className="katalog__filter-group">
                            <label>Tipe</label>
                            <div className="katalog__filter-chips">
                                {types.map(t => (
                                    <button
                                        key={t}
                                        className={`katalog__chip ${selectedType === t ? 'active' : ''}`}
                                        onClick={() => setSelectedType(t)}
                                    >{t}</button>
                                ))}
                            </div>
                        </div>
                        <div className="katalog__filter-group">
                            <label>Bahan Bakar</label>
                            <div className="katalog__filter-chips">
                                {fuels.map(f => (
                                    <button
                                        key={f}
                                        className={`katalog__chip ${selectedFuel === f ? 'active' : ''}`}
                                        onClick={() => setSelectedFuel(f)}
                                    >{f}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Results info */}
                <div className="katalog__results-bar">
                    <span className="katalog__count">
                        Menampilkan <strong>{filtered.length}</strong> kendaraan
                    </span>
                    {hasFilter && (
                        <button onClick={clearFilters} className="katalog__clear">
                            <X size={14} /> Hapus Filter
                        </button>
                    )}
                </div>

                {/* Grid */}
                {filtered.length > 0 ? (
                    <div className="grid-4">
                        {filtered.map(car => <CarCard key={car.id} car={car} />)}
                    </div>
                ) : (
                    <div className="katalog__empty">
                        <div className="katalog__empty-icon">🔍</div>
                        <h3>Tidak Ada Hasil</h3>
                        <p>Coba ubah filter atau kata kunci pencarian Anda.</p>
                        <button onClick={clearFilters} className="btn btn-primary">Reset Filter</button>
                    </div>
                )}
            </div>
        </div>
    );
}
