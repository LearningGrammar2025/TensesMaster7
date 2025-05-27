import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { quizData } from '../data/quiz-data';
import { shuffleArray } from '../lib/utils';

interface QuizState {
  currentQuestionIndex: number;
  userAnswers: (string | null)[];
  correctAnswers: number;
  questionsCompleted: number;
  quizStarted: boolean;
  quizCompleted: boolean;
  quizType: string;
  totalPoints: number;
  studiedMaterials: string[];
  
  startQuiz: (type: string) => void;
  selectAnswer: (answer: string) => void;
  nextQuestion: () => void;
  restartQuiz: () => void;
  markMaterialAsStudied: (material: string) => void;
  getCurrentQuestion: () => any;
  isCorrectAnswer: (questionIndex: number, answer: string) => boolean;
}

export const useQuizStore = create<QuizState>()(
  persist(
    (set, get) => ({
      currentQuestionIndex: 0,
      userAnswers: [],
      correctAnswers: 0,
      questionsCompleted: 0,
      quizStarted: false,
      quizCompleted: false,
      quizType: 'all',
      totalPoints: 0,
      studiedMaterials: [],

      startQuiz: (type) => {
        const questions = type === 'all' 
          ? shuffleArray(quizData) 
          : shuffleArray(quizData.filter(q => q.type === type));
          
        set({
          quizType: type,
          currentQuestionIndex: 0,
          userAnswers: Array(questions.length).fill(null),
          correctAnswers: 0,
          quizStarted: true,
          quizCompleted: false,
        });
      },

      selectAnswer: (answer) => {
        const state = get();
        const question = get().getCurrentQuestion();
        const isCorrect = question.correctAnswer === answer;
        
        const newUserAnswers = [...state.userAnswers];
        newUserAnswers[state.currentQuestionIndex] = answer;
        
        set({
          userAnswers: newUserAnswers,
          correctAnswers: isCorrect 
            ? state.correctAnswers + 1 
            : state.correctAnswers,
          totalPoints: isCorrect 
            ? state.totalPoints + 10 
            : state.totalPoints,
        });
      },

      nextQuestion: () => {
        const state = get();
        const nextIndex = state.currentQuestionIndex + 1;
        
        if (nextIndex >= quizData.length || nextIndex >= state.userAnswers.length) {
          set({ 
            quizCompleted: true,
            questionsCompleted: state.questionsCompleted + 1 
          });
        } else {
          set({ 
            currentQuestionIndex: nextIndex,
            questionsCompleted: state.questionsCompleted + 1 
          });
        }
      },

      restartQuiz: () => {
        set({
          currentQuestionIndex: 0,
          userAnswers: Array(quizData.length).fill(null),
          correctAnswers: 0,
          quizStarted: true,
          quizCompleted: false,
        });
      },

      markMaterialAsStudied: (material) => {
        const state = get();
        if (!state.studiedMaterials.includes(material)) {
          set({
            studiedMaterials: [...state.studiedMaterials, material],
            totalPoints: state.totalPoints + 5, // Reward points for studying
          });
        }
      },

      getCurrentQuestion: () => {
        const { currentQuestionIndex, quizType } = get();
        const filteredQuestions = quizType === 'all' 
          ? quizData 
          : quizData.filter(q => q.type === quizType);
        return filteredQuestions[currentQuestionIndex];
      },

      isCorrectAnswer: (questionIndex, answer) => {
        const filteredQuestions = get().quizType === 'all' 
          ? quizData 
          : quizData.filter(q => q.type === get().quizType);
        return filteredQuestions[questionIndex].correctAnswer === answer;
      },
    }),
    {
      name: 'english-tenses-quiz-storage',
    }
  )
);