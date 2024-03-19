// FREELANCER FORUM

// copied freelancers array
const freelancers = [
  { name: "Dr. Slice", price: 25, job: "gardener" },
  { name: "Dr. Pressure", price: 51, job: "coder" },
  { name: "Prof. Possibility", price: 43, job: "teacher" },
  { name: "Prof. Prism", price: 81, job: "teacher" },
  { name: "Dr. Impulse", price: 43, job: "teacher" },
  { name: "Prof. Spark", price: 76, job: "coder" },
  { name: "Dr. Wire", price: 47, job: "teacher" },
  { name: "Prof. Goose", price: 72, job: "driver" },
];
// selects all spans
const averagePriceSpan = document.querySelector("span");
// selects all tbody elements
const freelancersTbody = document.querySelector("tbody");

// this function is used to calculate the average price stored in the freelance array
// gets average price
function getAveragePrice() {
  // 'total' store the sum of all freelancers prices, start at zero
  let total = 0;
  // this is a for loop that iterates over each freelancer
  for (let i = 0; i < freelancers.length; i++) {
    // inside the loop adds each preelancers price to the 'total'
    total = total + freelancers[i].price;
  }
  // loop ends calculates the average price by dividing the total
  // toFixed(2) it transforms it into a string representation with exactly two decimal places
  return (total / freelancers.length).toFixed(2);
}

// function is responsible for rendering the list of freelancers onto the webpage. lets break down what each line does
function drawFreelancers() {
  const listItems = [];
  // the loop runs as many times as there are freelancers in the array.
  for (let i = 0; i < freelancers.length; i++) {
    const listItem = document.createElement("tr");
    // listItem concatenates html strings to create a table row with three cells <td>
    listItem.innerHTML =
      "<td>" +
      freelancers[i].name +
      "</td>" +
      "<td>" +
      freelancers[i].job +
      "</td>" +
      "<td>$" +
      freelancers[i].price +
      "</td>";
    listItems.push(listItem);
  }
  freelancersTbody.innerHTML = "";
  for (let i = 0; i < listItems.length; i++) {
    freelancersTbody.appendChild(listItems[i]);
  }
  averagePriceSpan.textContent = getAveragePrice();
}
function addNewbieFreelancer() {
  if (freelancers.length < 3) {
    freelancers.push({
      name: "daniel",
      job: "professional thumb wrestler",
      price: 70,
    });

    return;
  }

  const names = ["daniel", "bob", "charlie", "david", "eve"];
  const jobs = ["gardener", "coder", "pro thumb wrestler", "driver"];
  const name = names[Math.floor(Math.random() * names.length)];
  const job = jobs[Math.floor(Math.random() * jobs.length)];
  const price = Math.floor(Math.random() * 75) + 25;

  freelancers.push({ name, job, price });
}
// 3000 milliseconds = 3 seconds
setInterval(() => {
  addNewbieFreelancer();
  drawFreelancers();
}, 3000);
