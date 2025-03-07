const answerOptions = document.querySelector(".answer-options");
let quizCategory = "programming";

// Get random questions for selected category
const getRandomQuestion = () => {
	const categoryQuestions =
		questions.find(
			(cat) => cat.category.toLowerCase() === quizCategory.toLowerCase()
		).questions || [];

	const randomQuestion =
		categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];
	return randomQuestion;
};

// Show random question and options
const showQuestion = () => {
	const currentQuestion = getRandomQuestion();
	if (!currentQuestion) return;

	answerOptions.innerHTML = "";

	// Set question
	document.querySelector(".quiz-question").textContent =
		currentQuestion.question;

	// Create <li> element for each option
	currentQuestion.options.forEach((option) => {
		const listItem = document.createElement("li");
		listItem.classList.add("answer-option");
		listItem.textContent = option;
		answerOptions.appendChild(listItem);
	});
};

showQuestion();
