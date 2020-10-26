import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';

const Toggle = ({theme, toggleTheme }) => {
  return (
    <button onClick={toggleTheme} >
        {theme.slice(0, 1).toUpperCase() + theme.slice(1)}
    </button>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
}

export default Toggle;