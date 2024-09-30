import React, { useEffect, useState } from "react";
import axios from "axios";
import "./countries.css";
import CountryDetails from "./CountryDetails";

function Countries() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null); 

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const searchCountry = (searchText) => {
    setInput(searchText);
  };

  const filteredCountries = data.filter((country) =>
    country.name.common.toLowerCase().startsWith(input.toLowerCase())
  );

  const countryDetails = (country) => {
    setSelectedCountry(country); 
  };

  const goBack = () => {
    setSelectedCountry(null); 
  };

  return (
    <>
      {selectedCountry ? (
        <CountryDetails country={selectedCountry} onBack={goBack} /> 
      ) : (
        <div>
          <div className="country-title">
            <h1>Ölkələr haqqında məlumat</h1>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Ölkə adı axtarın..."
              onChange={(e) => searchCountry(e.target.value)}
            />
          </div>
          <div className="container">
            <div className="row">
              {filteredCountries.map((country, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-12 mt-3">
                  <div className="card country-card">
                    <figure className="figure">
                      <img
                        src={country.flags.png}
                        className="figure-img img-fluid rounded"
                        alt={`Flag of ${country.name.common}`}
                      />
                      <figcaption className="figure-caption text-end">
                        {`Flag of ${country.name.common}`}
                      </figcaption>
                    </figure>
                    <div className="card-body">
                      <h5 className="card-title">{country.name.common}</h5>
                      <p className="card-text">
                        <span>Population: </span>
                        {country.population.toLocaleString()}
                      </p>
                      <p className="card-text region">Region: {country.region}</p>
                      <p className="card-text subregion">
                        Subregion: {country.subregion}
                      </p>
                      <p className="card-text">
                        Capital: {country.capital ? country.capital[0] : "N/A"}
                      </p>
                      <p className="card-text">
                        Area: {country.area.toLocaleString()} km²
                      </p>
                    </div>
                    <div className="card-footer">
                      <a
                        href={country.maps.googleMaps}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View on Google Maps
                      </a>
                      <button
                        className="btn-details"
                        onClick={() => countryDetails(country)} 
                      >
                        Details Country
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Countries;
