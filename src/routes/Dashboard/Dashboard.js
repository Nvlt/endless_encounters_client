import React from 'react';
import DashboardMain from '../../components/DashBoardComponents/DashboardMain/DashboardMain';
import CharacterContext from '../../contexts/CharacterContext';
import CharacterService from '../../services/character-service';
import character from '../../charDummy'

export default class Dashboard extends React.Component {
  static contextType = CharacterContext;

  componentDidMount = () => {
    CharacterService.getUserCharacter()
      .then(res => {
        CharacterService.getEntity(res[0].entity)
          .then(res => {
            this.context.setCharacter(res)
          })
      })
  }

  render() {
    return (
      <DashboardMain character={character}/>
    )
  }
}