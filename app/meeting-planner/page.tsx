import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MeetingPlanner from '@/components/MeetingPlanner';

export const metadata = {
  title: 'Meeting Planner - Find Best Time Across Time Zones',
  description: 'Plan meetings across time zones. Find the best time that works for everyone. Color-coded heatmap for working hours.',
};

export default function MeetingPlannerPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="py-8 md:py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">Meeting Planner</h1>
            <p className="text-gray-600 mb-8">Find the best meeting time for your global team. Add cities and see a color-coded heatmap of working hours.</p>
            <MeetingPlanner />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
