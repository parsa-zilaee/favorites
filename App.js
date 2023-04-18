import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar';
import FavoriteList from './components/FavoriteList';
import TutorCard from './components/TutorCard';
import './App.css';

const App = () => {
  const [tutors, setTutors] = useState([]);
  const [favoriteTutors, setFavoriteTutors] = useState([]);

  useEffect(() => {
    fetchTutors();
  }, []);

  const fetchTutors = () => {
    // Mock API response for testing purposes
    const mockApiResponse = [
      { id: 1, name: 'Tutor 1', subject: 'Math', isFavorite: false },
      { id: 2, name: 'Tutor 2', subject: 'Physics', isFavorite: false },
      { id: 3, name: 'Tutor 3', subject: 'Chemistry', isFavorite: false },
      { id: 4, name: 'Tutor 4', subject: 'Biology', isFavorite: false },
    ];
  
    setTutors(mockApiResponse);
  };

  const handleFavorite = (tutorId) => {
    const updatedTutors = tutors.map((tutor) => {
      if (tutor.id === tutorId) {
        tutor.isFavorite = !tutor.isFavorite;
        return tutor;
      }
      return tutor;
    });
    setTutors(updatedTutors);

    const updatedFavorites = updatedTutors.filter((tutor) => tutor.isFavorite);
    setFavoriteTutors(updatedFavorites);
  };

  return (
    <div className="App">
      <NavBar />
      <div className="tutors-container">
        {tutors.map((tutor) => (
          <TutorCard key={tutor.id} tutor={tutor} handleFavorite={handleFavorite} />
        ))}
      </div>
      <FavoriteList favoriteTutors={favoriteTutors} handleFavorite={handleFavorite} />
    </div>
  );
};

export default App;