function createPizza() {
  return {
    description: "Plain Pizza",
    price: 10,
  };
}

function addTopping(topping) {
  return function (pizza) {
    const newDescription = `${pizza.description} with ${topping.name}`;
    const newPrice = pizza.price + topping.price;

    return {
      description: newDescription,
      price: newPrice,
    };
  };
}

const cheeseTopping = { name: "Cheese", price: 2 };
const pepperoniTopping = { name: "Pepperoni", price: 3 };
const MatijasPizza = addTopping(pepperoniTopping)(
  addTopping(cheeseTopping)(createPizza())
);

console.log(
  "MatijaPizza: ",
  MatijasPizza.description,
  "\n",
  "Price: ",
  MatijasPizza.price,
  "\n"
);
