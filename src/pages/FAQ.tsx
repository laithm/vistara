import { Link } from "react-router-dom";

export default function FAQ() {
  return (
    <div className="flex flex-col items-center px-6 py-20 min-h-screen text-white bg-black">
      <h1 className="mb-8 text-5xl font-bold text-center">Frequently Asked Questions</h1>

      <div className="space-y-8 w-full max-w-3xl text-white">
        <div>
          <h2 className="mb-2 text-xl font-semibold">What is Vistara?</h2>
          <p>
            Vistara is an engineering and research collective focused on embedded systems,
            quant finance, and scalable infrastructure.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold">Who’s behind it?</h2>
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
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold">How can I work with Vistara?</h2>
          <p>
            Use the inquiry form (coming soon) or reach out directly via the dashboard or contact channels.
          </p>
        </div>
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
