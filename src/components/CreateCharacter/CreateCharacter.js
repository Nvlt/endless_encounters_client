/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import './CreateCharacter.css';

export default class CreateCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      selectedJob: 0,
      selectedAbilities: 0,
      selectedChecks: []
    }
  }
  static defaultProps={
    jobs: [
      {
        name: 'Warrior',
        abilities: [
          'Bash',
          'Whirlwind',
          'Shout',
          'Parry',
          'Charge'
        ]
      },
      {
        name: 'Wizard',
        abilities: [
          'Fireball',
          'Ice',
          'Magic Missile',
          'Ignite',
          'Thundershock'
        ]
      },
    ]
  }

  handleJobSwitch=(e) => {
    e.preventDefault();
    this.setState({
      selectedJob: e.target.value,
      selectedAbilities: 0,
      selectedChecks: []
    })
  }
  handleSubmit=(e) => {
    e.preventDefault();

    //Post new character to DB with user ID
  }
  handleCheck=(e) => {
    e.target.checked
      ? this.setState({
        selectedAbilities: this.state.selectedAbilities+1,
        selectedChecks: [...this.state.selectedChecks, e.target.value]
      })
      :this.setState({
        selectedAbilities: this.state.selectedAbilities-1,
        selectedChecks: [...this.state.selectedChecks.splice(0, this.state.selectedChecks.indexOf(e.target.value))]
      })
  }

  renderStatsCategory=() => {
    return <div className='stat-category'>
      {this.renderPrimaryStats()}
      {this.renderSecondaryStats()}
    </div>
  }
  renderPrimaryStats=() => {
    return <div className='stats primary-stats'>
      <p className='stat'>Strength:</p>
      <p className='stat'>Stamina:</p>
      <p className='stat'>Dexterity:</p>
      <p className='stat'>Agility:</p>
      <p className='stat'>Intelligence:</p>
      <p className='stat'>Willsons:</p>
    </div>
  }
  renderSecondaryStats=() => {
    return <div className='stats secondary-stats'>
      <p className='stat'>Vitality:</p>
      <p className='stat'>Mana:</p>
      <p className='stat'>Actions:</p>
      <p className='stat'>Speed:</p>
    </div>
  }

  renderJobCategory=() => {
    return <div className='job-category'>
      {this.renderJobs()}
      {this.renderAbilities()}
    </div>
  }
  renderJobs=() => {
    return <div className='job-list'>
      {this.props.jobs.map((job, index) => {
        return <button className='job' key={index} value={index} onClick={this.handleJobSwitch}>
          {job.name}
        </button>
      })}
    </div>
  }
  renderAbilities=() => {
    console.log(this.state.selectedChecks)
    return <div className='ability-list'>
      {this.props.jobs
        ? this.props.jobs[this.state.selectedJob].abilities.map((ability, index) => {
          return <>
            {(this.state.selectedChecks.length<2||this.state.selectedChecks.includes(ability))&&
              <input
                type='checkbox'
                name={'ability-'+index}
                key={index} value={ability.name}
                onChange={this.handleCheck}
                checked={this.state.selectedChecks.includes(ability)}
                value={ability}
              />}
            <label htmlFor={'ability-'+index}>{ability}</label><br />
          </>
        })
        :'Select a job'}
    </div>
  }

  render() {
    return (
      <section>
        <form className='character-form' onSubmit={this.handleSubmit}>
          <input htmlFor='char-name' placeholder='Name' />
          <button type='submit'>Submit</button>
          <div className='create-character-flex'>
            {this.renderJobCategory()}
            {this.renderStatsCategory()}
          </div>
        </form>
      </section>
    )
  }
}
