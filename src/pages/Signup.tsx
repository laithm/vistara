import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [form, setForm] = useState({
    USER_ID: "",
    Password: "",
    Weight: "",
    Height: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://vistara-g6d8.onrender.com/api/user/register", {
        USER_ID: form.USER_ID,
        Password: form.Password,
        Weight: parseFloat(form.Weight),
        Height: parseFloat(form.Height),
      });

      alert("Signup successful!");
      console.log(response.data);
    } catch (err) {
      alert("Signup failed.");
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">L'Équilibre Signup</h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">User ID</label>
          <input
            type="text"
            name="USER_ID"
            value={form.USER_ID}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            name="Password"
            value={form.Password}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Weight (g)</label>
          <input
            type="number"
            name="Weight"
            value={form.Weight}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">Height (cm)</label>
          <input
            type="number"
            name="Height"
            value={form.Height}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 py-2 px-4 rounded font-semibold"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
