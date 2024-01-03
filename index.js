var quiz = {
  //An array of objects holding the question, answer and option for users
  data: [
    {
      question: "What is Computer Coding?",
      option: [
        "List of Functions",
        "TV show",
        "Tells a computer what to do",
        "radio show",
      ],
      answer: 2, // arrays start with 0, so answer is "Tells a computer what to do"
    },
    {
      question: "Which of these is not a Programming Language?",
      option: ["Ruby", "Python", "Banana", "Java"],
      answer: 2,
    },
    {
      question:
        "What is the primary purpose of forking a repository in a collaborative development workflow?",
      option: [
        "Create a backup copy of the repository",
        "Contribute changes to someone else's project without directly modifying the original",
        "Automatically synchronize changes between repositories",
        "Archive a repository and make it read-only",
      ],
      answer: 1,
    },
    {
      question: "Which of the following defines an Algorithm?",
      option: [
        "It is a symbolic representation",
        "It is the documentation of Program Logic",
        "It is a list of sequence of steps require to solve a problem",
        "It is the actual Program code",
      ],
      answer: 2,
    },

    {
      question: "People who writes code are called what?",
      option: ["Professors", "Programmers", "Cryptographers", "Manufacturers"],
      answer: 1,
    },
    {
      question:
        "Which property is used to set the background color of an element in CSS?",
      option: ["background-color", "color", "text-color", "bgcolor"],
      answer: 0,
    },
    {
      question: "Which of this does NOT run using a computer program?",
      option: ["Bicycles", "Rockets", "Trains", "Cars"],
      answer: 0,
    },
    {
      question: "The Programming Process is what?",
      option: [
        "System-development Process",
        "Coding Process",
        "Testing Process",
        "Problem solving Process",
      ],
      answer: 3,
    },

    {
      question: "What does the '=== ' operator in JavaScript compare?",
      option: [
        "Values and data types",
        "Only values",
        "Only data types",
        "References to objects",
      ],
      answer: 0,
    },
    {
      question:
        "What is the purpose of version control systems (e.g., Git) in software development?",
      option: [
        "To write unit tests for code",
        "To optimize database queries",
        "To track changes in code and collaborate with others",
        "To design user interfaces",
      ],
      answer: 2,
    },
    {
      question: "What does incrementing mean?",
      option: [
        "Squaring",
        "Adding One",
        "Subtracting One",
        "Setting initial value",
      ],
      answer: 1,
    },
    {
      question: "What does the term 'API' stand for?",
      option: [
        "Application Programming Interface",
        "Advanced Programming Interface",
        "Application Process Integration",
        "Automated Programming Interface",
      ],
      answer: 0,
    },
    {
      question: "What is a SQL injection attack?",
      option: [
        "A method to optimize SQL queries",
        "A way to inject malicious code into a database by manipulating SQL queries",
        "A type of database indexing technique",
        "A method to create new database tables",
      ],
      answer: 1,
    },
    {
      question: "In HTML, what is the purpose of the 'dl' element?",
      option: [
        "To create a numbered list",
        "To define a description list",
        "To display a block of code",
        "To represent a division or section of a document",
      ],
      answer: 1,
    },

    {
      question: "What is the purpose of a 'git clone' command in Git?",
      option: [
        "To create a new Git repository",
        "To create a copy of a remote repository on your local machine",
        "To create a branch in a Git repository",
        "To undo the last commit in a repository",
      ],
      answer: 1,
    },
    {
      question: "What is the purpose of the 'let' keyword in JavaScript?",
      option: [
        "To declare a constant variable",
        "To declare a block-scoped variable",
        "To declare a global variable",
        "To declare a function",
      ],
      answer: 2,
    },
    {
      question: "What does 'HTML' stands for?",
      option: [
        "Home Tool Markup Language",
        "HyperLink and Textual Markup Language",
        "High-level Text Management Language",
        "HyperText Markup Language",
      ],
      answer: 3,
    },

    {
      question: "What is the purpose of 'break' statement in a loop?",
      option: [
        "To end the loop and transfer control to the next statement outside the loop",
        "To restart the loop from the beginning",
        "To skip the current iteration and move to the next one",
        "To signal an error and terminate the program",
      ],
      answer: 0,
    },
    {
      question:
        "Which CSS property is used to add rounded corners to an element?",
      option: [
        "border-round",
        "corner-radius",
        "border-radius",
        "rounded-corners",
      ],
      answer: 2,
    },
    {
      question: "Which HTML tag is used to create an hyperlink?",
      option: ["<link>", "<a>", "<hlink>", "<url>"],
      answer: 1,
    },
  ],
};


