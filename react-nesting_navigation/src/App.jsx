import "./App.css";
import Header from "./components/Header";
import avatar from "./assets/avatar.jpg";
import logo from "./assets/logo.jpg";
import { Children } from "react";
import Navigation from "./components/Navigation";
import Links from "./components/Links";

export default function App() {
  return (
    <>
      <Navigation>
        <Links href="#home">Home</Links>
        <Links href="#about">About</Links>
        <Links href="#impressum">Impressum</Links>
      </Navigation>
      <Header />
      <Links />

      <button
        type="button"
        onClick={() => console.log("I could toggle a profile!")}
        aria-label="toggle profile"
      >
        <img className="round-image" src={avatar} alt="avatar" />
      </button>
      <main>content goes here…</main>
    </>
  );
}
