// //console.log('Hello World')

// //this is a comment, same as C
// /* multi line comment
// is also the same as C */


// // var declares variable
// // var person;
// // var person = "john"
// // person;

// // console.log("hello" + "person")

// // var petDog = 'Rex'; // Task 1 solution
// // console.log(petDog);

// // var petDog = 'Rex'; // Task 1 solution
// // console.log("My pet dog's name is: " + petDog);

// // var petCat = 'Pepper'; // Task 2 solution
// // var catSound = "purr"; // Task 7 solution
// // console.log(petCat, "says", catSound);

// // for (i = 0; i < 2; i++) {
// //     for (var j = 0; j < 3; j++) {
// //         console.log("Hello");
// //     }
// // }

// // var i = 0;
// // while(i < 3) {
// //   console.log("Hello");
// //   i++;
// // }

// // if(i <= 5) {
// //     console.log("Hello");
// //   } else if(i <= 10) {
// //     console.log("Goodnight");
// //   } else {
// //     console.log("Goodbye");
// //   }

// //   var result = null;
// //   console.log(result);

// //   try {
// //     console.log('Hello');
// //   } catch(err) {
// //     console.log('Goodbye');
// //   }


// //   var x;

// //   if(x === null) {
// //     console.log("null");
// //   } else if(x === undefined) {
// //     console.log("undefined");
// //   } else {
// //     console.log("ok");
// //   }



// //   try {
// //     throw new Error();
// //     console.log('Hello');
// //   } catch(err) {
// //     console.log('Goodbye');
// //   }

// //   function add(a, b) {
// //     console.log(a + b)
// //   }

// //   add(3, "4");

// //   var str = "Hello";
// //   str.match("jello");

// //   try {
// //     Number(5).toPrecision(300)
// //     } catch(e) {
// //     console.log("There was an error")
// //     }

// //     // function meal(animal) {
// //     //     animal.food = animal.food + 10;
// //     // }

// //     // var dog = {
// //     //     food: 10
// //     // };
// //     // meal(dog);
// //     // meal(dog);

// //     console.log(dog.food);

// //     class Cake {
// //         constructor(lyr) {
// //             this.layers = lyr + 1;
// //         }
// //     }

// //     var result = new Cake(1);
// //     console.log(result.layers);

// //     class Animal {
// //         constructor(lg) {
// //             this.legs = lg;
// //         }
// //     }

// //     class Dog extends Animal {
// //         constructor() {
// //             super(4);
// //         }
// //     }

// //     var result = new Dog();
// //     console.log(result.legs);



// //     class Cat extends Animal {
// //       constructor() {
// //         super();
// //         this.noise = "meow";
// //       }
// //     }

// //     var result = new Animal();
// //     console.log(result.noise);


//     const meal = ["soup", "steak", "ice cream"]
//     let [starter] = meal;
//     console.log(starter);

//     let obj = {
//         key: 1,
//         value: 4
//     };

//     let output = { ...obj };
//     output.value -= obj.key;

//     console.log(output.value);

//     function count(...basket) {
//         console.log(basket.length)
//     }

//     count(10, 9, 8, 7, 6);


//     function scopeTest() {
//         var y = 44;

//         console.log(x);
//     }

//     var x = 33;
//     scopeTest();

//     class Cake {
//         constructor(lyr) {
//             this.layers = lyr;
//         }

//         getLayers() {
//             return this.layers;
//         }
//     }

//     class WeddingCake extends Cake {
//         constructor() {
//             super(2);
//         }

//         getLayers() {
//             return super.getLayers() * 5;
//         }
//     }

//     var result = new WeddingCake();
//     console.log(result.getLayers());

    
//     class Animal {

//     }

//     class Dog extends Animal {
//         constructor() {
//             super();
//             this.noise = "bark";
//         }

//         makeNoise() {
//           return this.noise;
//         }
//     }

//     class Wolf extends Dog {
//         constructor() {
//             super();
//             this.noise = "growl";
//         }
//     }

//     var result = new Wolf();
//     console.log(result.makeNoise());

//     function count(...food) {
//         console.log(food.length)
//     }

//     count("Burgers", "Fries", null);

//     const letter = "a"
// letter = "b"

var x = 2;
x += 5;
console.log(x);

var result;
console.log(result);
result = 7;


var car = { mileage: 200 }
var carMileage = 100
console.log(car.mileage)

var result = 0;

for(var i = 0; i < 5; i++) {
    result += 2;
}

console.log(result);

var message = "Hello";
message += " World!";
message = "Goodbye!";
console.log(message);

var x = 10;

if(x > 10) {
    console.log("Apple");
} else if(x > 5) {
    console.log("Pear");
} else {
    console.log("Orange");
}


var result = 0;

var i = 0;
var limit = 3;
while(i < limit) {
    result += 2;
    i++;
}

console.log(result);


var veggies = []
veggies.push('parsley')
veggies.push('carrot')
console.log(veggies[2])






