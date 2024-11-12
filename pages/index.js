import { useState } from 'react';
import clsx from 'clsx';

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={clsx({ 'dark-mode': isDarkMode })}>
      <div className="container">
        <h1>Welcome to the homepage</h1>
        {isDarkMode ? (
          <button className="button" onClick={toggleDarkMode}>
            Switch to Light Mode
          </button>
        ) : (
          <button className="button" onClick={toggleDarkMode}>
            Switch to Dark Mode
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;
