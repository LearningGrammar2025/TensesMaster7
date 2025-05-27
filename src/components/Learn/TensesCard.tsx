import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { useQuizStore } from '../../store/quiz-store';

interface TensesCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  delay?: number;
}

const TensesCard: React.FC<TensesCardProps> = ({ 
  id, 
  title, 
  description, 
  icon, 
  color,
  delay = 0 
}) => {
  const { markMaterialAsStudied, studiedMaterials } = useQuizStore();
  const isStudied = studiedMaterials.includes(id);

  const handleClick = () => {
    if (!isStudied) {
      markMaterialAsStudied(id);
    }
  };

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.15 }}
    >
      <Card className={`material-card h-full border-l-4 ${color}`}>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
              <CardDescription className="mt-2">{description}</CardDescription>
            </div>
            <div className={`p-2 rounded-full ${color.replace('border', 'bg').replace('-l-4', '/15')}`}>
              {icon}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {isStudied && (
            <div className="mb-3">
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Material Dipelajari ✓
              </span>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link 
              to={`/learn/${id}`} 
              className="flex items-center gap-1"
              onClick={handleClick}
            >
              <span>Pelajari</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default TensesCard;