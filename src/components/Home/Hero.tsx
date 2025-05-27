import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Award, BarChart } from 'lucide-react';
import { Button } from '../ui/button';
import { useQuizStore } from '../../store/quiz-store';

const Hero = () => {
  const { quizStarted, studiedMaterials, totalPoints } = useQuizStore();

  return (
    <section className="min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background with gradient */}
      <div className="hero-gradient absolute inset-0 -z-10 opacity-90"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/5 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply blur-xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full mix-blend-multiply blur-xl"
          animate={{ 
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/5 w-64 h-64 bg-accent/10 rounded-full mix-blend-multiply blur-xl"
          animate={{ 
            x: [0, 25, 0],
            y: [0, 25, 0],
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Belajar Tenses Jadi <span className="text-accent">Menyenangkan!</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-xl mx-auto lg:mx-0">
              Kuasai simple & continuous tenses bahasa Inggris dengan cara yang interaktif, visual, dan seru!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="xl" asChild>
                <Link to="/learn" className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  {studiedMaterials.length > 0 ? "Lanjutkan Belajar" : "Mulai Belajar"}
                </Link>
              </Button>
              <Button size="xl" variant="secondary" asChild>
                <Link to="/quiz" className="flex items-center gap-2">
                  {quizStarted ? "Lanjutkan Quiz" : "Coba Quiz"}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                <BookOpen className="h-7 w-7 text-white mx-auto mb-2" />
                <p className="text-white text-sm">5 Tenses</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                <Award className="h-7 w-7 text-white mx-auto mb-2" />
                <p className="text-white text-sm">{totalPoints} Poin</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                <BarChart className="h-7 w-7 text-white mx-auto mb-2" />
                <p className="text-white text-sm">40 Soal</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <motion.img 
                src="https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Students learning English"
                className="rounded-xl shadow-2xl w-full object-cover max-h-[500px]"
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <motion.div 
                className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Achievement</h3>
                    <p className="text-sm text-gray-600">Master 5 tenses with ease!</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-5 -right-5 bg-white p-4 rounded-lg shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-secondary/20 p-2 rounded-full">
                    <BarChart className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Track Progress</h3>
                    <p className="text-sm text-gray-600">Monitor your improvement</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;