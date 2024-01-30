document.addEventListener("DOMContentLoaded", function() {
  const emojis = document.querySelector("#emojis");
  const hint = document.querySelector("#hint");
  const userAnswer = document.querySelector("#userAnswer");
  const feedback = document.querySelector("#feedback");
  const correctAnswer = document.querySelector("#correctAnswer");

  let randomIndex = Math.floor(Math.random() * movieEmojis.length) + 1;
  let currectQuesiton = movieEmojis[randomIndex];
  
  function randomQuestion() {
    emojis.textContent = currectQuesiton.question;
    hint.textContent = currectQuesiton.hint;
  };

  function resetUI() {
    userAnswer.value = "";
    feedback.textContent = "";
    correctAnswer.textContent = "";
  }

  randomQuestion();

  function checkAnswer() {
    const userProvidedAnswer = userAnswer.value.trim();

    if (userProvidedAnswer.toLowerCase() === currectQuesiton.answer.toLowerCase()) {
      feedback.textContent = "Correct!";
    } else {
      feedback.textContent = "Wrong!";
      correctAnswer.textContent = `The Correct Answer is ${currectQuesiton.answer}`;
    }

    randomIndex++;

    setTimeout(() => {
      resetUI();
      currectQuesiton = movieEmojis[randomIndex];
      randomQuestion();
    }, (3000));
  };

  userAnswer.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      checkAnswer();
    }
  });
})