import { useState, useEffect } from "react";
import { api } from "../api";
import "./Dashboard.css";

export default function Dashboard() {
  const [names, setNames] = useState("");
  const [leads, setLeads] = useState([]);
  const [filter, setFilter] = useState("");

  const submit = async () => {
    if (!names.trim()) return;
    const list = names.split(",").map(n => n.trim());
    await api.post("/leads/process", { names: list });
    setNames("");
    load();
  };

  const load = async () => {
    const res = await api.get(`/leads${filter ? `?status=${filter}` : ""}`);
    setLeads(res.data);
  };

  useEffect(() => {
    load();
  }, [filter]);

  return (
    <div className="container">
      <h2>Smart Lead Automation</h2>

      <div className="input-section">
        <input
          placeholder="Peter, Aditi, Ravi"
          value={names}
          onChange={e => setNames(e.target.value)}
        />
        <button onClick={submit}>Submit</button>
      </div>

      <div className="filter-section">
        <select onChange={e => setFilter(e.target.value)}>
          <option value="">All</option>
          <option value="Verified">Verified</option>
          <option value="To Check">To Check</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Probability</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {leads.map(l => (
            <tr key={l._id}>
              <td>{l.name}</td>
              <td>{l.country}</td>
              <td>{(l.probability * 100).toFixed(2)}%</td>
              <td
                className={
                  l.status === "Verified"
                    ? "status-verified"
                    : "status-check"
                }
              >
                {l.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
