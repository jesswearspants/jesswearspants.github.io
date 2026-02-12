function moveToQuestion(current_question_number, next_question_number) {
  document.getElementById('q' + current_question_number).classList.add('hidden');
  document.getElementById('q' + next_question_number).classList.remove('hidden');
}

function moveToFinalQuestion() {
  document.getElementById('q4').classList.add('hidden');
  document.getElementById('final-q').classList.remove('hidden');
}

function transitionImageToQuestions(current_question_number, next_question_number, image_id) {
  const imageElement = document.getElementById(image_id);
  const durationInMilliseconds = 3000; // 3 seconds

  document.getElementById('question-container').classList.add('hidden');

  // Show the image
  imageElement.style.display = 'block';
  imageElement.style.animation = 'shrink 3s ease-out forwards';

  // Set a timeout to hide the image after the specified duration
  setTimeout(function() {
      imageElement.style.display = 'none';
      document.getElementById('question-container').classList.remove('hidden');
      moveToQuestion(current_question_number, next_question_number);
  }, durationInMilliseconds);
}