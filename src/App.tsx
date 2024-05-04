import React, { useState, useEffect } from 'react';
import Question from './Question';
import TimesUp from './TimesUp';
import QuizCompleted from './QuizCompleted';
import fetchQuestions from './api'; // Assuming an API module exists

interface QuestionData {
  question: string;
  options: string[];
  answer: string;
  audioUrl: string;
}

const App: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const questionsData = await fetchQuestions();
        setQuestions(questionsData);
      } catch (error) {
        console.error('Error fetching questions:', error);
        // Handle error gracefully (e.g., display an error message)
      }
    };
    fetchData();
  }, []);

  const handleAnswerSubmit = (selectedOption: string) => {
    setUserAnswers([...userAnswers, selectedOption]);
    const isCorrect = selectedOption === questions[currentQuestionIndex].answer;
    setScore(score + (isCorrect ? 1 : 0));

    if (currentQuestionIndex + 1 === questions.length) {
      // All questions answered, show QuizCompleted
      return;
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleNextQuestion = () => {
    // Optional for a dedicated "Next Question" button
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleTimesUp = () => {
    // Handle logic for exceeding time limit (optional)
  };

  let currentQuestion;
  if (currentQuestionIndex < questions.length) {
    currentQuestion = questions[currentQuestionIndex];
  }

  let componentToRender;
  if (!currentQuestion) {
    componentToRender = <div>Loading...</div>;
  } else if (currentQuestionIndex === questions.length) {
    componentToRender = <QuizCompleted score={score} />;
  } else {
    componentToRender = (
      <Question
        question={currentQuestion.question}
        options={currentQuestion.options}
        answer={currentQuestion.answer} // Used for internal validation
        audioUrl={currentQuestion.audioUrl}
        onAnswerSubmit={handleAnswerSubmit}
      />
    );
  }

  return (
    <div>
      {componentToRender}
      {currentQuestionIndex < questions.length && (
        <button onClick={handleNextQuestion}>Next Question</button>
      )}
    </div>
  );
};

export default App;