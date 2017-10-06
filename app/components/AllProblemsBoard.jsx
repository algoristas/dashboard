import React from 'react'
import {Table} from 'react-bootstrap'
import {ProblemSetData} from 'data/Data'

export default class AllProblemsBoard extends React.Component {

  constructor (props) {
    super(props)
    this.state = ProblemSetData
  }

  render () {
    return (
      <div>
        <h2 className='page-title'> Full Problem List </h2> 
        <Table striped bordered condensed hover>
          <thead>
            <th> Week # </th> 
            <th> Problem # </th>
            <th> Title </th>
            <th> Tags </th>
            <th> Id </th>
            <th> URL </th>
          </thead>
          <tbody>
            {
              this.state.weeks.map( (week, j) => {
                return ( week.problems.map((p,i) => {
                  return (
                    <tr key={i}>
                      <td>{j+1}</td>
                      <td>{j*4 + i}</td>
                      <td>{p.title}</td>
                      <td>{p.topics.join(', ')}</td>
                      <td>{p.id}</td>
                      <td><a href={p.url}>{p.url}</a></td> 
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

