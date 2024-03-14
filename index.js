// A visitor enters the website and finds a list of available freelancers. Each freelancer has a name, an occupation, and a starting price for their services. They observe on the list Alice, the writer with a starting price of $30, and Bob, who is a teacher, has a starting price of $50.

// The visitor also finds a message that displays the average starting price of all the freelancers. In this example, the average starting price is $40.

// A few seconds later, a new listing appears for a freelancer named Carol, who is a programmer and has a starting price of $70. The average starting price is updated to $50.

// New freelancers continue to appear every few seconds, and the average starting price is updated accordingly.

// freelancers
// array of objects
const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

// include a max count of freelancers
const  = 10;

// every few seconds a new freelancers will be added to the available freelancers
//        add set interval to 3000 few seconds
const  = setInterval(addShape, 3000);

// define arrays for possible names and occupations

// define initial array of freelancers

// determine how to display freelancers information

// write a function to render the initial freelancers data

// write a function to generate a random freelancer
//         is this function being called in an interval

// write a function to calculate the average starting price of the freelancers array
//         when should this function be called to update the displayed message

// state
// The program initializes an array of possible names and an array of possible occupations.\

// The program initializes an array of at least two freelancers with names, occupations, and starting prices.

// functionality
// The initial array of freelancers is rendered onto the page.

// A function is written that correctly calculates the average starting price of the freelancers array.

// A function is written that generates a freelancer with a random name, occupation, and starting price. This object is pushed into the freelancers array.

// An interval is set to add a freelancer and rerender every few seconds.

// DOM
// The DOM is updated to reflect the average starting price.

// `document.querySelector` is correctly used to select existing DOM elements.
