export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-600">
        <div className="flex justify-between">
          <div>© {new Date().getFullYear()} KQ-Inspired. All rights reserved.</div>
          <div>Built with ❤️ • Inspired design</div>
        </div>
      </div>
    </footer>
  );
}