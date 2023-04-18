import React from 'react';

const TutorCard = ({ tutor, handleFavorite }) => {
  return (
    <div className="tutor-card">
      <h3>{tutor.name}</h3>
      <p>{tutor.subject}</p>
      <button onClick={() => handleFavorite(tutor.id)}>
        {tutor.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default TutorCard;