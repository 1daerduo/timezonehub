'use client';

import { useState, useEffect } from 'react';
import { CITIES, CityData, formatTimeInTz, getTzAbbr, getUtcOffset } from '@/lib/timezone-data';

export default function WorldClock() {
  const [now, setNow] = useState(new Date());
  const [selectedCities, setSelectedCities] = useState<CityData[]>([
    CITIES.find(c => c.city === 'New York')!,
    CITIES.find(c => c.city === 'London')!,
    CITIES.find(c => c.city === 'Beijing')!,
    CITIES.find(c => c.city === 'Tokyo')!,
    CITIES.find(c => c.city === 'Sydney')!,
    CITIES.find(c => c.city === 'Dubai')!,
  ]);
  const [search, setSearch] = useState('');
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const addCity = (city: CityData) => {
    if (!selectedCities.find(c => c.timezone === city.timezone && c.city === city.city)) {
      setSelectedCities([...selectedCities, city]);
    }
    setShowAdd(false);
    setSearch('');
  };

  const removeCity = (idx: number) => {
    setSelectedCities(selectedCities.filter((_, i) => i !== idx));
  };

  const filterCities = (s: string) => {
    if (!s) return CITIES.slice(0, 20);
    const q = s.toLowerCase();
    return CITIES.filter(c =>
      c.city.toLowerCase().includes(q) || c.cityZh.includes(q) || c.country.toLowerCase().includes(q) || c.countryZh.includes(q)
    ).slice(0, 20);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">World Clock</h2>
        <button onClick={() => setShowAdd(!showAdd)} className="btn-primary text-sm !px-4 !py-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          Add City
        </button>
      </div>

      {showAdd && (
        <div className="card p-4 relative">
          <input
            type="text"
            className="input-field"
            placeholder="Search for a city..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
          />
          {search && (
            <div className="absolute z-50 left-4 right-4 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
              {filterCities(search).map(c => (
                <button
                  key={c.timezone + c.city}
                  className="w-full px-4 py-2 text-left hover:bg-brand-50 text-sm"
                  onClick={() => addCity(c)}
                >
                  {c.city}, {c.country} <span className="text-gray-400">({c.cityZh})</span>
                  <span className="text-xs text-gray-500 float-right">{getTzAbbr(c.timezone)}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {selectedCities.map((city, idx) => {
          const abbr = getTzAbbr(city.timezone);
          const offset = getUtcOffset(city.timezone);
          const timeStr = formatTimeInTz(now, city.timezone, 'time');
          const dateStr = formatTimeInTz(now, city.timezone, 'date');
          const isDaytime = (() => {
            const h = parseInt(formatTimeInTz(now, city.timezone, 'time').split(':')[0]);
            return h >= 6 && h < 18;
          })();

          return (
            <div key={city.timezone + city.city} className="card p-5 relative group">
              <button
                onClick={() => removeCity(idx)}
                className="absolute top-3 right-3 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                title="Remove"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{isDaytime ? '☀️' : '🌙'}</span>
                <div>
                  <div className="font-bold text-gray-900">{city.city}</div>
                  <div className="text-xs text-gray-500">{city.country} · {city.cityZh}</div>
                </div>
              </div>
              <div className="text-3xl font-extrabold text-gray-900 tabular-nums">{timeStr}</div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-gray-500">{dateStr}</span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{abbr} · {offset}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
