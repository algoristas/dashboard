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
        },
        {
          title: 'Collar',
          id: 'necklace',
          judge: 'https://omegaup.com/',
          url: 'https://omegaup.com/arena/problem/necklace#problems',
          topics: ['Euler Tour', 'Graph'],
        },
        {
          title: 'Is It A Tree',
          id: 'IsItATree',
          judge: 'https://omegaup.com/',
          url: 'https://omegaup.com/arena/problem/IsItATree#problems',
          topics: ['Trees',],
        },
        {
          title: 'Acomoda el número',
          id: 'AcomodandoOMI',
          judge: 'https://omegaup.com/',
          url: 'https://omegaup.com/arena/problem/AcomodandoOMI#problems',
          topics: ['Ad-Hoc',],
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
        },
        {
          title: 'Chef and Triangles',
          id: 'MAKETRI',
          judge: 'https://www.codechef.com',
          url: 'https://www.codechef.com/problems/MAKETRI',
          topics: ['Math', 'Ad-Hoc'],
        },
        {
          title: 'Gerrymander',
          id: 'GERMANDE',
          judge: 'https://www.codechef.com',
          url: 'https://www.codechef.com/problems/GERMANDE',
          topics: ['Ad-Hoc'],
        },
        {
          title: 'Most Frequent Element',
          id: 'MFREQ',
          judge: 'https://www.codechef.com',
          url: 'https://www.codechef.com/problems/MFREQ',
          topics: ['Math', 'Ad-Hoc'],
        },
        {
          title: 'Eugene and big number',
          id: 'KBIGNUMB',
          judge: 'https://www.codechef.com',
          url: 'https://www.codechef.com/problems/KBIGNUMB',
          topics: ['Math', 'Modular Inverse'],
        },
        {
          title: 'Interval Game',
          id: 'INTERVAL',
          judge: 'https://www.codechef.com',
          url: 'https://www.codechef.com/problems/INTERVAL',
          topics: ['Ad-Hoc', 'Deque', ],
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
        },
        {
          title: 'Jorge\'s Party',
          id: '2927',
          judge: 'http://coj.uci.cu',
          url: 'http://coj.uci.cu/24h/problem.xhtml?pid=2927',
          topics: ['Graph','Bicoloring'],
        },
        {
          title: 'Rub Task',
          id: '2191',
          judge: 'http://coj.uci.cu',
          url: 'http://coj.uci.cu/24h/problem.xhtml?pid=2191',
          topics: ['Graph','Dijkstra'],
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
        },
        {
          title: 'Coin Change',
          id: '1103',
          judge: 'http://coj.uci.cu',
          url: 'http://coj.uci.cu/24h/problem.xhtml?pid=1103',
          topics: ['DP',],
        },
        {
          title: 'Umbrellas for Cows',
          id: '1962',
          judge: 'http://coj.uci.cu',
          url: 'http://coj.uci.cu/24h/problem.xhtml?pid=1962',
          topics: ['DP','Binary Search'],
        },
        {
          title: 'Xtreme Encription',
          id: '1655',
          judge: 'http://coj.uci.cu',
          url: 'http://coj.uci.cu/24h/problem.xhtml?pid=1655',
          topics: ['DP','Greedy','Ad-Hoc'],
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
        },
        {
          title: 'Bear and Extra Number',
          id: 'EXTRAN',
          judge: 'https://www.codechef.com',
          url: 'https://www.codechef.com/problems/EXTRAN',
          topics: ['Ad-Hoc',],
        },
        {
          title: 'Bandwidth of a matrix',
          id: 'BANDMATR',
          judge: 'https://www.codechef.com',
          url: 'https://www.codechef.com/problems/BANDMATR',
          topics: ['Math',],
        },
        {
          title: 'Cooking Schedule',
          id: 'SCHEDULE',
          judge: 'https://www.codechef.com',
          url: 'https://www.codechef.com/problems/SCHEDULE',
          topics: ['Binary Search',],
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
        },
        {
          title: 'Divisors',
          id: '294',
          judge: 'https://uva.onlinejudge.org',
          url: 'https://goo.gl/McBMrL',
          topics: ['Math',],
        },
        {
          title: 'The book thief',
          id: '12908',
          judge: 'https://uva.onlinejudge.org',
          url: 'https://goo.gl/VFLMVU',
          topics: ['Ad-Hoc','Math','Binary Search'],
        },
        {
          title: 'Glass Beads',
          id: '719',
          judge: 'https://uva.onlinejudge.org',
          url: 'https://goo.gl/mCAca7',
          topics: ['Suffix Array', 'String'],
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
          topics: ['',],
        },
        {
          title: 'Fewest Flops',
          id: '11552',
          judge: 'https://uva.onlinejudge.org',
          url: 'https://goo.gl/FyRlZI',
          topics: ['',],
        },
        {
          title: 'Codejam Round 1A 2015',
          id: 'Round 1A 2015',
          judge: 'https://uva.onlinejudge.org',
          url: 'https://goo.gl/gLdN07',
          topics: ['',],
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
        },
      ],
    },
  ],
};

export {GlobalData, IndividualData, ProblemSetData};
