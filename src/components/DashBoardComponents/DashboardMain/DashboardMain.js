import React from 'react';
import CharStatCard from '../CharacterStatCard/CharacterStatCard';
import Inventory from '../Inventory/Inventory';
import Gear from '../Gear/Gear';
import Spells from '../Spells/Spells';
import Abilities from '../Abilities/Abilities';
import './Dash.css'
import EventContext from '../../../contexts/EventContext';
import SwitchTabSound from '../../SoundWidgets/SwitchTabSound';





export default class Dashboard extends React.Component {
  static defaultProps={
    character: {}
  }

  constructor(props) {
    super(props)
    const state={
      display: 'gear'
    }
    this.state=state;
  }
  static contextType=EventContext;


  handleDisplayChange=(ev) => {
    ev.preventDefault();

    this.setState({display: ev.target.value})
  }

  renderTabButttons() {
    const tabs=[
      {name: 'Inventory', tabName: 'inventory', func: this.handleDisplayChange},
      {name: 'Gear', tabName: 'gear', func: this.handleDisplayChange},
      {name: 'Spells', tabName: 'spells', func: this.handleDisplayChange},
      {name: 'Abilities', tabName: 'abilities', func: this.handleDisplayChange}
    ]
    return tabs.map(tab => <SwitchTabSound props={tab} />)
  }
  render() {

    return (
      <main className="p-2">
        <div className="scrollBox">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo.</p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
          sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
          magnam aliquam quaerat voluptatem.</p>
          <p>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
          nisi ut aliquid ex ea commodi consequatur?</p>
          <p>
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur,
           vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo.</p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
          sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
          magnam aliquam quaerat voluptatem.</p>
          <p>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
          nisi ut aliquid ex ea commodi consequatur?</p>
          <p>
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur,
           vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo.</p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
          sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
          magnam aliquam quaerat voluptatem.</p>
          <p>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
          nisi ut aliquid ex ea commodi consequatur?</p>
          <p>
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur,
           vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        </div>

        <div className="btnsNav">
          <button className='dashBtn'>Shop</button>
          <button className='dashBtn'>Tavern</button>
          <button className='dashBtn'>Explore</button>
          {/* <button className='dashBtn' value='inventory' onClick={(ev) => this.handleDisplayChange(ev)}>Inventory</button>
          <button className='dashBtn' value='gear' onClick={(ev) => this.handleDisplayChange(ev)}>Gear</button>
          <button className='dashBtn' value='spells' onClick={(ev) => this.handleDisplayChange(ev)}>Spells</button>
          <button className='dashBtn' value='abilities' onClick={(ev) => this.handleDisplayChange(ev)}>Abilities</button> */}
          {this.renderTabButttons()}
        </div>
        <div className="charAssets">
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
