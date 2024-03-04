import "./App.css";

export default function App() {
  return <HelloWorldArticle />;
}

export function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World!</h1>
      <p>Today is raining!</p>
    </article>
  );
}
