import { Link } from "react-router-dom";

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-20 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-8 text-center">Frequently Asked Questions</h1>

      <div className="max-w-3xl w-full space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">What is Vistara?</h2>
          <p className="text-gray-300">
            Vistara is an engineering and research collective focused on embedded systems,
            quant finance, and scalable infrastructure.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Who’s behind it?</h2>
          <p className="text-gray-300">
              Vistara is an independent engineering collective founded by <a href="https://www.laithmasri.dev" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-400">Laith Masri</a>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">How can I work with Vistara?</h2>
          <p className="text-gray-300">
            Use the inquiry form (coming soon) or reach out directly via the dashboard or contact channels.
          </p>
        </div>
      </div>

      <Link to="/" className="mt-16 btn btn-white text-black">← Back to Home</Link>
    </div>
  );
}
