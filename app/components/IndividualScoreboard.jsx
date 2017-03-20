import React from 'react';
import {Table} from 'react-bootstrap';

const PROBLEMS_IDS = ['a', 'b', 'c', 'd', 'e'];

export default class IndividualScoreboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            weeks: [
                {
                    date: new Date(2017, 3 - 1, 5, 0, 0, 0),
                    topics: ['dp', 'math'],
                    problems: {
                        a: ['rendon', 'hopkins', 'ulisesmdzmtz', 'hopkins'],
                        b: ['ulisesmdzmtz', 'chess1424', 'rendon'],
                        c: ['hopkins', 'ulisesmdzmtz', 'zatarain'],
                        d: ['rendon', 'zatarain', 'chess1424', 'ulisesmdzmtz'],
                        e: ['chess1424', 'zatarain', 'dventura11', 'hopkins', 'ruben.rgzr', 'ulisesmdzmtz'],
                    }
                },
                {
                    date: new Date(2017, 3 - 1, 12, 0, 0, 0),
                    topics: ['dp', 'math'],
                    problems: {
                        a: ['rendon', 'ulisesmdzmtz', 'dventura11'],
                        b: ['ulisesmdzmtz', 'rendon', 'zatarain'],
                        c: ['hopkins', 'ulisesmdzmtz', 'zatarain'],
                        d: ['rendon', 'zatarain', 'chess1424', 'ulisesmdzmtz'],
                        e: ['chess1424', 'zatarain', 'hopkins', 'ruben.rgzr', 'rendon', 'ulisesmdzmtz'],
                    }
                },
                {
                    date: new Date(2017, 3 - 1, 19, 0, 0, 0),
                    topics: ['dp', 'math'],
                    problems: {
                        a: ['rendon', 'ulisesmdzmtz'],
                        b: ['ulisesmdzmtz'],
                        c: ['hopkins', 'ulisesmdzmtz', 'zatarain'],
                        d: ['rendon', 'zatarain', 'chess1424', 'ulisesmdzmtz'],
                        e: ['chess1424', 'zatarain', 'dventura11', 'hopkins', 'ruben.rgzr', 'rendon', 'ulisesmdzmtz'],
                    }
                }
            ]
        }
        this.getCalendar = this.getCalendar.bind(this);
        this.problemMark = this.problemMark.bind(this);
    }

    problemMark(solved) {
        return (
            <td className={solved ? 'status-yes' : 'status-no'}>
                { solved ? <i className="fa fa-check" aria-hidden="true"></i> : <i className="fa fa-times" aria-hidden="true"></i> }
            </td>
        )
    }

    getCalendar() {
        // var user = this.state.selectedUser;
        var user = 'rendon';
        var weeks = this.state.weeks.sort((a, b) => { return a.date > b.date });
        var calendar = [];
        weeks.forEach((week) => {
            var data = { date: week.date.toString(), topics: week.topics };
            PROBLEMS_IDS.forEach((problem) => {
                data[problem] = {
                    solved: week.problems[problem].indexOf(user) !== -1
                };
            });
            calendar.push(data);
        });
        return calendar;
    }

    render() {
        return (
            <div>
                <h2 className='page-title'>Individual scoreboard</h2>
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
                                                return this.problemMark(w[id].solved);
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
