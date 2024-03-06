import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default function Main() {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState("");
  const [activeTab, setActiveTab] = useState("all"); // initial active tab

  const handleInputChange = (event) => {
    setNewEntry(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEntries([...entries, newEntry]);
    setNewEntry("");
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // filtering all entries by active tab
  const filteredEntries = activeTab === "all" ? entries : [];

  return (
    <div>
      <h2>Add entries</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newEntry}
          onChange={handleInputChange}
          placeholder="You can put your enry here"
        />
        <button type="submit">add new entry</button>
      </form>

      <h2>Entries</h2>
      <div>
        <div className="tab-bar">
          <button
            className={activeTab === "all" ? "active" : ""}
            onClick={() => handleTabChange("all")}
          >
            All
          </button>
          <button
            className={activeTab === "favorites" ? "active" : ""}
            onClick={() => handleTabChange("favorites")}
          >
            Favourite
          </button>
          {/* Here new tabs can be added */}
        </div>
        <ul>
          {filteredEntries.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
