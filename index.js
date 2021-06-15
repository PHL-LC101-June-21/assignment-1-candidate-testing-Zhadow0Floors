// const quiz = require('./candidate-testing');

// quiz.runProgram();

const input = require('readline-sync');

questions = ["1) Who was the first American woman in space? ", "2) True or false: 5 kilometer == 5000 meters? ", "3) (5 + 3)/2*10) = ", "4) Given the array [8, 'Orbit', 'Trajectory', 45]. What entry is at index 2? ", "5) What is the minimum crew size for the ISS? "];

correctAnswer = ["Sally Ride", "true", "40", "Trajectory", "3"];

let numberOfCorrectAnswers = 0;
let numberOfQuizQuestions = 5;
let grade = (numberOfCorrectAnswers) / (numberOfQuizQuestions) * 100;

candidateName = input.question("Candidate Name? ");
for (i = 0; i < questions.length; i++) {
    //console.log(questions);
    answer1 = input.question(questions[0]);
    if (answer1 == correctAnswer[0]){
      console.log("Your answer: " + answer1);
      console.log("Correct Answer: " + correctAnswer[0]);
      numberOfCorrectAnswers+=1;
     } else {
        console.log("Correct Answer: " + correctAnswer[0]);
        console.log("Your answer: " + answer1);
      }
      console.log("\n");
    answer2 = input.question(questions[1]);
    if (answer2 == correctAnswer[1]){
      console.log("Your answer: " + answer2);
      console.log("Correct Answer: " + answer2);
      numberOfCorrectAnswers+=1;
    } else {
      console.log("Correct Answer: " + correctAnswer[1]);
      console.log("Your answer: " + answer2);
    }
    console.log("\n");
    answer3 = input.question(questions[2]);
    if (answer3 == correctAnswer[2]){
      console.log("Your answer: " + answer3);
      console.log("Correct Answer: " + correctAnswer[2]);
      numberOfCorrectAnswers+=1;
    } else {
      console.log("Correct Answer: " + correctAnswer[2]);
      console.log("Your answer: " + answer3);
    }
    console.log("\n");
    answer4 = input.question(questions[3]);
    if (answer4 == correctAnswer[3]){
      console.log("Your Answer: " + correctAnswer[3]);
      console.log("Correct Answer: " + correctAnswer[3]);
      numberOfCorrectAnswers+=1;
    } else {
      console.log("Correct Answer: " + correctAnswer[3]);
      console.log("Your answer: " + answer4);
    }
    console.log("\n");
    answer5 = input.question(questions[4]);
    if (answer5 == correctAnswer[4]){
      console.log("Your Answer: " + correctAnswer[4]);
      console.log("Correct Answer: " + correctAnswer[4]);
      numberOfCorrectAnswers+=1;
    } else {
      console.log("Correct Answer: " + correctAnswer[4]);
      console.log("Your answer: " + answer5);
    }
    grade = numberOfCorrectAnswers / numberOfQuizQuestions * 100;
    console.log(">>> Overall Grade: " + grade + "%" + " (" + numberOfCorrectAnswers + " of " + numberOfQuizQuestions + " responses correct)");

    if (grade >= 60){
      console.log(">>> Status: PASSED <<<");
    } else {
      console.log(">>> Status: FAILED <<<");
    }
    break;
}

