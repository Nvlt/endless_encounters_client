import React from 'react';

const EventContext = React.createContext({
  quest: {},
  mob: {},
  error: null,
  setError: () => {},
  clearError: () => {},
  setEvent: () => {},
});

export default EventContext;

export class EventContext extends React.Component {
  constructor(props) {
    super(props)
    const state = {quest: {}, error: null}

    this.state = state;
  }

  setError = (error) => {
    console.error(error);
    this.setState({error});
  }
  clearError = () => {
    this.setState({error: null});
  }

  setEvent = (quest) => {
    this.setState({quest});
  }

  setMob = (mob) => {
    this.setState({mob});
  }
  
  //Fetch event if none
  //Fetch mob related to event
  //Event may come with special action eg. damage player, free loot, lose money, etc
  //Inventory/Loot should come with mob
  //Use mob for combat/stat manipulation

  render() {
    const value = {
      quest: this.state.quest,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setEvent: this.setEvent
    }
    return (
      <EventContext.Provider value={value}>
        {this.props.children}
      </EventContext.Provider>
    )
  }
}