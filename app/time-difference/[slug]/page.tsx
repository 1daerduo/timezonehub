import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { CITIES, cityToSlug, getTzAbbr, getUtcOffset, getTimeDifference, getTimeDifferenceHours } from '@/lib/timezone-data';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface PageProps {
  params: { slug: string };
}

function parseSlug(slug: string): { from: typeof CITIES[0] | null; to: typeof CITIES[0] | null } | null {
  const parts = slug.split('-to-');
  if (parts.length !== 2) return null;
  const from = CITIES.find(c => cityToSlug(c.city) === parts[0]);
  const to = CITIES.find(c => cityToSlug(c.city) === parts[1]);
  if (!from || !to) return null;
  return { from, to };
}

export async function generateStaticParams() {
  const majorCities = CITIES.filter(c => c.population > 1000000);
  const params: { slug: string }[] = [];

  // Generate pairs: major city to major city
  for (let i = 0; i < majorCities.length && params.length < 600; i++) {
    for (let j = 0; j < majorCities.length && params.length < 600; j++) {
      if (i === j) continue;
      if (majorCities[i].timezone === majorCities[j].timezone) continue;
      params.push({
        slug: `${cityToSlug(majorCities[i].city)}-to-${cityToSlug(majorCities[j].city)}`,
      });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const parsed = parseSlug(params.slug);
  if (!parsed?.from || !parsed.to) return { title: 'Time Difference' };
  const { from, to } = parsed;
  const diff = getTimeDifference(from.timezone, to.timezone);
  return {
    title: `${from.city} to ${to.city} Time Difference | ${diff}`,
    description: `Time difference between ${from.city} (${getTzAbbr(from.timezone)}) and ${to.city} (${getTzAbbr(to.timezone)}). Current time in both cities, DST info, and meeting planner.`,
  };
}

export default function CityPairPage({ params }: PageProps) {
  const parsed = parseSlug(params.slug);
  if (!parsed?.from || !parsed.to) notFound();

  const { from, to } = parsed;
  const diff = getTimeDifference(from.timezone, to.timezone);
  const diffHours = getTimeDifferenceHours(from.timezone, to.timezone);
  const fromAbbr = getTzAbbr(from.timezone);
  const toAbbr = getTzAbbr(to.timezone);
  const fromOffset = getUtcOffset(from.timezone);
  const toOffset = getUtcOffset(to.timezone);

  // Generate 24-hour comparison
  const timeSlots = Array.from({ length: 24 }, (_, h) => {
    const now = new Date();
    const refDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, 0);
    const getOffsetMinutes = (tz: string, date: Date): number => {
      const utcDate = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }));
      const tzDate = new Date(date.toLocaleString('en-US', { timeZone: tz }));
      return (tzDate.getTime() - utcDate.getTime()) / 60000;
    };
    const fromOffsetMin = getOffsetMinutes(from.timezone, refDate);
    const toOffsetMin = getOffsetMinutes(to.timezone, refDate);
    const diffMs = (toOffsetMin - fromOffsetMin) * 60000;
    const toDate = new Date(refDate.getTime() + diffMs);
    const isWorking = h >= 9 && h < 18;
    return { fromHour: h, toHour: toDate.getHours(), toDay: toDate.getDate() !== refDate.getDate() ? (toDate > refDate ? '+1' : '-1') : '', isWorking };
  });

  // Related pairs
  const relatedPairs = CITIES.filter(c => c.timezone !== from.timezone && c.timezone !== to.timezone && c.population > 3000000).slice(0, 6);

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="py-8 md:py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:text-brand-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/time-difference/" className="hover:text-brand-600">Time Difference</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">{from.city} to {to.city}</span>
            </nav>

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
              {from.city} to {to.city} Time Difference
            </h1>
            <p className="text-gray-600 mb-8">
              Time difference between {from.city}, {from.country} ({fromAbbr}) and {to.city}, {to.country} ({toAbbr}).
            </p>

            {/* Summary card */}
            <div className="card p-6 mb-6 bg-brand-50 border-brand-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-sm text-brand-600 mb-1">{from.city} ({fromAbbr})</div>
                  <div className="text-xs text-brand-500">{fromOffset}</div>
                  <div className="text-xs text-gray-500 mt-1">{from.cityZh}, {from.countryZh}</div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-brand-600 text-white px-6 py-3 rounded-full font-bold text-lg">
                    {diff}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-brand-600 mb-1">{to.city} ({toAbbr})</div>
                  <div className="text-xs text-brand-500">{toOffset}</div>
                  <div className="text-xs text-gray-500 mt-1">{to.cityZh}, {to.countryZh}</div>
                </div>
              </div>
            </div>

            {/* Time comparison table */}
            <div className="card p-6 mb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">{from.city} vs {to.city} - Hour by Hour</h2>
              <div className="grid grid-cols-6 md:grid-cols-12 gap-1">
                {timeSlots.map(slot => (
                  <div key={slot.fromHour} className={`text-center p-1.5 rounded text-xs ${slot.isWorking ? 'bg-green-50 text-green-700' : 'bg-gray-50 text-gray-500'}`}>
                    <div className="font-medium">{slot.fromHour.toString().padStart(2, '0')}:00</div>
                    <div className="text-[10px] mt-0.5">{slot.toHour.toString().padStart(2, '0')}:00{slot.toDay}</div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mt-3 text-xs text-gray-500">
                <span className="flex items-center gap-1"><span className="w-3 h-3 bg-green-50 border border-green-200 rounded" /> Working hours</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 bg-gray-50 border border-gray-200 rounded" /> Off hours</span>
              </div>
            </div>

            {/* SEO content */}
            <div className="card p-6 mb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-3">About {from.city} to {to.city} Time Difference</h2>
              <div className="prose prose-sm text-gray-600 space-y-3">
                <p>
                  {from.city} is in the <strong>{fromAbbr}</strong> timezone ({fromOffset}), while {to.city} is in the <strong>{toAbbr}</strong> timezone ({toOffset}).
                  The time difference between {from.city} and {to.city} is <strong>{diff}</strong>.
                </p>
                <p>
                  When it is 9:00 AM in {from.city}, it is {(() => {
                    const now = new Date();
                    const ref = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 0);
                    const getOffsetMin = (tz: string) => {
                      const utc = new Date(ref.toLocaleString('en-US', { timeZone: 'UTC' }));
                      const local = new Date(ref.toLocaleString('en-US', { timeZone: tz }));
                      return (local.getTime() - utc.getTime()) / 60000;
                    };
                    const toTime = new Date(ref.getTime() + (getOffsetMin(to.timezone) - getOffsetMin(from.timezone)) * 60000);
                    return toTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
                  })()} in {to.city}.
                </p>
                <p>
                  For business meetings between {from.city} and {to.city}, the best overlap is typically during the hours highlighted in green in the table above.
                </p>
              </div>
            </div>

            {/* Related pairs */}
            <div className="card p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Related Time Differences</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {relatedPairs.map(c => (
                  <Link
                    key={c.city}
                    href={`/time-difference/${cityToSlug(from.city)}-to-${cityToSlug(c.city)}/`}
                    className="text-sm px-3 py-2 rounded-lg bg-gray-50 hover:bg-brand-50 hover:text-brand-700 transition-colors text-center"
                  >
                    {from.city} → {c.city}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
