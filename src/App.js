import { useState } from "react";
import Page from "./Page";

function App() {
  const [Temperature, setTemperature] = useState({});
  const labels = [
    {
      label: "Celsius",
      onChange: (newvalue) => {
        changeTemerature({ newvalue, iscelsius: true });
      },
    },
    {
      label: "Farenheit",
      onChange: (newvalue) => {
        changeTemerature({ newvalue, iscelsius: false });
      },
    },
  ];
  const changeTemerature = ({ newvalue, iscelsius }) => {
    setTemperature(
      iscelsius ? (newvalue * 9) / 5 + 32 : ((newvalue - 32) * 5) / 9
    );
  };

  return (
    <div className="bg-slate-800 text-white h-screen ">
      Temperature
      <div className="flex flex-row mx-96 mt-10 h-40 border-2 border-purple-800 p-5">
        <div>
          {labels.map((data, key) => (
            <Page
              label={data.label}
              value={Temperature}
              onChange={data.onChange}
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
