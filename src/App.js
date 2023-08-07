import { useState } from "react";
import Page from "./Page";

function App({ label, onChange, value }) {
  const [celsius, setcelsius] = useState(0);
  const [farenheit, setfarenheit] = useState(32);

  const changefarenheit = (celsius) => {
    setcelsius(celsius);
    setfarenheit((celsius * 9) / 5 + 32);
  };

  const changecelsius = (farenheit) => {
    setfarenheit(farenheit);
    setcelsius(((farenheit - 32) * 5) / 9);
  };

  return (
    <div className="bg-slate-800 text-white h-screen ">
      Temperature
      <div className="mx-96 mt-10 flex space-x-4 border-2 border-purple-800 h-20">
        <div>
          <Page
            label="Celsius"
            value={celsius}
            onChange={(e) => {
              changefarenheit(e.target.value);
            }}
          />
        </div>
        <div className="pl-5 space-y-3">
          <Page
            label="Farenheit"
            value={farenheit}
            onChange={(e) => {
              changecelsius(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="mx-96 mt-10">
        {celsius} <sup>o</sup> C = {farenheit}
        <sup>o</sup>F
      </div>
    </div>
  );
}

export default App;
