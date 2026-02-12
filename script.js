function moveToQuestion(current_question_number, next_question_number) {
  document.getElementById('q' + current_question_number).classList.add('hidden');
  document.getElementById('q' + next_question_number).classList.remove('hidden');
}

function moveToFinalQuestion() {
  document.getElementById('q4').classList.add('hidden');
  document.getElementById('final-q').classList.remove('hidden');
}