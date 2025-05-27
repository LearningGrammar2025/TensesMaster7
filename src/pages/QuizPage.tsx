import React from 'react';
import QuizIntro from '../components/Quiz/QuizIntro';
import QuizQuestion from '../components/Quiz/QuizQuestion';
import { useQuizStore } from '../store/quiz-store';

const QuizPage: React.FC = () => {
  const { quizStarted } = useQuizStore();
  
  return (
    <div className="container mx-auto px-4 py-16">
      {quizStarted ? <QuizQuestion /> : <QuizIntro />}
    </div>
  );
};

export default QuizPage;