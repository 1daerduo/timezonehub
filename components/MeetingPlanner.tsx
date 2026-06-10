'use client';

import { useState } from 'react';
import { CITIES, CityData, getTzAbbr, getTimeDifferenceHours } from '@/lib/timezone-data';

interface Participant {
  city: CityData;
  id: string;
}

export default function MeetingPlanner() {
  const [participants, setParticipants] = useState<Participant[]>([
    { city: CITIES.find(c => c.city === 'New York')!, id: '1' },
    { city: CITIES.find(c => c.city === 'London')!, id: '2' },
    { city: CITIES.find(c => c.city === 'Tokyo')!, id: '3' },
  ]);
  const [search, setSearch] = useState('');
  const [showAdd, setShowAdd] = useState(false);

  const addParticipant = (city: CityData) => {
    setParticipants([...participants, { city, id: Date.now().toString() }]);
    setShowAdd(false);
    setSearch('');
  };

  const removeParticipant = (id: string) => {
    setParticipants(participants.filter(p => p.id !== id));
  };

  // Generate meeting time slots for the next 7 days
  const generateMeetingSlots = () => {
    const slots: { hour: number; label: string; scores: number[]; avgScore: number }[] = [];
    const now = new Date();
    const refTz = participants[0]?.city.timezone || 'UTC';

    for (let h = 0; h < 24; h++) {
      const scores = participants.map(p => {
        // Create a date in the participant's timezone at this reference hour
        const refDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, 0);
        // Get the local hour for this participant
        const utcStr = refDate.toLocaleString('en-US', { timeZone: refTz });
        const localStr = refDate.toLocaleString('en-US', { timeZone: p.city.timezone });
        const utcDate = new Date(utcStr);
        const localDate = new Date(localStr);
        const localHour = localDate.getHours() + (localDate.getDate() !== utcDate.getDate() ? (localDate > utcDate ? 24 : -24) : 0);

        // Score: 9-17 = perfect (3), 8-9 or 17-19 = ok (2), 7-8 or 19-21 = poor (1), else = bad (0)
        if (localHour >= 9 && localHour <= 17) return 3;
        if (localHour >= 8 && localHour <= 19) return 2;
        if (localHour >= 7 && localHour <= 21) return 1;
        return 0;
      });

      const avgScore = (scores.reduce((a: number, b: number) => a + b, 0) as number) / scores.length;
      const label = `${h.toString().padStart(2, '0')}:00`;
      slots.push({ hour: h, label, scores, avgScore });
    }

    return slots.sort((a, b) => b.avgScore - a.avgScore);
  };

  const meetingSlots = generateMeetingSlots();
  const bestSlots = meetingSlots.filter(s => s.avgScore >= 2).slice(0, 8);

  const filterCities = (s: string) => {
    if (!s) return CITIES.slice(0, 20);
    const q = s.toLowerCase();
    return CITIES.filter(c =>
      c.city.toLowerCase().includes(q) || c.cityZh.includes(q) || c.country.toLowerCase().includes(q)
    ).slice(0, 20);
  };

  const getScoreColor = (score: number) => {
    if (score >= 3) return 'bg-green-100 text-green-700 border-green-200';
    if (score >= 2) return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    if (score >= 1) return 'bg-orange-100 text-orange-700 border-orange-200';
    return 'bg-red-100 text-red-700 border-red-200';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 3) return 'Work';
    if (score >= 2) return 'OK';
    if (score >= 1) return 'Early/Late';
    return 'Sleep';
  };

  return (
    <div className="space-y-6">
      {/* Participants */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900">Participants ({participants.length} cities)</h3>
        <button onClick={() => setShowAdd(!showAdd)} className="btn-primary text-sm !px-4 !py-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          Add
        </button>
      </div>

      {showAdd && (
        <div className="card p-4 relative">
          <input type="text" className="input-field" placeholder="Search city..." value={search} onChange={e => setSearch(e.target.value)} autoFocus />
          {search && (
            <div className="absolute z-50 left-4 right-4 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
              {filterCities(search).map(c => (
                <button key={c.timezone + c.city} className="w-full px-4 py-2 text-left hover:bg-brand-50 text-sm" onClick={() => addParticipant(c)}>
                  {c.city}, {c.country} ({getTzAbbr(c.timezone)})
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {participants.map(p => (
          <span key={p.id} className="inline-flex items-center gap-1 bg-brand-50 text-brand-700 px-3 py-1.5 rounded-full text-sm font-medium">
            {p.city.city} ({getTzAbbr(p.city.timezone)})
            <button onClick={() => removeParticipant(p.id)} className="ml-1 hover:text-red-500">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </span>
        ))}
      </div>

      {/* Best meeting times */}
      <div className="card p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Best Meeting Times</h3>
        <p className="text-sm text-gray-500 mb-4">Green = working hours, Yellow = acceptable, Red = sleeping hours</p>

        {bestSlots.length === 0 ? (
          <p className="text-gray-500">No good overlap found. Try fewer participants.</p>
        ) : (
          <div className="space-y-3">
            {bestSlots.map(slot => (
              <div key={slot.hour} className="border border-gray-100 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-gray-900">{slot.label} ({participants[0]?.city.city} time)</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${slot.avgScore >= 2.5 ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {slot.avgScore >= 2.5 ? 'Best' : 'OK'}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {participants.map((p, i) => {
                    // Calculate local time for each participant
                    const refDate = new Date();
                    refDate.setHours(slot.hour, 0, 0, 0);
                    const refTz = participants[0]?.city.timezone || 'UTC';
                    const utcStr = refDate.toLocaleString('en-US', { timeZone: refTz });
                    const localStr = refDate.toLocaleString('en-US', { timeZone: p.city.timezone });
                    const utcDate = new Date(utcStr);
                    const localDate = new Date(localStr);
                    const localHour = localDate.getHours() + (localDate.getDate() !== utcDate.getDate() ? (localDate > utcDate ? 24 : -24) : 0);

                    return (
                      <span key={p.id} className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded border ${getScoreColor(slot.scores[i])}`}>
                        {p.city.city}: {localHour.toString().padStart(2, '0')}:00 ({getScoreLabel(slot.scores[i])})
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Full 24h heatmap */}
      <div className="card p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">24-Hour Heatmap ({participants[0]?.city.city} time)</h3>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-1">
          {meetingSlots.sort((a, b) => a.hour - b.hour).map(slot => (
            <div
              key={slot.hour}
              className={`text-center p-2 rounded text-xs ${slot.avgScore >= 2.5 ? 'bg-green-100 text-green-700' : slot.avgScore >= 1.5 ? 'bg-yellow-100 text-yellow-700' : slot.avgScore >= 0.5 ? 'bg-orange-50 text-orange-600' : 'bg-red-50 text-red-400'}`}
            >
              <div className="font-medium">{slot.hour.toString().padStart(2, '0')}:00</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
