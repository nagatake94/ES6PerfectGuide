var expense = {
    type: "交際費",
    amount: "4,500 JPY"
};

// var type = expense.type;
// var amount = expense.amount;

//ES6

// const { type } = expense;
// const { amount } = expense;

//const { type, amount } = expense;

const { type: myType, amount } = expense;