const searchInput = document.getElementById("searchInput");
const bookCards = document.querySelectorAll(".book-card");

searchInput.addEventListener("input", function () {
  const keyword = searchInput.value.toLowerCase();

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
});