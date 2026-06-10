import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TimeConverter from '@/components/TimeConverter';

export const metadata = {
  title: 'Time Zone Converter - Convert Time Between Cities Instantly',
  description: 'Convert time between any cities instantly. Supports 400+ cities, automatic DST detection. Free, no sign-up required.',
};

export default function TimeConverterPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="py-8 md:py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">Time Zone Converter</h1>
            <p className="text-gray-600 mb-8">Select two cities and a time to see the instant conversion. Supports 400+ cities worldwide.</p>
            <TimeConverter />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
