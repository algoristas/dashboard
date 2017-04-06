import React from 'react'
import {Table, FormControl, FormGroup, ControlLabel } from 'react-bootstrap'
import {IndividualData} from 'data/Data'

const PROBLEMS_IDS = ['a', 'b', 'c', 'd', 'e']

export default class IndividualScoreboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = IndividualData
    this.getCalendar = this.getCalendar.bind(this)
    this.problemMark = this.problemMark.bind(this)
    this.selectUser = this.selectUser.bind(this)
  }

  problemMark(solved, key) {
    return (
      <td key={key} className={solved ? 'status-yes' : 'status-no'}>
        { solved ? <i className="fa fa-check" aria-hidden="true"></i> : <i className="fa fa-times" aria-hidden="true"></i> }
      </td>
    )
  }

  getCalendar() {
    const user = this.state.selectedUser
    const weeks = this.state.weeks.sort((a, b) => { return a.date > b.date })
    let calendar = []
    weeks.forEach((week) => {
      let data = { date: week.date.toString(), topics: week.topics }
      PROBLEMS_IDS.forEach((problem) => {
        data[problem] = {
            solved: week.problems[problem].indexOf(user) !== -1
        }
      })
      calendar.push(data)
    })
    return calendar
  }

  selectUser(e) {
    this.setState({selectedUser: e.target.value})
  }

  render() {
    return (
      <div>
        <h2 className='page-title'>Individual scoreboard</h2>
        <div id='select-user-form' className='form-inline'>
          <FormGroup>
            <ControlLabel>User:</ControlLabel>
              <FormControl componentClass="select" placeholder="select" onChange={this.selectUser}>
              {
                this.state.users.map((user, key) => {
                  return (<option key={key}>{user}</option>)
                })
              }
            </FormControl>
          </FormGroup>
        </div>

        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Week #</th>
              <th>Date</th>
              <th>Topics</th>
              <th>A</th>
              <th>B</th>
              <th>C</th>
              <th>D</th>
              <th>E</th>
            </tr>
          </thead>
          <tbody>
          {
            this.getCalendar().map((w, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{w.date}</td>
                  <td>{w.topics.join(',')}</td>
                  {
                    PROBLEMS_IDS.map((id) => {
                      return this.problemMark(w[id].solved, id)
                    })
                  }
                </tr>
              )
            })
          }
          </tbody>
        </Table>
      </div>
    )
  }
}
