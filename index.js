//State
const names = ["alice", "bob", "charlie"];
const occupations = [
  "programmer",
  "writer",
  "engineer",
  "driver",
  "bartender",
  "farmer",
];

const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
];

//References
const average = document.getElementById("average");
const tableBody = document.querySelector("#table-body");

// Interval to add freelancer
const addFreelancerIntervalId = setInterval(addRandomFreelancer, 2000);

// Render initial data
render();

// Have you written and called a function to render the initial freelancer data?
function render() {
  const newRows = freelancers.map(freelancer => {
    const newRow = document.createElement("tr");

    const name = document.createElement("td");
    name.innerText = freelancer.name;

    const occupation = document.createElement("td");
    occupation.innerText = freelancer.occupation;

    const price = document.createElement("td");
    price.innerText = `$${freelancer.price}`;

    newRow.append(name, occupation, price);
    return newRow;
  });

  tableBody.replaceChildren(...newRows);

  //update average pirce
  const newAverage = Math.floor(calculateAveragePrice())
  average.innerText = newAverage;
}

function addRandomFreelancer() {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation = occupations[Math.floor(Math.random() * occupations.length)];
  const price = Math.floor(Math.random() * 5000);

  freelancers.push({name, occupation, price});

  render();

  if (freelancers.length === 10) {
    clearInterval(addFreelancerIntervalId);
  }
}

// Have you written a function to calculate the average starting price of your freelancers' array?
function calculateAveragePrice() {
  const total = freelancers.reduce((accum, current) => accum + current.price, 0);
  return total / freelancers.length
}