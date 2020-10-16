import React from 'react';
import DashboardMain from '../../components/DashBoardComponents/DashboardMain/DashboardMain';
import CharacterContext from '../../contexts/CharacterContext';
import character from '../../charDummy'

export default class Dashboard extends React.Component {
  static contextType = CharacterContext;

  componentDidMount = () => {
    this.context.setCharacter(character)
  }

  render() {
    return (
      <DashboardMain character={this.context.character}/>
    )
  }
}