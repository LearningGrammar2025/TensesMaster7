import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, BookOpen, CheckCircle, BookMarked, TrendingUp, 
  Zap, BarChart2, AlertCircle
} from 'lucide-react';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { useQuizStore } from '../../store/quiz-store';
import { calculateProgress, getLevelTitle, getBadgeTitle } from '../../lib/utils';
import { Link } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ProgressDashboard = () => {
  const { 
    totalPoints, 
    correctAnswers, 
    studiedMaterials, 
    questionsCompleted,
    quizCompleted,
  } = useQuizStore();
  
  const studyProgress = calculateProgress(studiedMaterials.length, 5);
  const quizProgress = calculateProgress(questionsCompleted, 40);
  const levelTitle = getLevelTitle(totalPoints);
  const badgeTitle = getBadgeTitle(correctAnswers);
  
  const pieData = {
    labels: ['Jawaban Benar', 'Jawaban Salah'],
    datasets: [
      {
        data: [correctAnswers, questionsCompleted - correctAnswers],
        backgroundColor: ['#0c94eb', '#f87171'],
        borderWidth: 0,
      },
    ],
  };
  
  const pieOptions = {
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
    cutout: '50%',
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Progress Belajarmu</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Lihat perkembangan belajar, pencapaian, dan statistik kemajuan kamu dalam menguasai tenses bahasa Inggris.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Level Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="bg-gradient-to-br from-primary to-primary-700 text-white h-full">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Level Kamu
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Tingkatan</p>
                  <h3 className="text-2xl font-bold mt-1">{levelTitle}</h3>
                </div>
                <div className="bg-white/20 h-16 w-16 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">{totalPoints}</span>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-sm mb-1 flex justify-between">
                  <span>Progress</span>
                  <span>{calculateProgress(totalPoints, 1000)}%</span>
                </p>
                <Progress value={calculateProgress(totalPoints, 1000)} className="bg-white/20" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        {/* Badge Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-gradient-to-br from-secondary to-secondary-700 text-white h-full">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Lencana Prestasi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Gelar Kamu</p>
                  <h3 className="text-2xl font-bold mt-1">{badgeTitle}</h3>
                </div>
                <div className="bg-white/20 h-16 w-16 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">{correctAnswers}</span>
                </div>
              </div>
              <div className="mt-5">
                <p className="text-sm mb-1 flex justify-between">
                  <span>Progress</span>
                  <span>{calculateProgress(correctAnswers, 40)}%</span>
                </p>
                <Progress value={calculateProgress(correctAnswers, 40)} className="bg-white/20" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        {/* Points Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="bg-gradient-to-br from-accent to-accent-700 text-white h-full">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Total Poin
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center py-2">
                <p className="text-sm opacity-90">Poin yang Dikumpulkan</p>
                <h3 className="text-4xl font-bold mt-1">{totalPoints}</h3>
                <div className="mt-4 grid grid-cols-2 w-full gap-3 text-center">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <p className="text-sm opacity-90">Quiz</p>
                    <p className="font-bold">{correctAnswers * 10}</p>
                  </div>
                  <div className="bg-white/20 p-2 rounded-lg">
                    <p className="text-sm opacity-90">Belajar</p>
                    <p className="font-bold">{studiedMaterials.length * 5}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Learning Progress */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-2"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Progress Pembelajaran
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2 text-sm">
                    <span>Materi Dipelajari</span>
                    <span>{studiedMaterials.length} dari 5</span>
                  </div>
                  <Progress value={studyProgress} />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {['simple-present', 'simple-past', 'simple-future', 'present-continuous', 'past-continuous'].map((material) => {
                    const isStudied = studiedMaterials.includes(material);
                    return (
                      <div 
                        key={material}
                        className={`p-3 rounded-lg border flex items-center gap-3 ${
                          isStudied ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                        }`}
                      >
                        {isStudied ? (
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        ) : (
                          <BookMarked className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        )}
                        <span className={isStudied ? 'text-green-800' : 'text-gray-600'}>
                          {material.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </span>
                      </div>
                    );
                  })}
                </div>
                
                <div className="flex justify-center">
                  <Button asChild>
                    <Link to="/learn">
                      {studiedMaterials.length === 5 ? "Ulangi Materi" : "Lanjutkan Belajar"}
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        {/* Quiz Statistics */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart2 className="h-5 w-5 text-primary" />
                Statistik Quiz
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {questionsCompleted > 0 ? (
                  <div className="flex flex-col items-center">
                    <div className="w-48 h-48">
                      <Pie data={pieData} options={pieOptions} />
                    </div>
                    
                    <div className="mt-6 w-full grid grid-cols-2 gap-3">
                      <div className="bg-primary/10 p-3 rounded-lg text-center">
                        <p className="text-sm text-gray-600">Benar</p>
                        <p className="text-xl font-bold text-primary">{correctAnswers}</p>
                      </div>
                      <div className="bg-red-100 p-3 rounded-lg text-center">
                        <p className="text-sm text-gray-600">Salah</p>
                        <p className="text-xl font-bold text-red-600">{questionsCompleted - correctAnswers}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center text-center p-6">
                    <AlertCircle className="h-12 w-12 text-gray-400 mb-3" />
                    <p className="text-gray-600">Kamu belum menyelesaikan quiz apapun.</p>
                  </div>
                )}
                
                <div className="flex justify-center">
                  <Button asChild>
                    <Link to="/quiz">
                      {quizCompleted ? "Ulangi Quiz" : "Mulai Quiz"}
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ProgressDashboard;