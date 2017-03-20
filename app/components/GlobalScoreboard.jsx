import React from 'react';
import {Table} from 'react-bootstrap';
import {GlobalData} from 'data/Data'

export default class GlobalScoreboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = GlobalData
        this.getScoreboard = this.getScoreboard.bind(this);
    }

    getScoreboard() {
        return this.state.users.sort((u, v) => { return u.solved < v.solved })
    }

    render() {
        return (
            <div>
                <h2 className='page-title'>Global scoreboard</h2>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>Problems solved</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.getScoreboard().map((u, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{u.username}</td>
                                        <td>{u.solved}</td>
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
