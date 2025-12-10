const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");
  const toggle = item.querySelector(".faq-toggle");

  toggle.addEventListener("click", () => {

    answer.classList.toggle("show");

    if (toggle.textContent === "+") {
      toggle.textContent = "–";
    } else {
      toggle.textContent = "+";
    }
  });
});
