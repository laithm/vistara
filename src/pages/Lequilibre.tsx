import { Link } from "react-router-dom";

export default function Lequilibre() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center px-6">
      <h1 className="text-4xl font-bold">L'Équilibre</h1>
      <p className="text-lg mt-4">Welcome to L'Équilibre</p>

      <div className="flex gap-6 mt-6">
        <Link to="/lequilibre/login" className="btn btn-blue">
          Log In
        </Link>
        <Link to="/lequilibre/signup" className="btn btn-green">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
