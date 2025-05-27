import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Award, PenTool, Timer, Target } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const features = [
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Materi Lengkap",
    description: "Penjelasan 5 tenses dengan rumus, contoh kalimat, dan visualisasi yang mudah dipahami."
  },
  {
    icon: <PenTool className="h-10 w-10 text-secondary" />,
    title: "Latihan Interaktif",
    description: "40 soal pilihan ganda dengan feedback langsung untuk mengukur pemahaman kamu."
  },
  {
    icon: <Award className="h-10 w-10 text-accent" />,
    title: "Sistem Gamifikasi",
    description: "Kumpulkan poin, dapatkan lencana, dan naik level seiring kemajuan belajarmu."
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    title: "Visual Learning",
    description: "Ilustrasi dan highlight teks membantu memahami struktur kalimat dengan lebih baik."
  },
  {
    icon: <Timer className="h-10 w-10 text-secondary" />,
    title: "Progress Tracking",
    description: "Pantau perkembangan belajar, skor quiz, dan materi yang sudah dikuasai."
  }
];

const learningObjective = {
  title: "Learning Objective",
  description: "Students are able to identify and use tenses in various simple and continuous tenses to convey information in the context of time.",
  icon: <Target className="h-10 w-10 text-accent" />
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Learning Objective Card */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-none">
            <CardContent className="p-8 text-center">
              <div className="inline-flex p-3 rounded-full bg-white shadow-md mb-6">
                {learningObjective.icon}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{learningObjective.title}</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                {learningObjective.description}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fitur Pembelajaran Interaktif</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rancangan khusus untuk membantu siswa SMP Kelas 7 menguasai tenses bahasa Inggris dengan cara yang menyenangkan.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-primary-50 mb-6 mt-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;