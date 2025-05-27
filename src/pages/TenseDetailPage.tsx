import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import TenseDetail from '../components/Learn/TenseDetail';
import { tensesData } from '../data/tenses-data';

const TenseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Get the tense data based on the id parameter
  let tenseData = null;
  
  switch (id) {
    case 'simple-present':
      tenseData = tensesData.simplePresent;
      break;
    case 'simple-past':
      tenseData = tensesData.simplePast;
      break;
    case 'simple-future':
      tenseData = tensesData.simpleFuture;
      break;
    case 'present-continuous':
      tenseData = tensesData.presentContinuous;
      break;
    case 'past-continuous':
      tenseData = tensesData.pastContinuous;
      break;
    default:
      break;
  }
  
  // Redirect to learn page if tense not found
  if (!tenseData) {
    return <Navigate to="/learn" />;
  }
  
  return <TenseDetail tenseData={tenseData} />;
};

export default TenseDetailPage;