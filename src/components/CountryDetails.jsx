import React from "react";
import "./countryDetails.css";

function CountryDetails({ country, onBack }) {
  return (
    <div className="country-details-container">
      <button className="back-button" onClick={onBack}>
        &larr; Geri
      </button>
      <h2 className="country-name">{country.name.common}</h2>
      <div className="country-info">
        <img
          src={country.flags.png}
          alt={`Flag of ${country.name.common}`}
          className="country-flag"
        />
        <img
          src={country.coatOfArms.png}
          alt={`Coat of Arms of ${country.name.common}`}
          className="coat-of-arms"
        />
        <div className="details">
          <p><strong>Official Name:</strong> {country.name.official}</p>
          <p><strong>Native Name:</strong> {country.name.nativeName?.ita?.common}</p>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Subregion:</strong> {country.subregion}</p>
          <p><strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}</p>
          <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
          <p><strong>Currency:</strong> {Object.values(country.currencies)[0].name} ({Object.values(country.currencies)[0].symbol})</p>
          <p><strong>Languages:</strong> {Object.values(country.languages).join(", ")}</p>
          <p><strong>Borders:</strong> {country.borders ? country.borders.join(", ") : "None"}</p>
          <p><strong>Timezones:</strong> {country.timezones.join(", ")}</p>
          <p><strong>Start of the Week:</strong> {country.startOfWeek}</p>
        </div>
      </div>
      <div className="maps-links">
        <a
          href={country.maps.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          View on Google Maps
        </a>
        <a
          href={country.maps.openStreetMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          View on OpenStreetMap
        </a>
      </div>
    </div>
  );
}

export default CountryDetails;
