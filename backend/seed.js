const dotenv = require('dotenv');
const connectDB = require('./config/db');
const User = require('./models/user');
const Recipe = require('./models/recipe');
const Ingredient = require('./models/ingredient');
const Process = require('./models/process');

dotenv.config();

const dataUser = [
  {
    _id: '5f9d80a52c521e2bac9f9a73',
    name: 'John Doe',
    userId: 'johndoe123',
    password: '12345',
  },
  {
    _id: '5f9d80a52c521e2bac9f9a74',
    name: 'Jane Smith',
    userId: 'janesmith456',
    password: '12345',
  },
  {
    _id: '5f9d80a52c521e2bac9f9a75',
    name: 'Bob Johnson',
    userId: 'bobjohnson789',
    password: '12345',
  },
];

const dataRecipe = [
  {
    _id: '5f9d8ca52c521e2bac9f9a73',
    name: 'Spaghetti Bolognese',
    description:
      'A classic Italian dish made with ground beef, tomatoes, and spaghetti pasta.',
    imageUrl:
      'https://res.cloudinary.com/cloud-for-web-apps/image/upload/v1673718695/recipes/spaghetti-bolognese.jpg',
    creator: '5f9d80a52c521e2bac9f9a73',
  },
  {
    _id: '5f9d8ca52c521e2bac9f9a74',
    name: 'Chicken Tikka Masala',
    description:
      'A popular Indian dish made with marinated chicken cooked in a spicy tomato-based sauce.',
    imageUrl:
      'https://res.cloudinary.com/cloud-for-web-apps/image/upload/v1673718695/recipes/chicken-tikka-masala.jpg',
    creator: '5f9d80a52c521e2bac9f9a74',
  },
  {
    _id: '5f9d8ca52c521e2bac9f9a75',
    name: 'Pad Thai',
    description:
      'A popular Thai dish made with stir-fried rice noodles, vegetables, and peanuts.',
    imageUrl:
      'https://res.cloudinary.com/cloud-for-web-apps/image/upload/v1673718695/recipes/pad-thai.jpg',
    creator: '5f9d80a52c521e2bac9f9a75',
  },
  {
    _id: '5f9d8ca52c521e2bac9f9a76',
    name: 'Tomato Soup',
    description: 'A classic soup made with tomatoes, onions, and garlic.',
    imageUrl:
      'https://res.cloudinary.com/cloud-for-web-apps/image/upload/v1673718695/recipes/tomato-soup.jpg',
    creator: '5f9d80a52c521e2bac9f9a73',
  },
  {
    _id: '5f9d8ca52c521e2bac9f9a77',
    name: 'Tacos',
    description:
      'A popular Mexican dish made with seasoned beef and topped with cheese, lettuce, and salsa.',
    imageUrl:
      'https://res.cloudinary.com/cloud-for-web-apps/image/upload/v1673718695/recipes/tacos.jpg',
    creator: '5f9d80a52c521e2bac9f9a74',
  },
  {
    _id: '5f9d8ca52c521e2bac9f9a78',
    name: 'Sushi',
    description:
      'A Japanese dish made with vinegared rice and various toppings such as fish and vegetables.',
    imageUrl:
      'https://res.cloudinary.com/cloud-for-web-apps/image/upload/v1673718695/recipes/sushi.jpg',
    creator: '5f9d80a52c521e2bac9f9a75',
  },
];

const dataRecipeIngredients = [
  {
    _id: '5f9d8da52c521e2bac9f9a73',
    item: 'Ground beef',
    amount: 1,
    unit: 'pound',
    recipe: '5f9d8ca52c521e2bac9f9a73',
  },
  {
    _id: '5f9d8da52c521e2bac9f9a74',
    item: 'Tomatoes',
    amount: 2,
    unit: 'pounds',
    recipe: '5f9d8ca52c521e2bac9f9a73',
  },
  {
    _id: '5f9d8da52c521e2bac9f9a75',
    item: 'Spaghetti pasta',
    amount: 1,
    unit: 'pound',
    recipe: '5f9d8ca52c521e2bac9f9a73',
  },
  {
    _id: '5f9d8da52c521e2bac9f9a76',
    item: 'Chicken breast',
    amount: 2,
    unit: 'pounds',
    recipe: '5f9d8ca52c521e2bac9f9a74',
  },
  {
    _id: '5f9d8da52c521e2bac9f9a77',
    item: 'Tomato sauce',
    amount: 2,
    unit: 'cups',
    recipe: '5f9d8ca52c521e2bac9f9a74',
  },
  {
    _id: '5f9d8da52c521e2bac9f9a78',
    item: 'Rice noodles',
    amount: 1,
    unit: 'pound',
    recipe: '5f9d8ca52c521e2bac9f9a75',
  },
  {
    _id: '5f9d8da52c521e2bac9f9a79',
    item: 'Tomatoes',
    amount: 2,
    unit: 'pounds',
    recipe: '5f9d8ca52c521e2bac9f9a76',
  },
  {
    _id: '5f9d8da52c521e2bac9f9a80',
    item: 'Onions',
    amount: 2,
    unit: 'medium',
    recipe: '5f9d8ca52c521e2bac9f9a76',
  },
  {
    _id: '5f9d8da52c521e2bac9f9a81',
    item: 'Garlic',
    amount: 4,
    unit: 'cloves',
    recipe: '5f9d8ca52c521e2bac9f9a76',
  },
  {
    _id: '5f9d8da52c521e2bac9f9a82',
    item: 'Beef',
    amount: 2,
    unit: 'pounds',
    recipe: '5f9d8ca52c521e2bac9f9a77',
  },
  {
    _id: '5f9d8da52c521e2bac9f9a83',
    item: 'Tortillas',
    amount: 12,
    unit: 'each',
    recipe: '5f9d8ca52c521e2bac9f9a77',
  },
  {
    _id: '5f9d8da52c521e2bac9f9a84',
    item: 'Rice vinegar',
    amount: 3,
    unit: 'tablespoons',
    recipe: '5f9d8ca52c521e2bac9f9a78',
  },
  {
    _id: '5f9d8da52c521e2bac9f9a85',
    item: 'Soy sauce',
    amount: 2,
    unit: 'tablespoons',
    recipe: '5f9d8ca52c521e2bac9f9a78',
  },
  {
    _id: '5f9d8da52c521e2bac9f9a86',
    item: 'Norwegian salmon',
    amount: 8,
    unit: 'ounces',
    recipe: '5f9d8ca52c521e2bac9f9a78',
  },
];

