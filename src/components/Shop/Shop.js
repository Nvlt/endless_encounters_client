import React from 'react';
import CharacterContext from '../../contexts/CharacterContext';
import './Shop.css';

export default class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: this.props.stock
    }
  }
  static defaultProps = {
    stock: []
  }
  static contextType = CharacterContext;

  renderStock = () => {
    return this.props.stock.map((item, index) => {
      return <div key={index} className='shop-item'>
        <span>{item.name}</span>
      </div>
    })
  }

  render() {
    return (
      <div className='viewport'>
        {this.props.stock.length &&
          <div className='shop-stock'>
            {this.renderStock()}
          </div>
        }
        {!this.props.stock.length &&
          <p>
            Shop is Empty
          </p>
        }
      </div>
    );
  }
}