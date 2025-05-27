import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, AlertTriangle } from 'lucide-react';
import { useQuizStore } from '../../store/quiz-store';
import { Button } from '../ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';

const QuizIntro = () => {
  const { startQuiz, quizStarted, quizCompleted, restartQuiz } = useQuizStore();
  
  const handleStartQuiz = (type: string) => {
    if (quizCompleted) {
      restartQuiz();
    } else {
      startQuiz(type);
    }
  };
  
  return (
    <motion.div 
      className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6 md:p-8 bg-gradient-to-r from-primary to-secondary text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Quiz Tenses Bahasa Inggris</h1>
        <p className="text-lg md:text-xl opacity-90">
          Uji pemahaman kamu tentang tenses bahasa Inggris dengan 40 soal pilihan ganda.
        </p>
      </div>
      
      <div className="p-6 md:p-8">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full mb-6">
            <TabsTrigger value="all" className="flex-1">Semua Tenses</TabsTrigger>
            <TabsTrigger value="simple-present" className="flex-1">Simple Present</TabsTrigger>
            <TabsTrigger value="simple-past" className="flex-1">Simple Past</TabsTrigger>
            <TabsTrigger value="simple-future" className="flex-1">Simple Future</TabsTrigger>
            <TabsTrigger value="continuous" className="flex-1">Continuous</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="space-y-6">
              <div className="flex items-start">
                <BookOpen className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">Quiz Lengkap - 40 Soal</h3>
                  <p className="text-gray-600">
                    Quiz ini mencakup semua tenses yang telah kamu pelajari: Simple Present, Simple Past, Simple Future, Present Continuous, dan Past Continuous.
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <p>Soal 1-10: Simple Present Tense</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <p>Soal 11-20: Simple Past Tense</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <p>Soal 21-30: Simple Future Tense</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <p>Soal 31-40: Present & Past Continuous Tense</p>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="w-full"
                onClick={() => handleStartQuiz('all')}
              >
                {quizStarted || quizCompleted ? "Lanjutkan Quiz" : "Mulai Quiz"}
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="simple-present">
            <div className="space-y-6">
              <div className="flex items-start">
                <BookOpen className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">Simple Present Tense - 10 Soal</h3>
                  <p className="text-gray-600">
                    Fokus pada penggunaan Simple Present Tense untuk menyatakan kebiasaan, fakta umum, dan keadaan saat ini.
                  </p>
                </div>
              </div>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start">
                <AlertTriangle className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-amber-800 text-sm">
                  Quiz ini hanya fokus pada Simple Present Tense. Untuk pengalaman lengkap, kami sarankan mengambil Quiz Lengkap.
                </p>
              </div>
              
              <Button 
                size="lg" 
                className="w-full"
                onClick={() => handleStartQuiz('simple-present')}
              >
                Mulai Quiz Simple Present
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="simple-past">
            <div className="space-y-6">
              <div className="flex items-start">
                <BookOpen className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">Simple Past Tense - 10 Soal</h3>
                  <p className="text-gray-600">
                    Fokus pada penggunaan Simple Past Tense untuk menyatakan kejadian yang sudah selesai di masa lampau.
                  </p>
                </div>
              </div>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start">
                <AlertTriangle className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-amber-800 text-sm">
                  Quiz ini hanya fokus pada Simple Past Tense. Untuk pengalaman lengkap, kami sarankan mengambil Quiz Lengkap.
                </p>
              </div>
              
              <Button 
                size="lg" 
                className="w-full"
                onClick={() => handleStartQuiz('simple-past')}
              >
                Mulai Quiz Simple Past
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="simple-future">
            <div className="space-y-6">
              <div className="flex items-start">
                <BookOpen className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">Simple Future Tense - 10 Soal</h3>
                  <p className="text-gray-600">
                    Fokus pada penggunaan Simple Future Tense untuk menyatakan rencana, prediksi, atau janji di masa depan.
                  </p>
                </div>
              </div>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start">
                <AlertTriangle className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-amber-800 text-sm">
                  Quiz ini hanya fokus pada Simple Future Tense. Untuk pengalaman lengkap, kami sarankan mengambil Quiz Lengkap.
                </p>
              </div>
              
              <Button 
                size="lg" 
                className="w-full"
                onClick={() => handleStartQuiz('simple-future')}
              >
                Mulai Quiz Simple Future
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="continuous">
            <div className="space-y-6">
              <div className="flex items-start">
                <BookOpen className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">Continuous Tense - 10 Soal</h3>
                  <p className="text-gray-600">
                    Fokus pada penggunaan Present dan Past Continuous Tense untuk menyatakan aksi yang sedang berlangsung.
                  </p>
                </div>
              </div>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start">
                <AlertTriangle className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-amber-800 text-sm">
                  Quiz ini hanya fokus pada Present dan Past Continuous Tense. Untuk pengalaman lengkap, kami sarankan mengambil Quiz Lengkap.
                </p>
              </div>
              
              <Button 
                size="lg" 
                className="w-full"
                onClick={() => handleStartQuiz('continuous')}
              >
                Mulai Quiz Continuous
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default QuizIntro;