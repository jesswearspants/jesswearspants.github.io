function moveToQuestion(current_question_number, next_question_number) {
  console.log("Current question number: " + current_question_number);
  console.log("Next question number: " + next_question_number);
  if (next_question_number == -1) {
    return;
  }
  document.getElementById('q' + current_question_number).classList.add('hidden');
  document.getElementById('q' + next_question_number).classList.remove('hidden');
}

function moveToFinalQuestion() {
  document.getElementById('q4').classList.add('hidden');
  document.getElementById('final-q').classList.remove('hidden');
}