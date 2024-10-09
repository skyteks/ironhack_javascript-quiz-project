class Quiz {
    constructor(questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    getQuestion() {
        return this.questions[this.currentQuestionIndex];
    }

    moveToNextQuestion() {
        this.currentQuestionIndex++;
    }

    shuffleQuestions() {
        /* Randomize array in-place using Durstenfeld shuffle algorithm */
        for (var i = this.questions.length - 1; i >= 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.questions[i];
            this.questions[i] = this.questions[j];
            this.questions[j] = temp;
        }
    }

    checkAnswer(answer) {
        if (answer == this.questions[this.currentQuestionIndex].answer) {
            this.correctAnswers++;
        }
    }

    hasEnded() {
        return !(this.currentQuestionIndex < this.questions.length);
    }
}