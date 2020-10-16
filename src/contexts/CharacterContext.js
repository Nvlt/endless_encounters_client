import React from 'react';
import TokenService from '../services/token-service';

const CharacterContext = React.createContext({
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
    const state = {character: {}, error: null}

    this.state = state;
  }

  setError = error => {
    console.error(error);
    this.setState({error});
  }
  clearError = () => {
    this.setState({error: null});
  }

  setCharacter = (character) => {
    this.setState({ character });
  }

  //Character sheet example:
  /*

  char: {
    stats: {
      hp: -43,
      maxHp: 76,
      str: 54,
      dex: 2,
      int: 52
      etc...
    },
    gear: {
      helm: hat,
      chest: treasure chest,
      hands: oven mittens,
      etc...
    },
    inventory: [],
    abilities: [],
    spells: [],
  }
  
  */

  //Fetch Character with user ID
  //Character fetch should also come with the stats, inventory, abilities and gear

  /*
  Character has:
    Stats,
    Inventory,
    Gear,
    Abilities,
    Spells
  */

  render() {
    const value = {
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