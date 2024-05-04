import React from 'react';

interface QuizCompletedProps {
  score: number;
}

const QuizCompleted: React.FC<QuizCompletedProps> = ({ score }) => {
  return (
    <div>
      <h1>Quiz Completed!</h1>
      <p>Your score is: {score}</p>
    </div>
  );
};

export default QuizCompleted;
