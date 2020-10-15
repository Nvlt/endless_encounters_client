import React from 'react';
import CharStatCard from '../CharacterStatCard/CharacterStatCard';
import Inventory from '../Inventory/Inventory';
import Gear from '../Gear/Gear';
import Spells from '../Spells/Spells';
import Abilities from '../Abilities/Abilities';
import '../../../App.css'



export default class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    const state={
      display: 'gear',

    }
    this.state=state;
  }

  handleDisplayChange=(ev) => {
    ev.preventDefault();
    this.setState({display: ev.target.value})
  }


  render() {
    return (
      <main className="flex flex-col center width-full">
        <div className="flex-1 flex flex-col border text-left p-2 mt-4 m-1
      rounded-lightest justify-stretch max-height-40 overflow-scroll">
          <p className="flex-1">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo.</p>
          <p className="flex-1">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
          sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          <p className="flex-1">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
          magnam aliquam quaerat voluptatem.</p>
          <p className="flex-1">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
          nisi ut aliquid ex ea commodi consequatur?</p>
          <p className="flex-1">
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur,
           vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          <p className="flex-1">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo.</p>
          <p className="flex-1">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
          sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          <p className="flex-1">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
          magnam aliquam quaerat voluptatem.</p>
          <p className="flex-1">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
          nisi ut aliquid ex ea commodi consequatur?</p>
          <p className="flex-1">
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur,
           vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          <p className="flex-1">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo.</p>
          <p className="flex-1">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
          sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          <p className="flex-1">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
          magnam aliquam quaerat voluptatem.</p>
          <p className="flex-1">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
          nisi ut aliquid ex ea commodi consequatur?</p>
          <p className="flex-1">
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur,
           vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        </div>
        <div className="flex-1 flex flex-row-wrap max-width-80 width-full">
          <div className="flex flex-row flex-1">
            <button className="flex-1">Shop</button>
            <button className="flex-1">Tavern</button>
            <button className="flex-1">Explore</button>
          </div>
          <div className="flex flex-row flex-1">
            <button value='inventory' onClick={this.handleDisplayChange} className="flex-1">Inventory</button>
            <button value='gear' onClick={this.handleDisplayChange} className="flex-1">Gear</button>
            <button value='spells' onClick={this.handleDisplayChange} className="flex-1">Spells</button>
            <button value='abilities' onClick={this.handleDisplayChange} className="flex-1">Abilities</button>
          </div>
        </div>
        <div className="flex flex-1 flex-row-wrap center width-full max-width-80 mx-2">
          <CharStatCard />
          {this.state.display==='inventory'&&<Inventory />}
          {this.state.display==='gear'&&<Gear />}
          {this.state.display==='spells'&&<Spells />}
          {this.state.display==='abilities'&&<Abilities />}
        </div>
      </main>
    )
  }
}
