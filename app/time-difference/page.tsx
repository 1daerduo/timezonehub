import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { CITIES, cityToSlug, getTzAbbr, getUtcOffset, getTimeDifference } from '@/lib/timezone-data';

export const metadata = {
  title: 'Time Difference - Compare Time Zones Between Cities',
  description: 'See time differences between popular city pairs. EST to PST, IST to EST, Beijing to New York, and 500+ more.',
};

// Generate popular city pairs for SEO
function generateCityPairs() {
  const majorCities = CITIES.filter(c => c.population > 2000000);
  const pairs: { from: typeof CITIES[0]; to: typeof CITIES[0]; diff: string; fromAbbr: string; toAbbr: string }[] = [];

  for (let i = 0; i < majorCities.length && pairs.length < 200; i++) {
    for (let j = i + 1; j < majorCities.length && pairs.length < 200; j++) {
      const from = majorCities[i];
      const to = majorCities[j];
      // Skip same timezone
      if (from.timezone === to.timezone) continue;
      pairs.push({
        from,
        to,
        diff: getTimeDifference(from.timezone, to.timezone),
        fromAbbr: getTzAbbr(from.timezone),
        toAbbr: getTzAbbr(to.timezone),
      });
    }
  }
  return pairs;
}

export default function TimeDifferencePage() {
  const pairs = generateCityPairs();

  // Group by region
  const regions = {
    'Americas': pairs.filter(p =>
      (p.from.timezone.startsWith('America/') && p.to.timezone.startsWith('America/'))
    ),
    'Europe': pairs.filter(p =>
      (p.from.timezone.startsWith('Europe/') && p.to.timezone.startsWith('Europe/'))
    ),
    'Asia': pairs.filter(p =>
      (p.from.timezone.startsWith('Asia/') || p.to.timezone.startsWith('Asia/'))
    ),
    'Cross-Region': pairs.filter(p =>
      !(
        (p.from.timezone.startsWith('America/') && p.to.timezone.startsWith('America/')) ||
        (p.from.timezone.startsWith('Europe/') && p.to.timezone.startsWith('Europe/')) ||
        (p.from.timezone.startsWith('Asia/') && p.to.timezone.startsWith('Asia/'))
      )
    ),
  };

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="py-8 md:py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">Time Difference</h1>
            <p className="text-gray-600 mb-8">Browse time differences between popular city pairs. Click any pair to see the full conversion.</p>

            {Object.entries(regions).map(([region, regionPairs]) => (
              regionPairs.length > 0 && (
                <div key={region} className="mb-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">{region}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {regionPairs.map(p => (
                      <Link
                        key={`${cityToSlug(p.from.city)}-to-${cityToSlug(p.to.city)}`}
                        href={`/time-difference/${cityToSlug(p.from.city)}-to-${cityToSlug(p.to.city)}/`}
                        className="card p-4 hover:border-brand-300 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-gray-900 text-sm">{p.from.city} → {p.to.city}</div>
                            <div className="text-xs text-gray-500">{p.fromAbbr} → {p.toAbbr}</div>
                          </div>
                          <span className="text-sm font-bold text-brand-600">{p.diff}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
