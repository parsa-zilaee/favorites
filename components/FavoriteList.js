import React from 'react';
import TutorCard from './TutorCard';

const FavoriteList = ({ favoriteTutors, handleFavorite }) => {
  return (
    <div className="favorite-list">
      <h2>Your Favorites</h2>
      <div className="favorites-container">
        {favoriteTutors.map(tutor => (
          <TutorCard key={tutor.id} tutor={tutor} handleFavorite={handleFavorite} />
        ))}
      </div>
    </div>
  );
};

  export default FavoriteList;