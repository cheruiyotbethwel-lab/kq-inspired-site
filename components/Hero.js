export default function Hero({ title = "Fast cargo handling. Modern logistics.", cta = "Get started" }) {
  return (
    <header className="bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
          {title}
        </h1>
        <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
          A simple, modern logistics-inspired landing. Scales across devices and focuses on conversion.
        </p>
        <div className="mt-8 flex justify-center">
          <a href="/contact" className="inline-block bg-brand-500 text-white px-6 py-3 rounded-md shadow hover:bg-blue-600">
            {cta}
          </a>
        </div>
      </div>
    </header>
  );
}