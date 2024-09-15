/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "P1",
    title: "Audi RS5",
    description:
      "A high-performance coupe with a powerful V6 Bi-Turbo engine, sporty design, and advanced technology.",
    price: 7500000, // $75,000.00
    discontinued: false,
    categories: ["c0", "c2"],
    image: "images/RS5.jpg"
  },

  {
    id: "P2",
    title: "BMW M3",
    description: "A dynamic sedan known for its agility, performance, and luxurious interior.",
    price: 7000000, // $70,000.00
    discontinued: false,
    categories: ["c0", "c1"],
    image: "images/M3.jpg"
  },

  {
    id: "P3",
    title: "Mercedes-AMG C63",
    description: "A stylish coupe offering impressive power and a refined driving experience.",
    price: 8000000, // $80,000.00
    discontinued: false,
    categories: ["c0", "c2"],
    image: "images/C63.jpg"
  },

  {
    id: "P4",
    title: "Porsche 911 Carrera",
    description: "An iconic sports car with exceptional handling and performance.",
    price: 9000000, // $90,000.00
    discontinued: false,
    categories: ["c0", "c2", "c4"],
    image: "images/911C.jpg"
  },

  {
    id: "P5",
    title: "Chevrolet Corvette C8",
    description: "A classic American sports car known for its speed, design, and value.",
    price: 6000000, // $60,000.00
    discontinued: false,
    categories: ["c0", "c2"],
    image: "images/C8.jpg"
  },

  {
    id: "P6",
    title: "Tesla Model S",
    description:
      "A leading electric sedan combining performance, range, and cutting-edge technology.",
    price: 8000000, // $80,000.00
    discontinued: false,
    categories: ["c0", "c1", "c5"],
    image: "images/Model-S.jpg"
  },

  {
    id: "P7",
    title: "Jaguar F-Type",
    description:
      "A sleek and powerful coupe delivering thrilling performance and head-turning style.",
    price: 7000000, // $70,000.00
    discontinued: false,
    categories: ["c0", "c2"],
    image: "images/F-type.jpg"
  },

  {
    id: "P8",
    title: "Ford Mustang GT",
    description: "An iconic muscle car with a robust V8 engine and an aggressive design.",
    price: 5500000, // $55,000.00
    discontinued: false,
    categories: ["c0", "c2"],
    image: "images/GT.jpg"
  },

  {
    id: "P9",
    title: "Range Rover Sport",
    description: "A luxury SUV offering a blend of performance, comfort, and off-road capability.",
    price: 8500000, // $85,000.00
    discontinued: false,
    categories: ["c0", "c3"],
    image: "images/Rover.jpg"
  },

  {
    id: "P10",
    title: "BMW Z4",
    description:
      "A convertible sports car offering a blend of elegance, sportiness, and open-top driving pleasure.",
    price: 6500000, // $65,000.00
    discontinued: false,
    categories: ["c0", "c4"],
    image: "images/Z4.jpg"
  },

  {
    id: "P11",
    title: "Audi RS3",
    description:
      "A compact sports sedan with a turbocharged engine, sporty design, and advanced technology.",
    price: 6000000, // $60,000.00
    discontinued: true,
    categories: ["c0", "c1"],
    image: "images/RS3.jpg"
  },

  {
    id: "P12",
    title: "Mercedes-Benz E-Class Cabriolet",
    description: "A luxurious convertible with a sleek design and powerful performance.",
    price: 8000000, // $80,000.00
    discontinued: false,
    categories: ["c0", "c4"],
    image: "images/E-Class.jpg"
  },

  {
    id: "P13",
    title: "Porsche Taycan",
    description:
      "A high-performance electric sedan with cutting-edge technology and thrilling performance.",
    price: 9500000, // $95,000.00
    discontinued: false,
    categories: ["c0", "c1", "c5"],
    image: "images/Taycan.jpg"
  },

  {
    id: "P14",
    title: "Lexus LC 500",
    description: "A luxury coupe with a stunning design and a powerful V8 engine.",
    price: 9200000, // $92,000.00
    discontinued: false,
    categories: ["c0", "c2"],
    image: "images/LC500.jpg"
  },

  {
    id: "P15",
    title: "Audi Q8",
    description: "A luxury SUV with a bold design, spacious interior, and advanced technology.",
    price: 8500000, // $85,000.00
    discontinued: false,
    categories: ["c0", "c3"],
    image: "images/Q8.jpg"
  },

  {
    id: "P16",
    title: "Chevrolet Camaro",
    description: "A classic American muscle car with modern design and powerful performance.",
    price: 5200000, // $52,000.00
    discontinued: false,
    categories: ["c0", "c2"],
    image: "images/Camaro.jpg"
  },

  {
    id: "P17",
    title: "Jaguar I-PACE",
    description: "A luxury electric SUV with sporty performance and cutting-edge technology.",
    price: 7000000, // $70,000.00
    discontinued: false,
    categories: ["c0", "c3", "c5"],
    image: "images/I-Pace.jpg"
  },

  {
    id: "P18",
    title: "BMW i8",
    description: "A plug-in hybrid sports car with futuristic design and innovative technology.",
    price: 14000000, // $140,000.00
    discontinued: true,
    categories: ["c0", "c2", "c5"],
    image: "images/i8.jpg"
  },

  {
    id: "P19",
    title: "Tesla Model X",
    description: "A high-performance electric SUV with advanced features and impressive range.",
    price: 9000000, // $90,000.00
    discontinued: false,
    categories: ["c0", "c3", "c5"],
    image: "images/Model-X.jpg"
  },

  {
    id: "P20",
    title: "Aston Martin DB11",
    description: "A luxury grand tourer with a stunning design and powerful performance.",
    price: 20000000, // $200,000.00
    discontinued: false,
    categories: ["c0", "c2"],
    image: "images/DB11.jpg"
  }
];
