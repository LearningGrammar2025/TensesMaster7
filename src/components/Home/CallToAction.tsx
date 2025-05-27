import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { ArrowRight, Check } from 'lucide-react';

const benefits = [
  "Pelajari 5 tenses utama bahasa Inggris",
  "Kuasai rumus dan contoh kalimat yang benar",
  "Latihan soal dengan feedback langsung",
  "Kumpulkan poin dan dapatkan lencana prestasi",
  "Visualisasi progress belajar yang jelas"
];

const CallToAction = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="p-8 md:p-12 lg:p-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Siap Menguasai Tenses Bahasa Inggris?
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  Mulai perjalanan belajarmu sekarang dan rasakan peningkatan kemampuan bahasa Inggris yang signifikan!
                </p>

                <ul className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start text-white"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <Check className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                    <Link to="/learn" className="flex items-center gap-2">
                      Mulai Belajar
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                    <Link to="/quiz">Coba Quiz</Link>
                  </Button>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="relative h-full min-h-[300px] md:min-h-[400px] hidden md:block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.pexels.com/photos/5676744/pexels-photo-5676744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Students studying together" 
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-secondary/50"></div>
              
              <motion.div 
                className="absolute top-10 right-10 bg-white p-4 rounded-lg shadow-lg max-w-[200px]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">40+</div>
                  <div className="text-sm text-gray-600">Soal Latihan Interaktif</div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-10 left-10 bg-white p-4 rounded-lg shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-1">5</div>
                  <div className="text-sm text-gray-600">Tenses Utama</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;