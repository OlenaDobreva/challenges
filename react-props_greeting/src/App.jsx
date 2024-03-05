import "./App.css";

export default function App() {
  return <Greeting name="Laya" />;
}
function Greeting({ name }) {
  const coaches = [
    "Jan",
    "Sven",
    "Klaus",
    "Marcell",
    "Gimena",
    "Laya",
    "Yorick",
  ];
  return <h1>Hello, {coaches.includes(name) ? "Coach! " : name}</h1>;
}
