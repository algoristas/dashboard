import React from 'react'
import {Nav, NavItem} from 'react-bootstrap'

import GlobalScoreboard from 'components/GlobalScoreboard'
import IndividualScoreboard from 'components/IndividualScoreboard'
import ProblemSetBoard from 'components/ProblemSetBoard'
import AllProblemsBoard from 'components/AllProblemsBoard'
import WeeklyScoreboard from 'components/WeeklyScoreboard'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeKey: 'global'
    }
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(key) {
    this.setState({activeKey: key})
  }

  render() {
    return (
      <div id='content'>
          <div id="header" className="header">
            <a href="/" className="logo">Algorists</a>
            <div className="header-menu">
              <a href="/problems">Problems</a>
              <a href="/users">Users</a>
            </div>
          </div>

          <div id='dashboard'>
            <Nav bsStyle='pills' activeKey={this.state.activeKey} onSelect={this.handleSelect} className='dashboard-menu'>
              <NavItem eventKey={'global'}>Global scoreboard</NavItem>
              <NavItem eventKey={'individual'}>Individual scoreboard</NavItem>
              <NavItem eventKey={'weekly-scoreboard'}>Weekly scoreboard</NavItem>
              <NavItem eventKey={'weekly-problem-set'}>Weekly Problem Set</NavItem>
              <NavItem eventKey={'all-problems'}>All Problems</NavItem>
            </Nav>
            <div className='dashboard-content'>
              { this.state.activeKey == 'global' && <GlobalScoreboard /> }
              { this.state.activeKey == 'individual' && <IndividualScoreboard /> }
              { this.state.activeKey == 'weekly-scoreboard' && <WeeklyScoreboard /> }
              { this.state.activeKey == 'weekly-problem-set' && <ProblemSetBoard /> }
              { this.state.activeKey == 'all-problems' && <AllProblemsBoard/> }
            </div>
          </div>
      </div>
    )
  }
}
