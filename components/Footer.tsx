import Link from 'next/link';
import { CITIES, cityToSlug } from '@/lib/timezone-data';

const popularPairs = [
  ['New York', 'London'], ['Los Angeles', 'Tokyo'], ['Beijing', 'New York'],
  ['London', 'Dubai'], ['Sydney', 'London'], ['Mumbai', 'New York'],
  ['Singapore', 'San Francisco'], ['Paris', 'Tokyo'], ['Chicago', 'London'],
  ['Hong Kong', 'New York'], ['Seoul', 'London'], ['Dubai', 'Mumbai'],
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">TimezoneHub</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">Free time zone converter and world clock. Convert time between any cities, plan meetings across time zones.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Tools</h3>
            <ul className="space-y-2">
              <li><Link href="/time-converter/" className="text-sm hover:text-white transition-colors">Time Converter</Link></li>
              <li><Link href="/world-clock/" className="text-sm hover:text-white transition-colors">World Clock</Link></li>
              <li><Link href="/meeting-planner/" className="text-sm hover:text-white transition-colors">Meeting Planner</Link></li>
              <li><Link href="/time-difference/" className="text-sm hover:text-white transition-colors">Time Difference</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Popular Conversions</h3>
            <ul className="space-y-2">
              {popularPairs.slice(0, 6).map(([f, t]) => (
                <li key={`${f}-${t}`}>
                  <Link href={`/time-difference/${cityToSlug(f)}-to-${cityToSlug(t)}/`} className="text-sm hover:text-white transition-colors">
                    {f} to {t} Time
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Info</h3>
            <ul className="space-y-2">
              <li><Link href="/about/" className="text-sm hover:text-white transition-colors">About</Link></li>
              <li><Link href="/privacy/" className="text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms/" className="text-sm hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">&copy; 2026 TimezoneHub. All rights reserved.</p>
          <p className="text-xs text-gray-500">Free time zone tools. No sign-up required.</p>
        </div>
      </div>
    </footer>
  );
}
