const searchInput = document.getElementById("searchInput");
const bookList = document.getElementById("bookList");
const noResultMessage = document.getElementById("noResultMessage");

const books = [
  {
    title: "人を動かす",
    author: "デール・カーネギー",
    genre: "自己啓発"
  },
  {
    title: "嫌われる勇気",
    author: "岸見一郎 / 古賀史健",
    genre: "心理学"
  },
  {
    title: "走れメロス",
    author: "太宰治",
    genre: "小説"
  },
  {
    title: "星の王子さま",
    author: "サン＝テグジュペリ",
    genre: "小説"
  }
];

function renderBooks(bookArray) {
  bookList.innerHTML = "";

  bookArray.forEach(function (book) {
    const bookCard = document.createElement("article");
    bookCard.classList.add("book-card");

    bookCard.innerHTML = `
      <h3 class="book-title">${book.title}</h3>
      <p class="book-author">著者: ${book.author}</p>
      <p class="book-genre">ジャンル: ${book.genre}</p>
    `;

    bookList.appendChild(bookCard);
  });

  if (bookArray.length === 0) {
    noResultMessage.style.display = "block";
  } else {
    noResultMessage.style.display = "none";
  }
}

renderBooks(books);

searchInput.addEventListener("input", function () {
  const keyword = searchInput.value.toLowerCase();

  const filteredBooks = books.filter(function (book) {
    const searchText =
      book.title.toLowerCase() +
      " " +
      book.author.toLowerCase() +
      " " +
      book.genre.toLowerCase();

    return searchText.includes(keyword);
  });

  renderBooks(filteredBooks);
});