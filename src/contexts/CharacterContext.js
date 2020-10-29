import React from 'react';
// eslint-disable-next-line no-unused-vars
import TokenService from '../services/token-service';

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

  //Character sheet example:
  /*

  {
    "id": 1,
    "type": "player",
    "name": "v",
    "desc": "a cat",
    "abilities": [
        {
            "displayName": "Fire Ball",
            "name": "Fire Ball",
            "desc": "Cast a Fire Ball.",
            "cost": 5,
            "type": "offense"
        },
        {
            "displayName": "flee",
            "name": "town",
            "desc": "Go to a town.",
            "cost": 0,
            "type": "harmless"
        }
    ],
    "stats": {
        "str": 1,
        "dex": 2,
        "int": 3,
        "stam": 4,
        "will": 5,
        "agi": 6,
        "cha": 7
    },
    "job": "Mage",
    "level": 50,
    "speechType": "basic",
    "statPoints": 0,
    "exp": 50,
    "hp": 150,
    "max_hp": 300,
    "mp": null,
    "current_event": 1,
    "hostility": false
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
