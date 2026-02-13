let num_backpacks = 0;
let total_cost = 0;
const backpack_price = 8;

function moveToQuestion(current_question_number, next_question_number, buy_backpack=false) {
  document.getElementById('q' + current_question_number).classList.add('hidden');
  document.getElementById('q' + next_question_number).classList.remove('hidden');
  if (buy_backpack) {
    buyBackpack();
  }
}

function moveToFinalQuestion() {
  document.getElementById('q4').classList.add('hidden');
  document.getElementById('final-q').classList.remove('hidden');
}

function transitionImageToQuestions(current_question_number, next_question_number, image_id, animation) {
  const imageElement = document.getElementById(image_id);
  const durationInMilliseconds = 3000; // 3 seconds

  document.getElementById('question-container').classList.add('hidden');

  imageElement.style.display = 'block';
  imageElement.style.animation = animation;

  setTimeout(function() {
      imageElement.style.display = 'none';
      document.getElementById('question-container').classList.remove('hidden');
      moveToQuestion(current_question_number, next_question_number);
  }, durationInMilliseconds);
}

function shrinkTransitionImageToQuestions(current_question_number, next_question_number, image_id) {
  const animation = 'shrink 3s ease-out forwards';
  transitionImageToQuestions(current_question_number, next_question_number, image_id, animation);
}

function fadeTransitionImageToQuestions(current_question_number, next_question_number, image_id) {
  const animation = 'fade 3s infinite alternate';
  transitionImageToQuestions(current_question_number, next_question_number, image_id, animation);
}

function buyBackpack() {
  num_backpacks++;
  total_cost = total_cost + backpack_price;

  var num_backpacks_element = document.getElementById("num-backpacks");
  num_backpacks_element.innerHTML = num_backpacks.toString();

  var total_cost_element = document.getElementById("total-cost");
  total_cost_element.innerHTML = "$" + total_cost.toString();
}