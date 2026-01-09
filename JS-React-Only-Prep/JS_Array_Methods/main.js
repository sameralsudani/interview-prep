const companies = [
  {
    name: "Company One",
    category: "Finance",
    start: 1981,
    end: 2004,
  },
  {
    name: "Company Two",
    category: "Retail",
    start: 1992,
    end: 2008,
  },
  {
    name: "Company Three",
    category: "Auto",
    start: 1999,
    end: 2007,
  },
  {
    name: "Company Four",
    category: "Retail",
    start: 1989,
    end: 2010,
  },
  {
    name: "Company Five",
    category: "Technology",
    start: 2009,
    end: 2014,
  },
  {
    name: "Company Six",
    category: "Finance",
    start: 1987,
    end: 2010,
  },
  {
    name: "Company Seven",
    category: "Auto",
    start: 1986,
    end: 1996,
  },
  {
    name: "Company Eight",
    category: "Technology",
    start: 2011,
    end: 2016,
  },
  {
    name: "Company Nine",
    category: "Retail",
    start: 1981,
    end: 1989,
  },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//////////////////////////
// for loop
for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

//////////////////////////
// forEach loop
companies.forEach(function (company) {
  console.log(company.name);
});

//////////////////////////
// Get 21 and older
let canDrink = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}
console.log(canDrink);

//Or Using filter
const canDrink2 = ages.filter(function (age) {
  if (age >= 21) {
    return true;
  }
});

//Or using filter (2nd way)
const canDrink3 = ages.filter((age) => age >= 21);

//////////////////////////
// Filter retail companies
const retailCompanies = companies.filter(function (company) {
  if (company.category === "Retail") {
    return true;
  }
});
//Or Using filter
const retailCompanies2 = companies.filter(
  (company) => company.category === "Retail"
);

//////////////////////////
// Get 80s companies
const eightiesCompanies = companies.filter(
  (company) => company.start >= 1980 && company.start < 1990
);

//////////////////////////
// Get companies that lasted 10 years or more
const lastedTenYears = companies.filter(
  (company) => company.end - company.start >= 10
);

//////////////////////////
// Create array of company names
const companyNames = companies.map(function (company) {
  return company.name;
});
console.log(companyNames);

//////////////////////////
// Create array of `company name [start - end]`
const testMap = companies.map(function (company) {
  return `${company.name} [${company.start} - ${company.end}]`;
});
//Or
const testMap2 = companies.map(
  (company) => `${company.name} [${company.start} - ${company.end}]`
);

//////////////////////////
// Sort companies by start year
const sortedCompanies1 = companies.sort(function (c1, c2) {
  if (c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
});
//OR
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

//////////////////////////
// Sort ages
const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);

//////////////////////////
// find sum of age
let ageSum1 = 0;
for (let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
}
//Or using reduce
const ageSum2 = ages.reduce(function (total, age) {
  return total + age;
}, 0);
//Or using reduce (2nd way)
const ageSum = ages.reduce((total, age) => total + age, 0);

//////////////////////////
// Get total years for all companies
const totalYears1 = companies.reduce(function (total, company) {
  return total + (company.end - company.start);
}, 0);

// OR
const totalYears2 = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);

//////////////////////////
// Combine all Methods
const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);

// Array Methods

[4, 5, 6, 7]
  .at(1) //5

  [(4, 5, 6, 7)].push(8) // [4,5,6,7,8] (add last)

  [(4, 5, 6, 7)].pop() // [4,5,6]  (reomve last)

  [(4, 5, 6, 7)].fill(1) // [1,1,1,1]

  [(4, 5, 6, 7)].join(" ") // 4 5 6 7 (string)

  [(4, 5, 6, 7)].shift() // [5,6,7] (remove first)

  [(4, 5, 6, 7)].reverse() // [7,6,5,4]

  [(4, 5, 6, 7)].unshift(3) // [3,4,5,6,7] (add first)

  [(4, 5, 6, 7)].includes(6) // true

  [(4, 5, 6, 7)].map((item) => 2 * item) // [8,10,12,14]

  [(4, 5, 6, 7)].filter((item) => item > 5) // [6,7]

  [(4, 5, 6, 7)].find((item) => item > 5) // 6

  [(4, 5, 6, 7)].every((item) => item > 0) // true

  [(4, 5, 6, 7)].reduce((prev, curr) => prev + curr, 0); // 22
