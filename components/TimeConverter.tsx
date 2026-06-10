'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CITIES, CityData, cityToSlug, formatTimeInTz, getTzAbbr, getUtcOffset, getTimeDifference } from '@/lib/timezone-data';

export default function TimeConverter() {
  const popular = CITIES.filter(c => c.population > 5000000).slice(0, 20);
  const [fromCity, setFromCity] = useState<CityData>(CITIES.find(c => c.city === 'New York')!);
  const [toCity, setToCity] = useState<CityData>(CITIES.find(c => c.city === 'London')!);
  const [fromTime, setFromTime] = useState('09:00');
  const [searchFrom, setSearchFrom] = useState('');
  const [searchTo, setSearchTo] = useState('');
  const [showFromList, setShowFromList] = useState(false);
  const [showToList, setShowToList] = useState(false);

  const now = new Date();
  const timeDiff = getTimeDifference(fromCity.timezone, toCity.timezone);
  const fromAbbr = getTzAbbr(fromCity.timezone);
  const toAbbr = getTzAbbr(toCity.timezone);
  const fromOffset = getUtcOffset(fromCity.timezone);
  const toOffset = getUtcOffset(toCity.timezone);

  // Calculate converted time
  const getConvertedTime = () => {
    const [h, m] = fromTime.split(':').map(Number);
    const fromDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m);
    const fromOffsetMin = getOffsetMinutes(fromCity.timezone, fromDate);
    const toOffsetMin = getOffsetMinutes(toCity.timezone, fromDate);
    const diffMs = (toOffsetMin - fromOffsetMin) * 60000;
    const toDate = new Date(fromDate.getTime() + diffMs);
    return toDate;
  };

  const getOffsetMinutes = (tz: string, date: Date): number => {
    const utcDate = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }));
    const tzDate = new Date(date.toLocaleString('en-US', { timeZone: tz }));
    return (tzDate.getTime() - utcDate.getTime()) / 60000;
  };

  const converted = getConvertedTime();
  const convertedTimeStr = converted.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const convertedDateStr = converted.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

  const filterCities = (search: string) => {
    if (!search) return CITIES;
    const s = search.toLowerCase();
    return CITIES.filter(c =>
      c.city.toLowerCase().includes(s) ||
      c.cityZh.includes(s) ||
      c.country.toLowerCase().includes(s) ||
      c.countryZh.includes(s) ||
      c.timezone.toLowerCase().includes(s)
    );
  };

  const CitySelector = ({ city, setCity, search, setSearch, show, setShow, label }: {
    city: CityData; setCity: (c: CityData) => void;
    search: string; setSearch: (s: string) => void;
    show: boolean; setShow: (s: boolean) => void; label: string;
  }) => (
    <div className="flex-1">
      <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
      <div className="relative">
        <input
          type="text"
          className="input-field pr-10"
          placeholder="Search city..."
          value={show ? search : `${city.city}, ${city.country}`}
          onChange={(e) => { setSearch(e.target.value); setShow(true); }}
          onFocus={() => { setShow(true); setSearch(''); }}
          onBlur={() => setTimeout(() => setShow(false), 200)}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>
        {show && (
          <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto">
            {filterCities(search).slice(0, 30).map(c => (
              <button
                key={c.timezone + c.city}
                className="w-full px-4 py-2 text-left hover:bg-brand-50 flex justify-between items-center"
                onMouseDown={() => { setCity(c); setSearch(''); setShow(false); }}
              >
                <span className="text-sm">{c.city}, {c.country} <span className="text-gray-400">({c.cityZh})</span></span>
                <span className="text-xs text-gray-500">{getTzAbbr(c.timezone)}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  // Generate a time comparison table for the day
  const timeSlots = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

  return (
    <div className="space-y-6">
      {/* City selectors */}
      <div className="flex flex-col md:flex-row gap-4 items-end">
        <CitySelector city={fromCity} setCity={setFromCity} search={searchFrom} setSearch={setSearchFrom} show={showFromList} setShow={setShowFromList} label="From" />
        <button
          className="p-3 rounded-full bg-brand-100 text-brand-600 hover:bg-brand-200 transition-colors mb-1 shrink-0"
          onClick={() => { const tmp = fromCity; setFromCity(toCity); setToCity(tmp); }}
          title="Swap time zones"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
        </button>
        <CitySelector city={toCity} setCity={setToCity} search={searchTo} setSearch={setSearchTo} show={showToList} setShow={setShowToList} label="To" />
      </div>

      {/* Time input + result */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card p-6">
          <div className="text-sm text-gray-500 mb-1">{fromCity.city} ({fromAbbr})</div>
          <div className="text-xs text-gray-400 mb-3">{fromOffset}</div>
          <input
            type="time"
            className="input-field text-2xl font-bold text-center"
            value={fromTime}
            onChange={(e) => setFromTime(e.target.value)}
          />
          <div className="mt-3 text-center">
            <span className="text-sm text-gray-500">{formatTimeInTz(now, fromCity.timezone, 'date')}</span>
          </div>
        </div>
        <div className="card p-6 bg-brand-50 border-brand-200">
          <div className="text-sm text-brand-700 mb-1">{toCity.city} ({toAbbr})</div>
          <div className="text-xs text-brand-500 mb-3">{toOffset}</div>
          <div className="text-4xl font-extrabold text-center text-brand-700">{convertedTimeStr}</div>
          <div className="mt-2 text-center">
            <span className="text-sm text-brand-600">{convertedDateStr}</span>
          </div>
          <div className="mt-3 text-center">
            <span className="inline-flex items-center gap-1 text-sm bg-brand-100 text-brand-700 px-3 py-1 rounded-full">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {timeDiff}
            </span>
          </div>
        </div>
      </div>

      {/* Time comparison table */}
      <div className="card p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Time Comparison</h3>
        <div className="grid grid-cols-12 gap-0 overflow-x-auto">
          <div className="col-span-1 font-semibold text-xs text-gray-500 py-1 text-center border-b">{fromAbbr}</div>
          <div className="col-span-1 font-semibold text-xs text-gray-500 py-1 text-center border-b">{toAbbr}</div>
        </div>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-1 mt-2">
          {timeSlots.map(hour => {
            const fromDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, 0);
            const fromOffsetMin = getOffsetMinutes(fromCity.timezone, fromDate);
            const toOffsetMin = getOffsetMinutes(toCity.timezone, fromDate);
            const diffMs = (toOffsetMin - fromOffsetMin) * 60000;
            const toDate = new Date(fromDate.getTime() + diffMs);
            const isWorking = hour >= 9 && hour < 18;
            return (
              <div key={hour} className={`text-center p-1.5 rounded text-xs ${isWorking ? 'bg-green-50 text-green-700' : 'bg-gray-50 text-gray-500'}`}>
                <div className="font-medium">{hour.toString().padStart(2, '0')}:00</div>
                <div className="text-[10px] mt-0.5">{toDate.getHours().toString().padStart(2, '0')}:00</div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-4 mt-3 text-xs text-gray-500">
          <span className="flex items-center gap-1"><span className="w-3 h-3 bg-green-50 border border-green-200 rounded" /> Working hours (9-18)</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 bg-gray-50 border border-gray-200 rounded" /> Off hours</span>
        </div>
      </div>

      {/* Quick links to city pair */}
      <div className="card p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-3">Popular Conversions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            ['New York', 'London'], ['Los Angeles', 'Tokyo'], ['Beijing', 'New York'],
            ['London', 'Dubai'], ['Sydney', 'London'], ['Mumbai', 'New York'],
            ['Singapore', 'San Francisco'], ['Paris', 'Tokyo'],
          ].map(([f, t]) => {
            const fc = CITIES.find(c => c.city === f)!;
            const tc = CITIES.find(c => c.city === t)!;
            return (
              <Link key={`${f}-${t}`} href={`/time-difference/${cityToSlug(f)}-to-${cityToSlug(t)}/`}
                className="text-sm px-3 py-2 rounded-lg bg-gray-50 hover:bg-brand-50 hover:text-brand-700 transition-colors text-center">
                {f} → {t}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
