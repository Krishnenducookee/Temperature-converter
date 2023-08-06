import { useState } from 'react';
import './App.css';
import Page from './Page';



function App({label,onChange,value}) {
  const [temp, settemp] = useState(0);
  const [updatetemp, setupdatetemp] = useState(32)

 const  changef = (temp) => {
     setupdatetemp((temp * 9/5) + 32)
    console.log(temp);

  };

  const changec = updatetemp => {
    settemp((updatetemp -32) * 5/9)
    console.log(temp);

  };

  return (
    <div className='bg-slate-800' id='full'>
      <h3>Temperature Converter</h3>
      <center>
        <div id="field_bg">
     <div id='celsius'>
      <Page label="Celsius" value={temp} onChange={(e)=>{settemp(e.target.value);
      changef(e.target.value)}} />
     </div>
     <div id='farenheit'>
      <Page label="Farenheit" value={updatetemp} onChange={(e)=>{setupdatetemp(e.target.value);
      changec(e.target.value)}}  />
     </div>
     </div>
     </center>
    </div>
  );
};

export default App;
