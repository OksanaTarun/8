let expenses = [
  { expenses: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390] },
  {
    expenses: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    expenses: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];

let totalExpenses = 0;

for (let expense of expenses) {
  for (let value of expense.expenses)
    if (value > 1000) {
      totalExpenses += value;
    }
}
console.log(totalExpenses);

for (let expense of expenses) {
  expense.expenses.forEach(function (value, index, expenses) {
    console.log(`value: ${value}, index: ${index}`);
  });
}

for (let expense of expenses) {
  let filteredExpenses = expense.expenses.filter((value) => {
    return value > 1000;
  });
  console.log(filteredExpenses);
}
