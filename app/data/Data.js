var GlobalData = {
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

var IndividualData = {
    users: ['chess1424', 'zatarain', 'dventura11', 'hopkins', 'ruben.rgzr', 'rendon', 'ulisesmdzmtz'],
    selectedUser: 'chess1424',
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

export {GlobalData, IndividualData}
