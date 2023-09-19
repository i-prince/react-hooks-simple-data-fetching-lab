import React, { useEffect, useState } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message); // Set the dog image URL in the state
        setIsLoading(false); // Turn off loading state
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Turn off loading state in case of an error
      });
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <div>
      <h1>Random Dog Image</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
