import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center space-x-3">
            <img src="/logo.svg" alt="logo" className="h-8 w-auto" />
            <span className="font-semibold text-slate-700">KQ-Inspired</span>
          </a>
        </Link>
        <div className="space-x-4">
          <Link href="/about"><a className="text-slate-600 hover:text-slate-900">About</a></Link>
          <Link href="/contact"><a className="text-slate-600 hover:text-slate-900">Contact</a></Link>
        </div>
      </div>
    </nav>
  );
}