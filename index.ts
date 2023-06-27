// Front-End Code Challenge:

// Scenario:

// You are given an array of objects representing books in a library.
// Each object has the following properties:
// title (string), author (string), and categories (array of strings).
// Your task is to write a function that takes the array of books and returns an array of unique categories.

// Requirements:

// The function should be written in TypeScript.
// The output should be an array of strings, containing unique categories.
// The order of categories in the output array is not important.

// You should use efficient iteration and
// consider using JavaScript features like flatMap, Set,
// or reduce if applicable.

// Provide any necessary interfaces or types along with your solution.
// Example:

interface Book {
  title: string;
  author: string;
  categories: string[];
}

function getUniqueCategories(books: Book[]): string[] {
  // Write your code here

  const categories = books.flatMap((book) => book.categories);
  return [...new Set(categories)];
}

const library: Book[] = [
  {
    title: 'Book 1',
    author: 'Author 1',
    categories: ['Fiction', 'Adventure'],
  },
  {
    title: 'Book 2',
    author: 'Author 2',
    categories: ['Non-fiction', 'Self-help'],
  },
  {
    title: 'Book 3',
    author: 'Author 3',
    categories: ['Fiction', 'Mystery'],
  },
];

const uniqueCategories = getUniqueCategories(library);
console.log(uniqueCategories);
// Output: ['Fiction', 'Adventure', 'Non-fiction', 'Self-help', 'Mystery']
