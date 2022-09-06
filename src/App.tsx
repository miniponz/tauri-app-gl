import React, { useEffect, useState } from 'react';
import './App.css';
import Globe from 'react-globe.gl';
import countries_data from './countries.json';

const World = () => {
  const [countries, setCountries] = useState<{ features: any[] } | null>(null);

  useEffect(() => {
    // load data
    // fetch('./countries.json').then(res => res.json()).then((data) => setCountries(data));
    setCountries(countries_data);
    console.log('loaded countries', countries)
  }, [countries]);

  return countries && <Globe
    width={500}
    height={500}
    hexPolygonsData={countries.features}
    hexPolygonResolution={3}
    hexPolygonMargin={0.3}
    hexPolygonColor={() => `#${Math.round(Math.random() * Math.pow(2, 24)).toString(16).padStart(6, '0')}`}
    // @ts-ignore no-implicit-any
    hexPolygonLabel={(({ properties: d }) => `
      <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
      Population: <i>${d.POP_EST}</i>
    `) as unknown as (obj: object) => string}
  />;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <div>
        <World></World>
      </div>
    </div>
  );
}

export default App;
