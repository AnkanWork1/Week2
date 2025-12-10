const questions = document.querySelectorAll(".faq-question");

questions.forEach(q => {
  q.addEventListener("click", (e) => {
    e.stopPropagation(); 
    const answer = q.nextElementSibling;
    answer.classList.toggle("show");
  });
});
