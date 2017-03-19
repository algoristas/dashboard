import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            weeks: [
                { date: '01-01-2017 - 07-01-2017', problemSetters: ['Rafael', 'Carlos']},
                { date: '10-01-2017 - 17-01-2017', problemSetters: ['Ulises'] }
            ]
        }
    }
    render() {
        return (
            <div id="content">
                <ul>
                    { 
                        this.state.weeks.map(function(w) {
                            return (
                                <div>
                                    <h2>{ w.date } -- {w.problemSetters}</h2>
                                </div>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}
