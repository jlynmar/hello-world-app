'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
<main className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12 font-sans">
      <h1 className="text-4xl font-bold mb-4">Hi, I&apos;m Jeralyn 👋</h1>
      <p className="mb-4">Welcome to my portfolio! Check out my work and feel free to reach out.</p>
      <Link href="/about" className="text-blue-600 underline">About Me</Link>


      <hr className="my-6" />

      <h2 className="text-2xl font-semibold mb-2">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input type="text" placeholder="Your name" required className="w-full p-2 border rounded" />
        <input type="email" placeholder="Your email" required className="w-full p-2 border rounded" />
        <textarea placeholder="Message" required className="w-full p-2 border rounded"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
      </form>

      {submitted && <p className="mt-4 text-green-600">Thanks! I&apos;ll get back to you soon.</p>}

      {/*  */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
        <div className="bg-white hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden border border-gray-200">
          {/* CARD 1 */}
          <div className="bg-white hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden border border-gray-200">
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Sustainable Planet Game</h3>
              <p className="text-gray-600 mb-2">A game built to teach users about drought resilience and resource management.</p>
              <img src="/garden game.jpg" alt="game Project" className="w-full h-40 object-cover" />
              <a href="/projects" className="text-blue-600 underline">View Project</a>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden border border-gray-200">

            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Data Dashboard</h3>
              <p className="text-gray-600 mb-2">Using Pyhton to visualize marketing performance metrics.</p>
              <img src="/data ss.jpg" alt="data Project" className="w-full h-40 object-cover" />
              <a href="/projects" className="text-blue-600 underline">View Project</a>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden border border-gray-200">

            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Website UX Redesign</h3>
              <p className="text-gray-600 mb-2">Heuristic evaluation and redesign of a local restaurant’s online ordering flow.</p>
              <img src="/website ss.jpg" alt="website Project" className="w-full h-40 object-cover" />
              <a href="/projects" className="text-blue-600 underline">View Project</a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
