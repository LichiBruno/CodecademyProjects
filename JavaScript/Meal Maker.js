const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizerIn) {
    return this._courses.appetizers = appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(mainIn) {
    return this._courses.mains = mains;
  },
  get desserts() {
    return this._courses.desserts
  },
  set desserts(dessertIn) {
    return this._courses.desserts = desserts;
  },
  get courses(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    };
  },
addDishToCourse(courseName, dishName, dishPrice) {
  const dish = {
    name: dishName,
    price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIn = Math.floor(Math.random() * dishes.length);
    return dishes[randomIn];
  },
  generateRandomMeal() {
    const appetizers = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizers.price + mains.price + desserts.price;
    return `Your meal is: ${appetizers.name}, ${mains.name}, and ${desserts.name}. The total price is: $${totalPrice}.`
  }
};
menu.addDishToCourse('appetizers', 'Fries', 2.50)
menu.addDishToCourse('appetizers', 'Empanada', 1.00)
menu.addDishToCourse('appetizers', 'Salad', 5.00)

menu.addDishToCourse('mains', 'Beef', 10.99)
menu.addDishToCourse('mains', 'Lasagna', 8.50)
menu.addDishToCourse('mains', 'Fish', 15.00)

menu.addDishToCourse('desserts', 'Ice cream', 2.00)
menu.addDishToCourse('desserts', 'Brownie', 2.75 )
menu.addDishToCourse('desserts', 'Cake', 3.00 )

const meal = menu.generateRandomMeal();
console.log(meal)