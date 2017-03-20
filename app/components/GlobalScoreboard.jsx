import React from 'react';
import {Table} from 'react-bootstrap';

export default class GlobalScoreboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [
                {username: 'rendon', solved: 5},
                {username: 'ulisesmdzmtz', solved: 6},
                {username: 'chess1424', solved: 6},
                {username: 'ruben.rgzr', solved: 3},
                {username: 'hopkins', solved: 1},
                {username: 'dventura11', solved: 5},
                {username: 'zatarain', solved: 1}
            ]
        }
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
