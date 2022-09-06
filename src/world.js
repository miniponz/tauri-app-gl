import React, { useEffect, useState } from 'react';
import Globe from 'react-globe.gl';
import countries_data from './countries.json';

export const World = () => {
  const [countries, setCountries] = useState([]);

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
    hexPolygonLabel={({ properties: d }) => `
      <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
      Population: <i>${d.POP_EST}</i>
    `}
  />;
};