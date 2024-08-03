import React, { useContext, useEffect } from 'react';
import { FavoriteContext } from '../contexts/FavoriteContext';
import { AuthContext } from '../contexts/AuthContext';
import { getFavorites, removeFavorite } from '../api/favoriteApi';
import CountryCard from '../components/CountryCard';

const FavoritesPage = () => {
  const { favorites, setFavorites } = useContext(FavoriteContext);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const { data } = await getFavorites(auth.token);
        setFavorites(data);
      } catch (err) {
        console.error('Error fetching favorites:', err.message);
      }
    };

    fetchFavorites();
  }, [auth.token, setFavorites]);

  const handleRemoveFavorite = async (id) => {
    if (auth.token) {
      try {
        await removeFavorite(id, auth.token);
        // Update local state to reflect the removal
        setFavorites(favorites.filter((favorite) => favorite._id !== id));
      } catch (err) {
        console.error('Error removing favorite:', err.message);
      }
    } else {
      alert('Please log in to remove favorites.');
    }
  };

  return (
    <div className="favorites-page">
      <h1>Your Favorites</h1>
      <div className="country-list">
        {favorites.map((favorite) => (
          <CountryCard
            key={favorite._id}
            country={favorite.country}
            onFavorite={() => handleRemoveFavorite(favorite._id)}
            isFavorite={true}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
