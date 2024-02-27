console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log("LUke Skywalker: ", data.results[0]);
    console.log("Mass of Biggs :", data.results[8].mass);
    console.log("Eyecolor of R2-D2: ", data.results[2].eye_color);
    return data;
  } catch (error) {
    console.error(error);
  }
}
fetchData();
