import "./App.css";

export default function App() {
  return <Sum valueA={112} valueB={234} />;
}
function Sum({ valueA, valueB }) {
  const result = valueA + valueB;
  return (
    <>
      {valueA} + {valueB} = {result}
    </>
  );
}
