import React from 'react';

const CountryCard = ({ country, onFavorite, isFavorite }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    width: '250px',
    textAlign: 'center',
    backgroundColor: '#fff',
    margin: '10px',
    padding: '10px',
    transition: 'transform 0.3s ease-in-out',
  };

  const imgStyle = {
    width: '100%',
    height: 'auto',
    borderBottom: '1px solid #ddd',
  };

  const h2Style = {
    fontSize: '1.5em',
    margin: '10px 0',
    color: '#333',
  };

  const pStyle = {
    fontSize: '1em',
    margin: '5px 0',
    color: '#666',
  };

  const buttonStyle = {
    backgroundColor: isFavorite ? '#f44' : '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '1em',
    transition: 'background-color 0.3s ease',
    marginTop: '10px',
  };

  return (
    <div style={cardStyle}>
      <img
        src={`https://flagsapi.com/${country.cca2}/shiny/64.png`}
        alt={`${country.name.common} flag`}
        style={imgStyle}
      />
      <h2 style={h2Style}>{country.name.common}</h2>
      <p style={pStyle}>Capital: {country.capital[0]}</p>
      <p style={pStyle}>Currency: {Object.keys(country.currencies)[0]}</p>
      <p style={pStyle}>
        Languages: {Object.values(country.languages).join(', ')}
      </p>
      <button onClick={onFavorite} style={buttonStyle}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default CountryCard;
