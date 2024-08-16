function processBooks(books, callback) {

    const titles = books.map(book => book.title);
    callback(titles);
}

function Inalpha(titles) {

    const sortedTitles = titles.sort();
    console.log("Book Titles in Alphabetical Order:");
    sortedTitles.forEach(title => console.log(title));
}

const books = [
    { title: "Gitanjali", author: " Rabindranath Tagore", year: 1910 },
    { title: "The Guide", author: "R.K. Narayan", year: 1958 },
    { title: "Harry Potter and the Philosopher's Stone", author: "J.K.Rowling", year: 1997 },
];
processBooks(books, Inalpha);
