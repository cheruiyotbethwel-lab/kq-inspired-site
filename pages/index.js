import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Feature = ({ title, desc }) => (
  <div className="p-6 border rounded-lg bg-white">
    <h3 className="font-semibold text-lg text-slate-800">{title}</h3>
    <p className="mt-2 text-slate-600">{desc}</p>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow">
        <Hero />
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-slate-900">Our Services</h2>
          <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-3">
            <Feature title="Freight Forwarding" desc="Optimized routes and reliable scheduling for your shipments." />
            <Feature title="Customs Clearance" desc="Documentation and compliance handled smoothly." />
            <Feature title="Storage & Warehousing" desc="Secure facilities with flexible plans." />
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <h3 className="text-xl font-semibold text-slate-900">What clients say</h3>
            <div className="mt-6 space-y-4">
              <blockquote className="p-6 bg-white rounded-lg border">
                <p className="text-slate-700">"Dependable and professional — they simplified our supply chain."</p>
                <cite className="block mt-2 text-sm text-slate-500">— Logistics Manager</cite>
              </blockquote>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}