import React from 'react';
import {func, string} from 'prop-types';

const Toggle=({theme, toggleTheme}) => {
  return (
    <button id='theme-toggler' className={theme} onClick={toggleTheme} aria-label="Toggle page theme button">
      {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  );
};

Toggle.propTypes={
  theme: string.isRequired,
  toggleTheme: func.isRequired
}

export default Toggle;
