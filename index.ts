
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

accounts.map(el => {
  users.map(item => {
    if (el.user == item.id) {
      return (el.user = item.name);
    }
  });
});
let arr = [];
let str = '';
console.log('filter by Norah with all types');

let getFormattedData = () => {
  for (let [key, value] of Object.entries(accounts)) {
    str = value.user + ' | ' + value.account + ' | ' + value.balance;
    arr.push(str);
  }
  return arr;
};
console.log(getFormattedData());

console.log('filter by Norah with all types');
let Norah = accounts.filter(username => {
  return username.user === 'Norah';
});
console.log(Norah);

console.log('filtered by account type sorted by balance ascending');
let filterByType = type => {
  let output = accounts
    .filter(username => {
      return username.account.includes(type);
    })
    .sort((a, b) => (+a.balance > +b.balance ? 1 : -1));
  console.log(output);
};
filterByType('IRA');

console.log(
  'filtered by Alyx with IRA account type; sorted by balance descending'
);
let filterByAlyx = (name, type) => {
  let output = accounts
    .filter(username => {
      return username.user === name && username.account.includes(type);
    })
    .sort((a, b) => (+a.balance > +b.balance ? -1 : 1));
  console.log(output);
};

filterByAlyx('Alyx', 'IRA');

console.log('filtered by All users; sorted by balance ascending');
let filterByAllUser = () => {
  let output = accounts.sort((a, b) => (+a.balance > +b.balance ? 1 : -1));
  console.log(output);
};
filterByAllUser();
