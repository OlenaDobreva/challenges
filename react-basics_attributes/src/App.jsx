import "./App.css";

export default function App() {
  return <ArticleWithMyText />;
}

export function ArticleWithMyText() {
  return (
    <article className="article">
      <h2 className="article__title">Polizei Berlin</h2>
      <label htmlFor="text">Where can I find the Police Webpage?</label>
      <input id="text" />
      <a
        className="article__link"
        href="https://r.search.yahoo.com/_ylt=AwrIebw75.Vl8i0uG1L04olQ;_ylu=Y29sbwNpcjIEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1709594556/RO=10/RU=https%3a%2f%2fwww.polizei.de%2f/RK=2/RS=RSXeXjt9zbbh4Z6Fs79W1hiHovU-"
      >
        Click here!
      </a>
    </article>
  );
}
