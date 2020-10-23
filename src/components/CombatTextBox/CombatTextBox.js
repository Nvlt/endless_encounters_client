import React from 'react';
import './CombatTextBox.css'

export default class CombatTextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text
    }
  }

  static defaultProps = {
    text: ''
  }

  clearText = () => {
    this.setState({text: ''})
  }

  render() {
    return (
      <div className='textbox'>
        {this.state.text}
      </div>
    );
  }
}