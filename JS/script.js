let successful = [];
let unSuccessful = [];
let taxes = Number;
let taxesMax = {};
let taxesMin = {};

let bank = [
  {
    name: "Apple",
    budget: 1000000,
    tax: 28,
    expensesPerYear: [
      { 
        title: "Salaries", total: 125000 
      },
      {
        title: "Utilites", total: 18000 
      },
      {
        title: "Rent", total: 258000 
      },
    ],
  },
  {
    name: "Microsoft",
    budget: 988000,
    tax: 21,
    expensesPerYear: [
      {
        title: "Salaries",
        total: 148000,
      },
      {
        title: "Utilites",
        total: 124000,
      },
      {
        title: "Rent",
        total: 314000,
      },
    ],
  },
  {
    name: "HP",
    budget: 609000,
    tax: 14,
    expensesPerYear: [
      {
        title: "Salaries",
        total: 414000,
      },
      {
        title: "Utilites",
        total: 19000,
      },
      {
        title: "Rent",
        total: 114400,
      },
    ],
  },
  {
    name: "Xiomi",
    budget: 889500,
    tax: 17,
    expensesPerYear: [
      {
        title: "Salaries",
        total: 318000,
      },
      {
        title: "Utilites",
        total: 14000,
      },
      {
        title: "Rent",
        total: 169000,
      },
    ],
  },
  {
    name: "Samsung",
    budget: 889500,
    tax: 12,
    expensesPerYear: [
      {
        title: "Salaries",
        total: 650400,
      },
      {
        title: "Utilites",
        total: 29000,
      },
      {
        title: "Rent",
        total: 212000,
      },
    ],
  },
];

const setup = (writeArr) => {
  console.warn("В каждую компанию добавлен ключ expensesPerMonth и значение expensesPerYear:12");
  for (let item of writeArr) {                    //Тут задание с "expensesPerMonth"
    let e_trata = []
    for (let item2 of item.expensesPerYear) {
      if (item2.title == "Salaries") {
        let month_trata = item2.total / 12
        let trata = {
          title: item2.title,
          total: month_trata
        }
        e_trata.push(trata)
      }
      if (item2.title == "Utilites") {
        let month_trata = item2.total / 12
        let trata = {
          title: item2.title,
          total: month_trata
        }
        e_trata.push(trata)
      }
      if (item2.title == "Rent") {
        let month_trata = item2.total / 12
        let trata = {
          title: item2.title,
          total: month_trata
        }
        e_trata.push(trata)
      }
    }
    item.expensesPerMonth = e_trata
  }
  console.log(writeArr);

  console.warn("В каждую компанию добавлен ключ procent где считаны проценты траты");
  for (let item of writeArr) {              //А тут задание с "procent"
    let zero = 0
    let item2
    for (item2 of item.expensesPerYear) {
      zero += item2.total
    }
    item.procent = item.budget / 100
    item.procent = zero / item.procent //+ "%"
  }
  console.log(writeArr);

  console.warn("Распределил компании на successful(procent<100) и unSuccessful(procent>100)");
  for (let item of writeArr) {          //Тут фильтер successful и unSuccessful
    if (item.procent < 100) {
      successful.push(item.name)
    } else unSuccessful.push(item.name)
  }
  console.log(successful);
  console.log(unSuccessful);

  console.warn("В переменную taxes добавляются все налоги всех компаний");
  let zero = 0
  for (let item of writeArr) {                    //Тут я сложил все налоги
    let nalog = item.budget / 100 * item.tax
    zero += nalog
  }
  taxes = zero
  console.log(taxes);

  console.warn("Переменная taxesMax и taxesMin выдают самый большой и самый меньший налог среди всех компаний");
  let all_taxes = []
  let item;
  for (item of writeArr) {
    let nalog = item.budget / 100 * item.tax
    all_taxes.push(nalog)
  }
  let max = Math.max.apply(null, all_taxes)
  let min = Math.min.apply(null, all_taxes)
  console.log(all_taxes);
  for (item of writeArr) {
    let nalog = item.budget / 100 * item.tax
    if (nalog == max) {
      taxesMax = item
      console.log(taxesMax);
    } if (nalog == min) {
      taxesMin = item
      console.log(taxesMin);
    }
  }

  console.warn("Переменная totalMoney показывает сколько денег осталось в итоге");
  for (let item of writeArr) {
    let zer = 1
    for (let item2 of item.expensesPerYear) {
      zer += item2.total
    }
    let nalog = item.budget / 100 * item.tax
    item.totalMoney = item.budget - zer - nalog
  }
  console.log(writeArr);
};
setup(bank);
