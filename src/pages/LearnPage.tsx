import React from 'react';
import { motion } from 'framer-motion';
import { 
  AlarmClock, 
  BookOpen, 
  Calendar, 
  Check
} from 'lucide-react';
import TensesCard from '../components/Learn/TensesCard';
import { useQuizStore } from '../store/quiz-store';
import { tensesData, learningObjectives } from '../data/tenses-data';

const LearnPage: React.FC = () => {
  const { studiedMaterials } = useQuizStore();

  const tensesCards = [
    {
      id: tensesData.simplePresent.id,
      title: tensesData.simplePresent.title,
      description: tensesData.simplePresent.description,
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      color: "border-primary"
    },
    {
      id: tensesData.simplePast.id,
      title: tensesData.simplePast.title,
      description: tensesData.simplePast.description,
      icon: <Calendar className="h-6 w-6 text-secondary" />,
      color: "border-secondary"
    },
    {
      id: tensesData.simpleFuture.id,
      title: tensesData.simpleFuture.title,
      description: tensesData.simpleFuture.description,
      icon: <Check className="h-6 w-6 text-accent" />,
      color: "border-accent"
    },
    {
      id: tensesData.presentContinuous.id,
      title: tensesData.presentContinuous.title,
      description: tensesData.presentContinuous.description,
      icon: <AlarmClock className="h-6 w-6 text-primary" />,
      color: "border-primary"
    },
    {
      id: tensesData.pastContinuous.id,
      title: tensesData.pastContinuous.title,
      description: tensesData.pastContinuous.description,
      icon: <AlarmClock className="h-6 w-6 text-secondary" />,
      color: "border-secondary"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Belajar Tenses Bahasa Inggris</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Pilih tenses yang ingin kamu pelajari. Setiap materi dilengkapi dengan penjelasan, contoh kalimat, dan visualisasi.
        </p>
        
        <div className="mt-6 bg-primary/10 rounded-lg p-4 inline-block">
          <p className="font-medium text-primary-800">
            Materi yang sudah dipelajari: {studiedMaterials.length} dari 5
          </p>
        </div>
      </motion.div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Tujuan Pembelajaran</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learningObjectives.map((objective, index) => (
            <motion.div
              key={index}
              className="bg-white border rounded-lg p-5 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-3">{objective.title}</h3>
              <ul className="space-y-2">
                {objective.objectives.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-6">Pilih Materi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tensesCards.map((card, index) => (
            <TensesCard
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
              icon={card.icon}
              color={card.color}
              delay={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearnPage;