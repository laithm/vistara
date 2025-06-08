import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-20 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-8 text-center">About Vistara</h1>

      <div className="max-w-3xl text-center space-y-6 text-gray-300 text-lg">
        Vistara is an independent engineering collective founded by <a href="https://www.laithmasri.dev" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-400">Laith Masri</a>.


        <p>
          Our work spans full-stack development, embedded systems, quant infrastructure, and experimental tools that push boundaries.
        </p>

        <p>
          Vistara is not just a brand — it's an evolving system of builders, research, and unapologetically high standards.
        </p>
      </div>

      <Link to="/" className="mt-16 btn btn-white text-black">← Back to Home</Link>
    </div>
  );
}
