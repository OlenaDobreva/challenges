import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";
import { LightButton } from "@/components/Light/Light.styled";

const initialLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porsch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);
  console.log("app", lights);

  function handleToggle(lightId) {
    const updatedLightArray = lights.map((light) =>
      light.id === lightId ? { ...light, isOn: !light.isOn } : light
    );
    setLights(updatedLightArray);
  }

  function handleToggleAllOff() {
    const updatedLightArray = lights.map((light) => {
      return { ...light, isOn: false };
    });
    setLights(updatedLightArray);
  }

  function handleToggleAllOn() {
    const updatedLightArray = lights.map((light) => {
      return { ...light, isOn: true };
    });
    setLights(updatedLightArray);
  }

  const countOfLightsThatAreOn = lights.filter((light) => light.isOn).length;
  const isDimmed =
    lights.filter((light) => light.isOn === false).length === lights.length;

  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        toggleLight={handleToggle}
        countOfLightsThatAreOn={countOfLightsThatAreOn}
        handleToggleAllOff={handleToggleAllOff}
        handleToggleAllOn={handleToggleAllOn}
      />
    </Layout>
  );
}