//Enabling time limit of 20 minutes
let remainingTime = 20; // 20 minutes in seconds
let timerInterval;

function updateTimerDisplay() {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  const timeElement = document.getElementById("time");
  timeElement.textContent = `Time remaining: ${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
}

function startTimer() {
  timerInterval = setInterval(function () {
    if (remainingTime > 0) {
      remainingTime--;
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
      // Handle quiz timeout (e.g., show results, submit form, etc.)
      console.log("Time's up!");
      endQuiz()
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

const start = document.getElementById("startQuiz");
const quizContainer = document.getElementById("quiz-container");
const timeElement = document.getElementById("time");

const startQuiz = () => {
  quizContainer.style.display = "block";
  timeElement.style.display = "block";
  start.style.display = "none";
};

const btnClickEventHandler = () => {
  startQuiz();
  startTimer();
};

quizContainer.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
});

start.addEventListener("click", btnClickEventHandler);

//To disable the option buttons and end the quiz when time is up
function endQuiz(){
  stopTimer();

  const scoreSection = document.getElementById("score-section")
  const resultMessage = document.getElementById("result-message")

  //Disable Buttons after time is up
  const buttons = document.querySelectorAll("#options-container button");
  buttons.forEach((button) => (button.disabled = true));

  //Show the result message
  alert("Time's Up")
  //resultMessage.innerHTML = "<span style = 'font-weight: bold; font-size: 1.5em; color: red;'>Time's Up!</span>"
  scoreSection.style.display = "block";
  showResult()
}


const warningMessage = document.getElementById("warning-message");

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options-container");
  const nextButton = document.getElementById("next-button");
  nextButton.disabled = true;
  const currentQuestionData = quiz.data[quiz.currentQuestion];

  questionElement.textContent = ` ${quiz.currentQuestion + 1}. ${
    currentQuestionData.question
  }`;

  optionsContainer.innerHTML = "";
  currentQuestionData.option.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => {
      selectOption(index);
      document.getElementById("warning-message").textContent = "";
      checkAnswer(index);
    };
    optionsContainer.appendChild(button);
  });
}

function selectOption(selectedIndex) {
  // Remove the "selected" class from all buttons
  const buttons = document.querySelectorAll("#options-container button");
  buttons.forEach((button) => button.classList.remove("selected"));

  // Add the "selected" class to the clicked button
  buttons[selectedIndex].classList.add("selected");
  document.getElementById("next-button").disabled = false;
}

function checkAnswer() {
  const selectedButton = document.querySelector(
    "#options-container button.selected"
  );
  const resultMessage = document.getElementById("result-message");

  if (!selectedButton) {
    warningMessage.textContent = "Please select an option before proceeding.";
    return;
  }
  warningMessage.textContent = "";

  const selectedIndex = Array.from(
    selectedButton.parentElement.children
  ).indexOf(selectedButton);
  const currentQuestionData = quiz.data[quiz.currentQuestion];

  if (selectedIndex === currentQuestionData.answer) {
    resultMessage.innerHTML = "<span style='font-weight: bold; font-size: 1.2em;'>Correct!</span>";   
     resultMessage.style.color = "green"
    quiz.score++;
  } else if(selectedIndex !== -1) {
    resultMessage.innerHTML = `<span style = "font-weight: bold; font-size: 1.2em; color: red;">Incorrect! </span><span style='font-weight: bold; font-size: 1.2em;'> ${
      currentQuestionData.option[currentQuestionData.answer]
    }</span>`;
  }

  // Disable buttons after the user has selected an answer
  const buttons = document.querySelectorAll("#options-container button");
  buttons.forEach((button) => (button.disabled = true));

  //If the time is exhausted, end the Quiz
  if(remainingTime === 0){
    endQuiz()
  }
}

function nextQuestion() {
  // Reset result message and enable buttons for the next question
  const resultMessage = document.getElementById("result-message");
  const scoreSection = document.getElementById("score-section");
  const nextButton = document.getElementById("next-button");

  resultMessage.textContent = "";
  warningMessage.textContent = "";
  const buttons = document.querySelectorAll("#options-container button");
  buttons.forEach((button) => {
    button.classList.remove("selected");
    button.disabled = false;
  });

  nextButton.disabled = true;

  if (quiz.currentQuestion < quiz.data.length - 1) {
    quiz.currentQuestion++;
    loadQuestion();
  } else {
    scoreSection.style.display = "block";
    showResult();
    };
  }

function showResult() {
  stopTimer();
  const tryAgainButton = document.getElementById("tryAgain");
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = `${quiz.score} out of ${quiz.data.length}`;
  const quizOverlay = document.getElementById("quizOverlay");


  const percentage = (quiz.score / quiz.data.length) * 100;
  const percentageText = document.getElementById("percentage");
  percentageText.textContent = `Percentage: ${percentage.toFixed(2)}%`;

  if (percentage >= 70) {
    scoreElement.style.color = "green";
    percentageText.style.color = "green";
    const passedMessage = document.createElement("p");
    passedMessage.textContent = "You Passed!";
    passedMessage.style.color = "green";
    tryAgainButton.style.display = "none";
    scoreElement.appendChild(passedMessage);
  } else {
    scoreElement.style.color = "red";
    percentageText.style.color = "red";
    tryAgainButton.style.display = "block";
    tryAgainButton.addEventListener("click", tryAgainClickEventHandler);
  }
  quizOverlay.style.display = "block";
  document.addEventListener("click", clickOutsideScoreSectionHandler);

}

// Function to handle clicks outside the score section
function clickOutsideScoreSectionHandler(event) {
  const scoreSection = document.getElementById("score-section");

  // Check if the clicked element is outside the score section
  if (!scoreSection.contains(event.target)) {
    // Reload the page
    location.reload();
  }
}

const tryAgainClickEventHandler = () => {
  //Clear the "Time's Up" message
  const resultMessage = document.getElementById("result-message");
  resultMessage.textContent = "";
  document.getElementById("quizOverlay").style.display = "none";
  
  // Reset and show the quiz container
  const scoreSection = document.getElementById("score-section");
  const quizContainer = document.getElementById("quiz-container");
  
  scoreSection.style.display = "none";
  quizContainer.style.display = "block";

  // Reset the quiz
  quiz.currentQuestion = 0;
  quiz.score = 0;
  loadQuestion();
  remainingTime = 1200;
  updateTimerDisplay()
  startTimer();

  document.removeEventListener("click", clickOutsideScoreSectionHandler);

};

// Initialize the quiz
quiz.currentQuestion = 0;
quiz.score = 0;
loadQuestion();

// Add event listener for 'keydown' event on the document
document.addEventListener("keydown", function (event) {
  // Check if the pressed key is 'Enter' (key code 13)
  if (event.key === "Enter") {
    // Simulate a click on the next button
    const selectedButton = document.querySelector("#options-container button.selected")
    if(selectedButton){
      nextQuestion()
    }
  }
});
