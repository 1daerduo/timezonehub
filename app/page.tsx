import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-brand-50 via-white to-blue-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              100% Free · 400+ Cities · No Sign-up
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
              Free Online <span className="text-brand-600">Time Zone Converter</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Convert time between any cities instantly. World clock, meeting planner, and time difference calculator. Built for remote teams and global professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/time-converter/" className="btn-primary text-lg !px-8 !py-4">Convert Time Now</Link>
              <Link href="/meeting-planner/" className="btn-secondary text-lg !px-8 !py-4">Plan a Meeting</Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center mb-12">Why Choose TimezoneHub?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-6">
                <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Time Conversion</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Convert time between any two cities instantly. 400+ cities with automatic DST detection. No calculations needed.</p>
              </div>
              <div className="card p-6">
                <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Meeting Planner</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Find the best meeting time across multiple time zones. Color-coded heatmap shows working hours vs sleeping hours for each participant.</p>
              </div>
              <div className="card p-6">
                <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" /></svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">World Clock</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Live world clock for 400+ cities. Add your favorite cities, see real-time updates every second. Day/night indicator included.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tools grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center mb-12">Time Zone Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { href: '/time-converter/', title: 'Time Converter', desc: 'Convert time between any two cities instantly', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                { href: '/world-clock/', title: 'World Clock', desc: 'Live clock for 400+ cities around the world', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064' },
                { href: '/meeting-planner/', title: 'Meeting Planner', desc: 'Find the best time for your global team meeting', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
                { href: '/time-difference/', title: 'Time Difference', desc: 'See time differences between popular city pairs', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
              ].map(tool => (
                <Link key={tool.href} href={tool.href} className="card p-6 hover:border-brand-300 transition-colors group">
                  <div className="w-10 h-10 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center mb-3 group-hover:bg-brand-100 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={tool.icon} /></svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{tool.title}</h3>
                  <p className="text-sm text-gray-600">{tool.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-brand-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Never Miss a Meeting Across Time Zones</h2>
            <p className="text-lg text-brand-100 mb-8">Free, instant, no sign-up. Convert time, plan meetings, check world clock.</p>
            <Link href="/time-converter/" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-700 font-bold rounded-lg hover:bg-brand-50 transition-colors text-lg shadow-lg">
              Convert Time Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
