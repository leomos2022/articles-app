// Array of quiz questions based on the article
const quizQuestions = [
    {
      question: "Who made the announcement about humanoid robots?",
      options: ["Elon Musk", "Mark Zuckerberg", "Bill Gates", "Jeff Bezos"],
      answer: "Elon Musk"
    },
    {
      question: "What is the name of Tesla's humanoid robot?",
      options: ["Optimus", "Atlas", "Figure 01", "Phoenix"],
      answer: "Optimus"
    },
    {
      question: "Which companies, besides Tesla, are developing humanoid robots?",
      options: ["Boston Dynamics", "Figure AI", "Sanctuary AI", "All of the above"],
      answer: "All of the above"
    },
    {
      question: "What is one of the physical capabilities of humanoid robots mentioned in the article?",
      options: ["Fly", "Swim", "Walk and jump", "Teleport"],
      answer: "Walk and jump"
    },
    {
      question: "What are humanoid robots primarily projected to be used for?",
      options: ["Cooking food", "Performing repetitive and dangerous tasks in factories", "Playing video games", "Driving cars"],
      answer: "Performing repetitive and dangerous tasks in factories"
    },
    {
      question: "What engineering challenge is mentioned regarding humanoid robots?",
      options: ["Autonomous driving", "Flexible bipedal locomotion", "Facial recognition", "Natural language processing"],
      answer: "Flexible bipedal locomotion"
    },
    {
      question: "What limitation do humanoid robots' tactile capabilities have compared to humans?",
      options: ["They are more sensitive", "They have only a few points of contact like fingertips", "They have no tactile capabilities", "They are identical to human capabilities"],
      answer: "They have only a few points of contact like fingertips"
    },
    {
      question: "What is one reason humanoid robots are designed to look human?",
      options: ["It is aesthetically pleasing", "Facilitates integration into environments adapted to the human body", "Easier to program", "There is no reason"],
      answer: "Facilitates integration into environments adapted to the human body"
    },
    {
      question: "What impact might the proliferation of stronger humanoid robots have on society?",
      options: ["Reduction of the technological divide", "Perpetuation of the divide due to superior capabilities", "It would have no impact", "Increase in human empathy"],
      answer: "Perpetuation of the divide due to superior capabilities"
    },
    {
      question: "What term is used to describe the vision of humanoid robots as a challenging but ambitious goal?",
      options: ["Lunar goal", "Moon shot", "Earthly goal", "Solar project"],
      answer: "Moon shot"
    }
];

let score = 0;

// Function to display the quiz questions
function displayQuiz() {
    const quizContainer = document.getElementById('quiz-container');

    quizQuestions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');

        const questionText = document.createElement('p');
        questionText.textContent = `${index + 1}. ${q.question}`;
        questionElement.appendChild(questionText);

        q.options.forEach(option => {
            const optionContainer = document.createElement('div');
            optionContainer.classList.add('option');

            const input = document.createElement('input');
            input.type = 'radio';
            input.id = `q${index}_option_${option}`;
            input.name = `question${index}`;
            input.value = option;

            const label = document.createElement('label');
            label.htmlFor = `q${index}_option_${option}`;
            label.textContent = option;

            optionContainer.appendChild(input);
            optionContainer.appendChild(label);

            questionElement.appendChild(optionContainer);
        });

        quizContainer.appendChild(questionElement);
    });
}

// Function to calculate the score
function calculateScore() {
    score = 0;
    quizQuestions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });

    displayScore();
}

// Function to show the score
function displayScore() {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `You scored ${score} out of ${quizQuestions.length}.`;
    scoreElement.classList.remove('hidden'); // Show score after submission
}

// Event listener for the submit button
document.getElementById('submit-quiz').addEventListener('click', calculateScore);

// Initialize the quiz on page load
window.onload = displayQuiz;
