import "./App.css";

export default function App() {
  return (
    <main>
      <Button>Click me!</Button>
      <Button>Eat me!</Button>
      <Button>Drink me!</Button>
      <Button>Bite me!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
