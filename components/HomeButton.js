import React from 'react';

const HomeButton = () => {

  const handleClick = () => {
    // Do something when the home button is clicked, or leave it empty if not needed
  };

  return (
    <button onClick={handleClick} className="home-button">
      Home
    </button>
  );
};

export default HomeButton;