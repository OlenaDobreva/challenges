import Card from "./components/Card";
import "./App.css";

export default function App() {
  const fruits = [
    { id: 0, name: "🍌 banana", color: "yellow" },
    { id: 1, name: "🍎 apple", color: "red" },
    { id: 2, name: "🍍 pineapple", color: "orange" },
    { id: 3, name: "🥝 kiwi", color: "green" },
    { id: 4, name: "🍇 grape", color: "violet" },
  ];

  return (
    <ul>
      {fruits.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}
