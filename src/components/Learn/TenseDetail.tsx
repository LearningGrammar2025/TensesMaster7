import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Check, AlertCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { useQuizStore } from '../../store/quiz-store';

interface TenseDetailProps {
  tenseData: any;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const TenseDetail: React.FC<TenseDetailProps> = ({ tenseData }) => {
  const navigate = useNavigate();
  const { startQuiz } = useQuizStore();

  const handleStartQuiz = () => {
    startQuiz(tenseData.id);
    navigate('/quiz');
  };

  if (!tenseData) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link to="/learn" className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            <span>Kembali ke Daftar</span>
          </Link>
        </Button>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{tenseData.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{tenseData.description}</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div 
          className="md:col-span-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Fungsi */}
          <Card className="mb-8 border-l-4 border-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Fungsi {tenseData.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <motion.ul 
                className="space-y-2"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {tenseData.function.map((func: string, index: number) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    variants={item}
                  >
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>{func}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </CardContent>
          </Card>

          {/* Rumus */}
          <Card className="mb-8 border-l-4 border-secondary">
            <CardHeader>
              <CardTitle>Rumus {tenseData.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <p className="text-sm text-gray-500 mb-1">Kalimat Positif:</p>
                  <p className="font-medium">{tenseData.formula.positive}</p>
                </div>
                
                <div className="p-3 rounded-lg bg-secondary/10">
                  <p className="text-sm text-gray-500 mb-1">Kalimat Negatif:</p>
                  <p className="font-medium">{tenseData.formula.negative}</p>
                </div>
                
                <div className="p-3 rounded-lg bg-secondary/10">
                  <p className="text-sm text-gray-500 mb-1">Kalimat Tanya:</p>
                  <p className="font-medium">{tenseData.formula.interrogative}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contoh Kalimat */}
          <Card className="mb-8 border-l-4 border-accent">
            <CardHeader>
              <CardTitle>Contoh Kalimat {tenseData.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {tenseData.examples.map((example: any, index: number) => (
                  <motion.div 
                    key={index} 
                    className="p-4 rounded-lg bg-white border"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <p className="text-lg mb-3">
                      <span className="highlight-subject">{example.highlights.subject}</span>{' '}
                      <span className="highlight-verb">{example.highlights.verb}</span>{' '}
                      <span className="highlight-object">{example.highlights.object}</span>
                    </p>
                    <div className="flex items-start gap-2 text-sm text-gray-600">
                      <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>{example.explanation}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="sticky top-24">
            {/* Keterangan Waktu */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-lg">Keterangan Waktu</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tenseData.timeMarkers.map((marker: string, index: number) => (
                    <span 
                      key={index}
                      className="inline-block bg-primary/10 text-primary-800 px-3 py-1 rounded-full text-sm"
                    >
                      {marker}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quiz Navigation */}
            <Card className="bg-gradient-to-br from-primary to-secondary text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Siap Untuk Diuji?</h3>
                <p className="mb-4 text-white/90">
                  Coba uji pemahaman kamu tentang {tenseData.title} dengan soal-soal latihan.
                </p>
                <Button 
                  className="w-full bg-white text-primary hover:bg-white/90"
                  onClick={handleStartQuiz}
                >
                  Mulai Quiz
                </Button>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TenseDetail;