import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';
import TenseDetailPage from './pages/TenseDetailPage';
import QuizPage from './pages/QuizPage';
import ProgressPage from './pages/ProgressPage';
import AboutPage from './pages/AboutPage';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "TenseMaster - Belajar Tenses Bahasa Inggris";
  }, []);

  return (
    <Router>
      <Helmet>
        <meta name="description" content="Platform pembelajaran tenses bahasa Inggris yang interaktif untuk siswa SMP Kelas 7." />
        <meta name="keywords" content="tenses, bahasa inggris, belajar, quiz, interaktif, simple present, simple past, simple future, continuous" />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/learn/:id" element={<TenseDetailPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/progress" element={<ProgressPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;