const searchInput = document.getElementById("searchInput");
const bookCards = document.querySelectorAll(".book-card");

searchInput.addEventListener("input", function () {
  const keyword = searchInput.value.toLowerCase();

  bookCards.forEach(function (card) {
    const title = card.querySelector("h3").textContent.toLowerCase();

    if (title.includes(keyword)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});