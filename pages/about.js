import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div>
      <Nav />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4 text-slate-600">
          We provide logistics and cargo handling services with a focus on transparency, speed and tailored solutions.
          This site is an original example inspired by a sample design — content and assets are unique.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Our mission</h2>
          <p className="mt-2 text-slate-600">To simplify freight movement using modern digital tools and attentive service.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}