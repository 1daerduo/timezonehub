import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WorldClock from '@/components/WorldClock';

export const metadata = {
  title: 'World Clock - Live Time for 400+ Cities',
  description: 'See current time in 400+ cities around the world. Live updating, day/night indicator, add your favorites.',
};

export default function WorldClockPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="py-8 md:py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">World Clock</h1>
            <p className="text-gray-600 mb-8">Live clock for 400+ cities. Add your favorites and see real-time updates.</p>
            <WorldClock />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
