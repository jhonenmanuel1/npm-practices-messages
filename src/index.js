const messages = [
    "Jhon",
    "Pedro",
    "Mariana",
    "Juanito",
    "Katy",
    "Sony"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
  };
  
  module.exports = { randomMsg };
  