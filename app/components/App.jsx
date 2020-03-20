import React from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Routes from "components/Routes";

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
            <Nav bsStyle='tabs' activeKey={this.state.activeKey} onSelect={this.handleSelect} className='dashboard-menu'>
              <Link to="/global">Global scoreboard</Link>
              <Link to="/individual">Individual scoreboard</Link>
              <Link to='/weekly'>Weekly scoreboard</Link>
              <Link to={'/problem-set'}>Problem Set</Link>
              <Link to={'/all-problems'}>All Problems</Link>
            </Nav>
            <Routes />
          </div>
      </div>
    )
  }
}
