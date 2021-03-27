var accounts = [
    { balance: -10 },
    { balance: 12 },
    { balance: 0 }
  ];
  
  var account;
  
  account = accounts.find(value =>{
      return value.balance === 12;
  });