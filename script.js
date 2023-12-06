    let currentQuestion = 1;
    const totalQuestions = 4; // Update this with the total number of questions
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
    function previousQuestion() {
        const currentQuestionDiv = document.getElementById(`question${currentQuestion}`);
        currentQuestion--;
        if (currentQuestion >= 1) {
            currentQuestionDiv.style.display = 'none';
            const previousQuestionDiv = document.getElementById(`question${currentQuestion}`);
            previousQuestionDiv.style.display = 'block';
        }
        // Reset result display if going back to questions
        document.getElementById("resultContainer").style.display = "none";
    }
    function getSelectedValue(name) {
        const selectedInput = document.querySelector(`input[name="${name}"]:checked`);
        return selectedInput ? parseInt(selectedInput.value) : 0;
    }
    function calculateScore() {
        totalScore += getSelectedValue(`answer${currentQuestion}`);
        displayResult();
    }
    function displayResult() {
        const resultContainer = document.getElementById("resultContainer");
        const resultText = document.getElementById("resultText");
        let resultMessage = "";
        if (totalScore < 5) {
            resultMessage = "You have a low risk of mental health issues.";
        } else if (totalScore < 10) {
            resultMessage = "You have a moderate risk of mental health issues. Consider seeking support.";
        } else {
            resultMessage = "You have a high risk of mental health issues. Please consult with a mental health professional.";
        }
        resultText.textContent = resultMessage + ` Your total score is ${totalScore}.`;
        resultContainer.style.display = "block";
    }