const searchInput = document.getElementById("searchInput");
const bookCards = document.querySelectorAll(".book-card");
const noResultMessage = document.getElementById("noResultMessage");

searchInput.addEventListener("input", function () {
  const keyword = searchInput.value.toLowerCase();
  let matchCount = 0;

  bookCards.forEach(function (card) {
    const title = card.querySelector(".book-title").textContent.toLowerCase();
    const author = card.querySelector(".book-author").textContent.toLowerCase();
    const genre = card.querySelector(".book-genre").textContent.toLowerCase();

    const searchText = title + " " + author + " " + genre;

    if (searchText.includes(keyword)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });

if (matchCount === 0) {
    noResultMessage.style.display = "block";
  } else {
    noResultMessage.style.display = "none";
  }
});