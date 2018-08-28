const GlobalData = {
  users: [
    {username: 'rendon', solved: 5},
    {username: 'ulisesmdzmtz', solved: 6},
    {username: 'chess1424', solved: 6},
    {username: 'ruben.rgzr', solved: 3},
    {username: 'hopkins', solved: 1},
    {username: 'dventura11', solved: 5},
    {username: 'zatarain', solved: 1}
  ]
};

const IndividualData = {
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
};

const JudgeIconsData = {
  judges: [
    {name: 'https://omegaup.com/', path: '/img/omegaup.jpg'},
    {name: 'https://uva.onlinejudge.org', path: '/img/uva-logo.png'},
    {name: 'http://codeforces.com', path: '/img/codeforces.png'},
    {name: 'https://www.codechef.com', path: '/img/codechef.png'},
    {name: 'http://coj.uci.cu', path: '/img/coj.jpeg'}
  ]
}

const ProblemSetData = {
  selectedSet: 0,
  weeks: [
    {
      number: 1,
      problems: [
        {
          title: 'Tanques',
          id: 'tanques',
          judge: 'https://omegaup.com/',
          url: 'https://omegaup.com/arena/problem/tanques#problems',
          topics: ['DP',],
          difficulty: 'medium',
        },
        {
          title: 'Collar',
          id: 'necklace',
          judge: 'https://omegaup.com/',
          url: 'https://omegaup.com/arena/problem/necklace#problems',
          topics: ['Euler Tour', 'Graph'],
          difficulty: 'easy',
       },
        {
          title: 'Is It A Tree',
          id: 'IsItATree',
          judge: 'https://omegaup.com/',
          url: 'https://omegaup.com/arena/problem/IsItATree#problems',
          topics: ['Trees',],
          difficulty: 'medium',
       },
        {
          title: 'Acomoda el número',
          id: 'AcomodandoOMI',
          judge: 'https://omegaup.com/',
          url: 'https://omegaup.com/arena/problem/AcomodandoOMI#problems',
          topics: ['Ad-Hoc',],
          difficulty: 'medium',
        },
      ],
    },
    {
      number: 2,
      problems: [
        {
          title: 'Chef and His Apartment Dues',
          id: 'CHEFAPAR',
          judge: 'https://www.codechef.com',
          url: 'https://www.codechef.com/problems/CHEFAPAR',
          topics: ['Ad-Hoc',],
          difficulty: 'medium',
       },
        {
          title: 'Chef and Triangles',
          id: 'MAKETRI',
          judge: 'https://www.codechef.com',
          url: 'https://www.codechef.com/problems/MAKETRI',
          topics: ['Math', 'Ad-Hoc'],
          difficulty: 'medium',
       },
        {
          title: 'Gerrymander',
          id: 'GERMANDE',
          judge: 'https://www.codechef.com',
          url: 'https://www.codechef.com/problems/GERMANDE',
          topics: ['Ad-Hoc'],
          difficulty: 'medium',
       },
        {
          title: 'Most Frequent Element',
          id: 'MFREQ',
          judge: 'https://www.codechef.com',
          url: 'https://www.codechef.com/problems/MFREQ',
          topics: ['Math', 'Ad-Hoc'],
          difficulty: 'medium',
       },
        {
          title: 'Eugene and big number',
          id: 'KBIGNUMB',
          judge: 'https://www.codechef.com',
          url: 'https://www.codechef.com/problems/KBIGNUMB',
          topics: ['Math', 'Modular Inverse'],
          difficulty: 'medium',
       },
        {
          title: 'Interval Game',
          id: 'INTERVAL',
          judge: 'https://www.codechef.com',
          url: 'https://www.codechef.com/problems/INTERVAL',
          topics: ['Ad-Hoc', 'Deque', ],
          difficulty: 'medium',
       },
      ],
    },
    {
      number: 3,
      problems: [
        {
          title: 'Fire',
          id: '1467',
          judge: 'http://coj.uci.cu',
          url: 'http://coj.uci.cu/24h/problem.xhtml?pid=1647',
          topics: ['Graph','BFS'],
          difficulty: 'medium',
       },
        {
          title: 'Jorge\'s Party',
          id: '2927',
          judge: 'http://coj.uci.cu',
          url: 'http://coj.uci.cu/24h/problem.xhtml?pid=2927',
          topics: ['Graph','Bicoloring'],
          difficulty: 'medium',
       },
        {
          title: 'Rub Task',
          id: '2191',
          judge: 'http://coj.uci.cu',
          url: 'http://coj.uci.cu/24h/problem.xhtml?pid=2191',
          topics: ['Graph','Dijkstra'],
          difficulty: 'medium',
       },

      ],
    },
    {
      number: 4,
      problems: [
        {
          title: 'Words',
          id: '1167',
          judge: 'http://coj.uci.cu',
          url: 'http://coj.uci.cu/24h/problem.xhtml?pid=1167',
          topics: ['DP',],
          difficulty: 'medium',
       },
        {
          title: 'Coin Change',
          id: '1103',
          judge: 'http://coj.uci.cu',
          url: 'http://coj.uci.cu/24h/problem.xhtml?pid=1103',
          topics: ['DP',],
          difficulty: 'medium',
       },
        {
          title: 'Umbrellas for Cows',
          id: '1962',
          judge: 'http://coj.uci.cu',
          url: 'http://coj.uci.cu/24h/problem.xhtml?pid=1962',
          topics: ['DP','Binary Search'],
          difficulty: 'medium',
       },
        {
          title: 'Xtreme Encription',
          id: '1655',
          judge: 'http://coj.uci.cu',
          url: 'http://coj.uci.cu/24h/problem.xhtml?pid=1655',
          topics: ['DP','Greedy','Ad-Hoc'],
          difficulty: 'medium',
       },
      ],
    },
    {
      number: 5,
      problems: [
        {
          title: 'Xenny and Alternating Tasks',
          id: 'XENTASK',
          judge: 'https://www.codechef.com',
          url: 'https://www.codechef.com/problems/XENTASK',
          topics: ['Ad-Hoc',],
           difficulty: 'medium',
      },
        {
          title: 'Bear and Extra Number',
          id: 'EXTRAN',
          judge: 'https://www.codechef.com',
          url: 'https://www.codechef.com/problems/EXTRAN',
          topics: ['Ad-Hoc',],
          difficulty: 'medium',
       },
        {
          title: 'Bandwidth of a matrix',
          id: 'BANDMATR',
          judge: 'https://www.codechef.com',
          url: 'https://www.codechef.com/problems/BANDMATR',
          topics: ['Math',],
          difficulty: 'medium',
       },
        {
          title: 'Cooking Schedule',
          id: 'SCHEDULE',
          judge: 'https://www.codechef.com',
          url: 'https://www.codechef.com/problems/SCHEDULE',
          topics: ['Binary Search',],
          difficulty: 'medium',
       },
      ],
    },
    {
      number: 6,
      problems: [
        {
          title: 'Frequent values',
          id: '11235',
          judge: 'https://uva.onlinejudge.org',
          url: 'https://goo.gl/Atwwyk',
          topics: ['Segment Tree',],
          difficulty: 'medium',
       },
        {
          title: 'Divisors',
          id: '294',
          judge: 'https://uva.onlinejudge.org',
          url: 'https://goo.gl/McBMrL',
          topics: ['Math',],
          difficulty: 'medium',
       },
        {
          title: 'The book thief',
          id: '12908',
          judge: 'https://uva.onlinejudge.org',
          url: 'https://goo.gl/VFLMVU',
          topics: ['Ad-Hoc','Math','Binary Search'],
          difficulty: 'medium',
       },
        {
          title: 'Glass Beads',
          id: '719',
          judge: 'https://uva.onlinejudge.org',
          url: 'https://goo.gl/mCAca7',
          topics: ['Suffix Array', 'String'],
          difficulty: 'medium',
       },
      ],
    },
    {
      number: 7,
      problems: [
        {
          title: 'Homework',
          id: '13135',
          judge: 'https://uva.onlinejudge.org',
          url: 'https://goo.gl/ar7gyk',
          topics: ['Math','Binary Search'],
          difficulty: 'medium',
       },
        {
          title: 'Fewest Flops',
          id: '11552',
          judge: 'https://uva.onlinejudge.org',
          url: 'https://goo.gl/FyRlZI',
          topics: ['DP','String'],
          difficulty: 'medium',
       },
        {
          title: 'Codejam Round 1A 2015',
          id: 'Round 1A 2015',
          judge: 'https://uva.onlinejudge.org',
          url: 'https://goo.gl/gLdN07',
          topics: ['Binary Search','Math','Ad-Hoc'],
          difficulty: 'medium',
       },
      ],
    },
    {
      number: 8,
      problems: [
        {
          title: '',
          id: '',
          judge: '',
          url: '',
          topics: ['',],
          difficulty: '',
       },
      ],
    },
  ],
}

export {GlobalData, IndividualData, ProblemSetData, JudgeIconsData}
