import React from 'react';
// eslint-disable-next-line no-unused-vars
import TokenService from '../services/token-service';
// eslint-disable-next-line no-unused-vars
import CharacterService from '../services/character-service';

const CharacterContext=React.createContext({
  character: {},
  error: null,
  setError: () => {},
  clearError: () => {},
  setCharacter: () => {},
  getUserCharacter: () => {}
})

export default CharacterContext;

export class CharacterProvider extends React.Component {
  constructor(props) {
    super(props);
    const state={character: {}, error: null}

    this.state=state;
  }

  setError=error => {
    console.error(error);
    this.setState({error});
  }
  clearError=() => {
    this.setState({error: null});
  }

  setCharacter=(character) => {
    this.setState({character});
  }

  render() {
    const value={
      character: this.state.character,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setCharacter: this.setCharacter
    }
    return (
      <CharacterContext.Provider value={value}>
        {this.props.children}
      </CharacterContext.Provider>
    )
  }
}
