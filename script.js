const buttons = document.querySelectorAll(".faq-toggle");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const faqItem = button.closest(".faq-item");

    const answer = faqItem.querySelector(".faq-answer");

    answer.classList.toggle("showText");

    const isOpen = answer.classList.contains("showText");
    const icon = button.querySelector("img");
    if (isOpen) {
      icon.src = "./resources/assets/images/icon-minus.svg";
    } else {
      icon.src = "./resources/assets/images/icon-plus.svg";
    }
  });
});
