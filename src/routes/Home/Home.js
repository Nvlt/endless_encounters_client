/* eslint-disable no-unused-vars */
import React from 'react';
import HomeMain from '../../components/HomeMain/HomeMain';
import UserContext from '../../contexts/UserContext';

export default class Home extends React.Component {
  static contextType=UserContext;
  getCharacter=() => {

  }
  render() {
    return (
      <HomeMain />
    )
  }
}
