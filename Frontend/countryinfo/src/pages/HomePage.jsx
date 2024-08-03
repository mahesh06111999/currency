import React, { useContext, useState, useEffect, useRef } from 'react';
import { getCountryByCurrencyCode } from '../api/countryApi';
import { AuthContext } from '../contexts/AuthContext';
import { SearchContext } from '../contexts/SearchContext';
import { addFavorite } from '../api/favoriteApi';
import CountryCard from '../components/CountryCard';

const HomePage = () => {
  const { auth } = useContext(AuthContext);
  const { searchHistory, setSearchHistory } = useContext(SearchContext);
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search.trim()) {
      try {
        const { data } = await getCountryByCurrencyCode(search);
        setCountries(data);
        setSearchHistory(
          [search, ...searchHistory.filter((item) => item !== search)].slice(
            0,
            5
          )
        );
      } catch (err) {
        console.error('Error fetching country data:', err.message);
      }
    }
  };

  const handleFavorite = async (country) => {
    if (auth.token) {
      try {
        await addFavorite(country, auth.token);
      } catch (err) {
        console.error('Error adding favorite:', err.message);
      }
    } else {
      alert('Please log in to add favorites.');
    }
  };

  const pageStyle = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const formStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '1em',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginRight: '10px',
    outline: 'none',
    boxSizing: 'border-box',
    width: '400px',
  };

  const buttonStyle = {
    padding: '10px 15px',
    fontSize: '1em',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: 'green',
    color: '#fff',
    width: '100px',
  };

  const historyStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '20px',
  };

  const historyButtonStyle = {
    padding: '8px 12px',
    fontSize: '0.9em',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: 'green',
    color: 'white',
    cursor: 'pointer',
  };

  const countryListStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  };

  return (
    <div style={pageStyle}>
      <form onSubmit={handleSearch} style={formStyle}>
        <input
          type="text"
          placeholder="Enter currency code"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          ref={searchRef}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Search
        </button>
      </form>
      {/* <div style={historyStyle}>
        {searchHistory.map((item, index) => (
          <button
            key={index}
            onClick={() => setSearch(item)}
            style={historyButtonStyle}
          >
            {item}
          </button>
        ))}
      </div> */}
      <div style={countryListStyle}>
        {countries.map((country) => (
          <CountryCard
            key={country.cca3}
            country={country}
            onFavorite={() => handleFavorite(country)}
            isFavorite={false}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
