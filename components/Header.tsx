import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900 group-hover:text-brand-600 transition-colors">Timezone<span className="text-brand-600">Hub</span></span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/time-converter/" className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors">Time Converter</Link>
            <Link href="/world-clock/" className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors">World Clock</Link>
            <Link href="/meeting-planner/" className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors">Meeting Planner</Link>
            <Link href="/time-difference/" className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors">Time Difference</Link>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Link href="/time-converter/" className="btn-primary text-sm !px-4 !py-2">Convert Time Now</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
