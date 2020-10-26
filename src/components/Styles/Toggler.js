import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';

const Toggle = ({theme, toggleTheme }) => {
  return (
    <button onClick={toggleTheme} >
        Theme
    </button>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
}

export default Toggle;