// index.js
const gadgetFactory = require('./gadgetFactory');

// Create a Laptop
const myLaptop = gadgetFactory.createGadget('Laptop', { ram: 16, ssd: 512, name: 'MacBook Pro' });

// Create a Tablet
const myTablet = gadgetFactory.createGadget('Tablet', { ram: 4, hdd: 128, name: 'iPad', network: '4G' });

// Log the created objects
console.log(myLaptop);
console.log(myTablet);
