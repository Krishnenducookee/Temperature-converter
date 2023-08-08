import { useState } from "react";
import Page from "./Page";

function App({ label, onChange, value, name }) {
  const [Temperature, setTemperature] = useState(0);
  // const [farenheit, setfarenheit] = useState(32);
  const labels = [
    { name: "NewCelsius", label: "Celsius" },
    { name: "NewFarenheit", label: "Farenheit" },
  ];
  const changeTemerature = (temperature,name) => {
    console.log(temperature);
    if (name == "NewCelsius") {
      // setTemperature(temperature);
      setTemperature((temperature * 9) / 5 + 32);
      console.log(temperature);
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
          {labels.map((data) => (
            <Page
              label={data.label}
              value={Temperature}
              name={data.name}
              onChange={(e) => {
                changeTemerature(e.target.value,e.target.name);
              }}
            />
          ))}
        </div>
        {/* <div className="pl-5 space-y-3">
          <Page
            label="faren"
            // name={data.name}
            value={farenheit}
            onChange={(e) => {
              changecelsius(e.target.value);
            }}
          />
        </div> */}
      </div>
      <div className="mx-96 mt-10">
        {Temperature} <sup>o</sup> C = {Temperature}
        <sup>o</sup>F
      </div>
    </div>
  );
}

export default App;
