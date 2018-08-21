import React from 'react'
import {Table, FormControl, FormGroup, ControlLabel} from 'react-bootstrap'
import {ProblemSetData} from 'data/Data'

export default class WeeklyScoreboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = ProblemSetData
    this.getProblemSet = this.getProblemSet.bind(this)
    this.selectSet = this.selectSet.bind(this)
  }

  getProblemSet() {
    const selectedSet = this.state.selectedSet
    const problemSet = this.state.weeks[selectedSet].problems
    return problemSet
  }

  selectSet(e) {
      this.setState({selectedSet: e.target.value})
  }

  render() {
    return (
      <div>
        <h2 className='page-title'>Weekly scoreboard</h2>
        <div id='select-user-form' className='form-inline'>
          <FormGroup>
            <ControlLabel className='form-inline-title'>Problem Set: </ControlLabel>
            <FormControl componentClass="select" placeholder="select" onChange={this.selectSet}>
              {
                this.state.weeks.map((week, key) => {
                    return (<option key={key} value={key} >{`Week ${key+1}`}</option>)
                })
              }
            </FormControl>
          </FormGroup>
        </div>

        <Table striped bordered condensed hover>
          <thead className='thead-light'>
              <tr>
                <th>#</th>
                <th>Username</th>
                <th>Problems solved</th>
                {
                  this.getProblemSet().map((p, i) => {
                    return (<th><a href={p.url}> P{i+1} </a></th>)
                  })
                }
              </tr>
          </thead>
          <tbody>
          </tbody>
        </Table>
      </div>
    )
  }
}
