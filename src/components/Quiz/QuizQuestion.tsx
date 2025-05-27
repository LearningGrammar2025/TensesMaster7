import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { useQuizStore } from '../../store/quiz-store';

const QuizQuestion = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  
  const { 
    getCurrentQuestion, 
    selectAnswer, 
    nextQuestion, 
    restartQuiz,
    currentQuestionIndex,
    userAnswers,
    correctAnswers,
    quizCompleted,
  } = useQuizStore();
  
  const currentQuestion = getCurrentQuestion();
  
  if (!currentQuestion) return null;
  
  const progress = Math.round(((currentQuestionIndex + 1) / 40) * 100);
  const isAnswered = userAnswers[currentQuestionIndex] !== null;
  const isCorrect = isAnswered && userAnswers[currentQuestionIndex] === currentQuestion.correctAnswer;
  
  const handleAnswerSelect = (answer: string) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
    selectAnswer(answer);
    setShowExplanation(true);
  };
  
  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    nextQuestion();
  };
  
  const handleRestartQuiz = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    restartQuiz();
  };
  
  if (quizCompleted) {
    return (
      <motion.div 
        className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-3xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block p-4 bg-primary/10 rounded-full mb-4"
          >
            <div className="text-4xl font-bold text-primary">
              {correctAnswers} / {userAnswers.length}
            </div>
          </motion.div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Quiz Selesai!</h2>
          <p className="text-gray-600 text-lg">
            Kamu menjawab {correctAnswers} pertanyaan dengan benar dari {userAnswers.length} soal.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="p-4 rounded-lg bg-gray-50">
            <div className="flex justify-between mb-2">
              <span className="font-medium">Jawaban Benar:</span>
              <span className="font-semibold text-green-600">{correctAnswers}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Jawaban Salah:</span>
              <span className="font-semibold text-red-600">{userAnswers.length - correctAnswers}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Poin Diperoleh:</span>
              <span className="font-semibold text-primary">{correctAnswers * 10}</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={handleRestartQuiz}
            >
              <RotateCcw className="h-4 w-4" />
              Ulangi Quiz
            </Button>
            <Button asChild>
              <a href="/progress" className="flex items-center gap-2">
                Lihat Progress
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-3xl mx-auto">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between mb-2 text-sm">
          <span>Pertanyaan {currentQuestionIndex + 1} dari {userAnswers.length}</span>
          <span>{progress}% Selesai</span>
        </div>
        <Progress value={progress} />
      </div>
      
      {/* Question */}
      <motion.div
        key={currentQuestionIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-6">{currentQuestion.question}</h2>
        
        <div className="space-y-3">
          {currentQuestion.options.map((option: string, index: number) => (
            <motion.button
              key={index}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                selectedAnswer === option 
                  ? isCorrect 
                    ? 'border-green-500 bg-green-50'
                    : 'border-red-500 bg-red-50'
                  : selectedAnswer !== null && option === currentQuestion.correctAnswer
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 hover:border-primary/50'
              }`}
              onClick={() => handleAnswerSelect(option)}
              disabled={isAnswered}
              whileHover={!isAnswered ? { scale: 1.02 } : {}}
              whileTap={!isAnswered ? { scale: 0.98 } : {}}
            >
              <div className="flex items-start">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${
                  selectedAnswer === option 
                    ? isCorrect 
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                    : selectedAnswer !== null && option === currentQuestion.correctAnswer
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200'
                }`}>
                  {String.fromCharCode(97 + index)}
                </div>
                <span>{option}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>
      
      {/* Explanation */}
      <AnimatePresence>
        {showExplanation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6 overflow-hidden"
          >
            <div className={`p-4 rounded-lg flex items-start ${
              isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
            }`}>
              <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold mb-1">
                  {isCorrect ? 'Jawaban Benar!' : 'Jawaban Salah!'}
                </p>
                <p>{currentQuestion.explanation}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Navigation */}
      <div className="flex justify-end">
        <Button 
          onClick={handleNextQuestion}
          disabled={!isAnswered}
          className="flex items-center gap-2"
        >
          Pertanyaan Berikutnya
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default QuizQuestion;