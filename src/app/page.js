import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Jeralyn 👋</h1>
      <p className="mb-4">Welcome to my portfolio! Check out my work and feel free to reach out.</p>

      <Link href="/projects" className="text-blue-600 underline">View My Projects</Link>

      <hr className="my-6" />

      <h2 className="text-2xl font-semibold mb-2">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input type="text" placeholder="Your name" required className="w-full p-2 border rounded" />
        <input type="email" placeholder="Your email" required className="w-full p-2 border rounded" />
        <textarea placeholder="Message" required className="w-full p-2 border rounded"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
      </form>

      {submitted && <p className="mt-4 text-green-600">Thanks! I’ll get back to you soon.</p>}
    </main>
  );
}
