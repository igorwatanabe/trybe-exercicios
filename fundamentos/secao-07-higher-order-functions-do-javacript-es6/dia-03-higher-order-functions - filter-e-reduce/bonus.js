const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  const flatten = () => arrays.reduce((acc, cur) => acc.concat(cur), []);
  console.log(flatten());
  
  const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];

const reduceResult = () => books.reduce((acc, cur, index) => {
    if (index === books.length - 1) {
        return `${acc} ${cur.author.name}.`;
    }
    return `${acc} ${cur.author.name},`;
},'')
console.log(reduceResult());


// const expectedResult = 43;
const averageAge = () => {
    return books.map((book) => {
        return book.releaseYear - book.author.birthYear
    }).reduce((acc, cur) => acc + cur, 0)/ books.length;
  // retorne seu código aqui
}
console.log(averageAge());

// const expectedResult = {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: {
//       name: 'George R. R. Martin',
//       birthYear: 1948,
//     },
//     releaseYear: 1991,
//   };
  
  const longestNamedBook = () => books
    .reduce((acc, cur) => acc.name.length < cur.name.length ? cur : acc);

  console.log(longestNamedBook());