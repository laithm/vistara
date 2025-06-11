import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="flex flex-col items-center px-6 py-20 min-h-screen text-white bg-black">
      <h1 className="mb-8 text-5xl font-bold text-center">About Vistara</h1>

      <div className="space-y-6 max-w-3xl text-lg text-center text-white">
        <p>
          Vistara is an independent engineering collective founded by{" "}
          <a
            href="https://www.laithmasri.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition hover:text-yellow-400"
          >
            Laith Masri
          </a>.
        </p>

        <p>
          Our work spans full-stack development, embedded systems, quant infrastructure, and experimental tools that push boundaries.
        </p>

        <p>
          Vistara is not just a brand — it's an evolving system of builders, research, and unapologetically high standards.
        </p>
      </div>

      <Link
        to="/"
        className="px-6 py-3 mt-16 font-bold text-black bg-white rounded-lg transition hover:scale-105 hover:opacity-90"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
