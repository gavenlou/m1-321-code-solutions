var books = [
  {
    isbn: 'ISBN Number One',
    title: 'Book Number One',
    author: 'Author Number One'
  },
  {
    isbn: 'ISBN Number Two',
    title: 'Book Number Two',
    author: 'Author Number Two'
  },
  {
    isbn: 'ISBN Number Three',
    title: 'Book Number Three',
    author: 'Author Number Three'
  }
];
console.log(JSON.stringify(books), 'Type:', typeof JSON.stringify(books));

var student = '{"id":12345,"name":"studentName"}';
console.log(student, 'Type:', typeof student);

var result = JSON.parse(student);
console.log(result, 'Type:', typeof result);
