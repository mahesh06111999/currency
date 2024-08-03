import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from './contexts/AuthContext';
import FavoriteProvider from './contexts/FavoriteContext';
import SearchProvider from './contexts/SearchContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import FavoritePage from './pages/FavoritePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PrivateRoute from './components/PrivateRoute';
import ErrorBoundry from './components/ErrorBoundry';

const App = () => {
  return (
    <ErrorBoundry>
      <Router>
        <AuthProvider>
          <FavoriteProvider>
            <SearchProvider>
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route
                  path="/favorites"
                  element={
                    <PrivateRoute>
                      <FavoritePage />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </SearchProvider>
          </FavoriteProvider>
        </AuthProvider>
      </Router>
    </ErrorBoundry>
  );
};

export default App;
