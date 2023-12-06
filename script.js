let currentQuestion = 1;
const totalQuestions = 10;
let totalScore = 0;

function nextQuestion() {
    const currentQuestionDiv = document.getElementById(`question${currentQuestion}`);
    totalScore += getSelectedValue(`answer${currentQuestion}`);
    currentQuestion++;

    if (currentQuestion <= totalQuestions) {
        currentQuestionDiv.style.display = 'none';
        const nextQuestionDiv = document.getElementById(`question${currentQuestion}`);
        nextQuestionDiv.style.display = 'block';
    } else {
        displayResult();
    }
}

function getSelectedValue(name) {
    const selectedInput = document.querySelector(`input[name="${name}"]:checked`);
    return selectedInput ? parseInt(selectedInput.value) : 0;
}

function displayResult() {
    const resultContainer = document.getElementById("resultContainer");
    const resultText = document.getElementById("resultText");

    let resultMessage = "";

    if (totalScore < 10) {
        resultMessage = "You have a low risk of depression.";
    } else if (totalScore < 20) {
        resultMessage = "You have a moderate risk of depression. Consider seeking support.";
    } else {
        resultMessage = "You have a high risk of depression. Please consult with a mental health professional.";
    }

    resultText.textContent = resultMessage + ` Your total score is ${totalScore}.`;
    resultContainer.style.display = "block";
}
