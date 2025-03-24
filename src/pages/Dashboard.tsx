import { useEffect, useState } from "react";
import axios from "axios";

type WeightEntry = {
  ID: string;
  Weight: number;
  Height: number;
  BMI: number;
  TimeStamp: string;
};

const Dashboard = () => {
  const [data, setData] = useState<WeightEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/api/user/all")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        alert("Error fetching data");
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Data</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Weight (g)</th>
              <th className="p-2 border">Height (cm)</th>
              <th className="p-2 border">BMI</th>
              <th className="p-2 border">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index}>
                <td className="p-2 border">{entry.ID}</td>
                <td className="p-2 border">{entry.Weight}</td>
                <td className="p-2 border">{entry.Height}</td>
                <td className="p-2 border">{entry.BMI.toFixed(2)}</td>
                <td className="p-2 border">{new Date(entry.TimeStamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
