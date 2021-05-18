// Import stylesheets
import './style.css';
const users = [
  {
    id: '1',
    name: 'Norah'
  },
  {
    id: '2',
    name: 'Alyx'
  }
];

const accounts = [
  {
    account: 'IRA-4679',
    user: '1',
    balance: '5175.36'
  },
  {
    account: 'AAA-3571',
    user: '1',
    balance: '3106701.85'
  },
  {
    account: 'AAA-4671',
    user: '1',
    balance: '138971.19'
  },
  {
    account: 'ROT-1687',
    user: '2',
    balance: '2686.00'
  },
  {
    account: 'AAA-7894',
    user: '2',
    balance: '68761.32'
  },
  {
    account: 'IRA-6818',
    user: '2',
    balance: '564.67'
  },
  {
    account: 'IRA-6819',
    user: '2',
    balance: '6564.67'
  }
];

['Norah | AAA-6818 | 564.67', 'Norah | AAA-4671 | 138971.19'];

let output = accounts.map(el => {
  users.map(item => {
    if (el.user == item.id) {
      el.user = item.name;
    }
  });
});

console.log(output);
