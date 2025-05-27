import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { tensesComparison } from '../../data/tenses-data';

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
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const TensesSummary = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ringkasan Tenses</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pahami perbedaan dan penggunaan kelima tenses bahasa Inggris yang akan kamu pelajari
          </p>
        </div>

        <div className="mb-12">
          <Tabs defaultValue="table" className="w-full">
            <div className="flex justify-center mb-6">
              <TabsList>
                <TabsTrigger value="table">Tabel Perbandingan</TabsTrigger>
                <TabsTrigger value="visual">Visual Guide</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="table" className="max-w-5xl mx-auto">
              <div className="overflow-x-auto rounded-2xl border shadow-lg bg-white">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary/10 to-secondary/10">
                      <th className="py-4 px-6 text-left font-bold text-lg border-b">Tense</th>
                      <th className="py-4 px-6 text-left font-bold text-lg border-b">Positif</th>
                      <th className="py-4 px-6 text-left font-bold text-lg border-b">Negatif</th>
                      <th className="py-4 px-6 text-left font-bold text-lg border-b">Interogatif</th>
                      <th className="py-4 px-6 text-left font-bold text-lg border-b">Keterangan Waktu</th>
                    </tr>
                  </thead>
                  <motion.tbody
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    {tensesComparison.map((tense, index) => (
                      <motion.tr 
                        key={index} 
                        variants={item}
                        className={`
                          ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                          hover:bg-primary/5 transition-colors
                        `}
                      >
                        <td className="py-4 px-6 font-semibold text-primary">
                          {tense.tense}
                        </td>
                        <td className="py-4 px-6">
                          <div className="p-2 rounded-lg bg-primary/5">
                            {tense.positiveFormula}
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="p-2 rounded-lg bg-secondary/5">
                            {tense.negativeFormula}
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="p-2 rounded-lg bg-accent/5">
                            {tense.interrogativeFormula}
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex flex-wrap gap-2">
                            {tense.timeMarkers.split(', ').map((marker, i) => (
                              <span 
                                key={i}
                                className="inline-block px-2 py-1 text-sm rounded-full bg-gray-100 text-gray-700"
                              >
                                {marker}
                              </span>
                            ))}
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </motion.tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="visual">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Simple Tenses</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-primary-100 px-3 py-1 rounded-full mr-3 mt-1">
                        <span className="text-primary text-sm font-medium">Present</span>
                      </div>
                      <div>
                        <p className="font-medium mb-1">She reads books.</p>
                        <p className="text-sm text-gray-600">Kebiasaan, fakta umum</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-100 px-3 py-1 rounded-full mr-3 mt-1">
                        <span className="text-primary text-sm font-medium">Past</span>
                      </div>
                      <div>
                        <p className="font-medium mb-1">She read a book yesterday.</p>
                        <p className="text-sm text-gray-600">Kejadian selesai di masa lalu</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary-100 px-3 py-1 rounded-full mr-3 mt-1">
                        <span className="text-primary text-sm font-medium">Future</span>
                      </div>
                      <div>
                        <p className="font-medium mb-1">She will read a book tomorrow.</p>
                        <p className="text-sm text-gray-600">Rencana, prediksi masa depan</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4 text-secondary">Continuous Tenses</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-secondary-100 px-3 py-1 rounded-full mr-3 mt-1">
                        <span className="text-secondary text-sm font-medium">Present</span>
                      </div>
                      <div>
                        <p className="font-medium mb-1">She is reading a book now.</p>
                        <p className="text-sm text-gray-600">Sedang berlangsung saat ini</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-secondary-100 px-3 py-1 rounded-full mr-3 mt-1">
                        <span className="text-secondary text-sm font-medium">Past</span>
                      </div>
                      <div>
                        <p className="font-medium mb-1">She was reading when I called.</p>
                        <p className="text-sm text-gray-600">Sedang berlangsung di masa lalu</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link to="/learn" className="flex items-center gap-2">
              Pelajari Lebih Lanjut
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TensesSummary;