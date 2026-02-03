import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState('');

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validate() {
    if (!form.name.trim()) return "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Valid email is required";
    if (!form.message.trim()) return "Message can't be empty";
    return null;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const v = validate();
    if (v) {
      setErr(v);
      return;
    }
    // Client-only placeholder: in real use, swap with serverless endpoint
    setErr('');
    setSent(true);
  }

  return (
    <div>
      <Nav />
      <main className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold">Contact</h1>
        <p className="mt-2 text-slate-600">Send a message and we'll get back to you.</p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Name</label>
            <input name="name" value={form.name} onChange={handleChange} className="mt-1 w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input name="email" value={form.email} onChange={handleChange} className="mt-1 w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} className="mt-1 w-full border rounded px-3 py-2" rows="5" />
          </div>

          {err && <div className="text-red-600">{err}</div>}
          {sent && <div className="text-green-600">Thanks — your message has been recorded (demo only).</div>}

          <div>
            <button type="submit" className="bg-brand-500 text-white px-5 py-2 rounded">Send message</button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}