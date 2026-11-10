const heartButtons = document.querySelectorAll(".heart-button");
const savedMessage = document.querySelector(".saved-message");

heartButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const isSaved = button.classList.toggle("is-saved");
    button.setAttribute("aria-pressed", isSaved);
    button.setAttribute("aria-label", isSaved ? "Remove saved review" : "Save this review");

    const reviewNumber = index + 1;
    savedMessage.textContent = isSaved
      ? `Review ${reviewNumber} added to your favourites.`
      : `Review ${reviewNumber} removed from your favourites.`;
  });
});
