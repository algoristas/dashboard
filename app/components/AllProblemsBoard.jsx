import React from 'react'
import {Table} from 'react-bootstrap'
import {ProblemSetData, JudgeIconsData} from 'data/Data'

export default class AllProblemsBoard extends React.Component {

  constructor (props) {
    super(props)
    this.state = ProblemSetData
    this.icons = JudgeIconsData
  }

  render () {
    return (
      <div>
        <h2 className='page-title'> Full Problem List </h2> 
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th> Id </th>
              <th> Problem name </th>
              <th> URL </th>
              <th> Difficulty </th>
              <th> Tags </th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.weeks.map( (week, j) => {
                return ( week.problems.map((p,i) => {
                  return (
                    <tr key={i}>
                      <td>W{j+1}P{i}</td>
                      <td>{p.title}</td>
                      <td><a href={p.url}>[External link]</a></td>
                      <td>{p.difficulty}</td>
                      <td>{p.topics.join(', ')}</td>
                    </tr>
                  )
                }))
            })
          }
          </tbody>
        </Table>
      </div>
    )
  }
}

