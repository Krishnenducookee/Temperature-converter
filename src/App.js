import { useState } from "react";
import Page from "./Page";

function App({ label, onChange, value, name }) {
  const [Temperature, setTemperature] = useState({
    Celsius: 0,
    Farenheit: 32,
  });
  const labels = [
    { name: "Celsius", label: "Celsius" },
    { name: "Farenheit", label: "Farenheit" },
  ];
  const changeTemerature = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTemperature({ ...Temperature, [name]: value });
    if (name) {
      setTemperature((Temperature * 9) / 5 + 32);
    } else setTemperature((Temperature * 9) / 5 + 32);
  };
  // const changecelsius = (Farenheit) => {
  //   console.log(Farenheit);
  //   setfarenheit(Farenheit);
  //   setTemperature(((Farenheit - 32) * 5) / 9);
  //   console.log(Farenheit);
  // };

  return (
    <div className="bg-slate-800 text-white h-screen ">
      Temperature
      <div className="flex flex-row mx-96 mt-10 h-40 border-2 border-purple-800 p-5">
        <div>
          {labels.map((data, key) => (
            <Page
              label={data.label}
              value={Temperature}
              name={data.name}
              onChange={changeTemerature}
            />
          ))}
        </div>
      </div>
      <div className="mx-96 mt-10">
        {Temperature} <sup>o</sup> C = {Temperature}
        <sup>o</sup>F
      </div>
    </div>
  );
}

export default App;