const dataProcess = [
  {
    _id: '5f9d8ea52c521e2bac9f9a73',
    step: 'In a large pot, brown the ground beef over medium-high heat.',
    recipe: '5f9d8ca52c521e2bac9f9a73',
  },
  {
    _id: '5f9d8ea52c521e2bac9f9a74',
    step: 'Add the tomatoes and bring the mixture to a simmer.',
    recipe: '5f9d8ca52c521e2bac9f9a73',
  },
  {
    _id: '5f9d8ea52c521e2bac9f9a75',
    step: 'Cook the spaghetti pasta according to package instructions and add it to the pot with the beef and tomato mixture.',
    recipe: '5f9d8ca52c521e2bac9f9a73',
  },
  {
    _id: '5f9d8ea52c521e2bac9f9a76',
    step: 'Marinate chicken breast in yogurt and spices for at least 30 minutes.',
    recipe: '5f9d8ca52c521e2bac9f9a74',
  },
  {
    _id: '5f9d8ea52c521e2bac9f9a77',
    step: 'Cook the marinated chicken in a pan until fully cooked.',
    recipe: '5f9d8ca52c521e2bac9f9a74',
  },
  {
    _id: '5f9d8ea52c521e2bac9f9a78',
    step: 'Add tomato sauce and let it simmer for 10 minutes.',
    recipe: '5f9d8ca52c521e2bac9f9a74',
  },
  {
    _id: '5f9d8ea52c521e2bac9f9a79',
    step: 'Cook the rice noodles according to package instructions.',
    recipe: '5f9d8ca52c521e2bac9f9a75',
  },
  {
    _id: '5f9d8ea52c521e2bac9f9a80',
    step: 'Stir-fry the cooked noodles with vegetables and peanuts.',
    recipe: '5f9d8ca52c521e2bac9f9a75',
  },
  {
    _id: '5f9d8ea52c521e2bac9f9a81',
    step: 'Blend the tomatoes, onions and garlic together until smooth.',
    recipe: '5f9d8ca52c521e2bac9f9a76',
  },
  {
    _id: '5f9d8ea52c521e2bac9f9a82',
    step: 'Heat the blended mixture in a pot and let it simmer for 20 minutes.',
    recipe: '5f9d8ca52c521e2bac9f9a76',
  },
  {
    _id: '5f9d8ea52c521e2bac9f9a83',
    step: 'Brown the beef in a pan over medium-high heat.',
    recipe: '5f9d8ca52c521e2bac9f9a77',
  },
  {
    _id: '5f9d8ea52c521e2bac9f9a84',
    step: 'Warm the tortillas in a dry skillet over medium heat.',
    recipe: '5f9d8ca52c521e2bac9f9a77',
  },
  {
    _id: '5f9d8ea52c521e2bac9f9a85',
    step: 'Assemble the tacos by adding beef, cheese, lettuce, and salsa to the warm tortillas.',
    recipe: '5f9d8ca52c521e2bac9f9a77',
  },
  {
    _id: '5f9d8ea52c521e2bac9f9a88',
    step: 'Cut the Norwegian salmon into thin slices.',
    recipe: '5f9d8ca52c521e2bac9f9a78',
  },
  {
    _id: '5f9d8ea52c521e2bac9f9a89',
    step: 'Assemble the sushi by placing a slice of salmon on top of a small ball of sushi rice.',
    recipe: '5f9d8ca52c521e2bac9f9a78',
  },
  {
    _id: '5f9d8ea52c521e2bac9f9a90',
    step: 'Serve the sushi with soy sauce and wasabi on the side.',
    recipe: '5f9d8ca52c521e2bac9f9a78',
  },
];

async function seed() {
  await connectDB();

  await User.deleteMany({});
  await Recipe.deleteMany({});
  await Ingredient.deleteMany({});
  await Process.deleteMany({});

  dataUser.map(async (userData) => {
    const user = new User(userData);
    await user.save();
  });
  await Recipe.insertMany(dataRecipe);
  await Ingredient.insertMany(dataRecipeIngredients);
  await Process.insertMany(dataProcess);

  console.info('Insertion of data has been successful!');
  process.exit(1);
}

seed();
