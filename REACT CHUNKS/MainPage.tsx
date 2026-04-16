import React, { useState } from 'react';
import HeroSection from './HeroSection';
import StrategySection from './StrategySection';
import CarouselSection from './CarouselSection';
import MentorSection from './MentorSection';
import QualificationSection from './QualificationSection';
import InvestmentSection from './InvestmentSection';
import FinalCtaSection from './FinalCtaSection';
import FooterSection from './FooterSection';
import QuizPopup from './QuizPopup';

const MainPage: React.FC = () => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const openQuiz = () => setIsQuizOpen(true);
  const closeQuiz = () => setIsQuizOpen(false);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <StrategySection />
      <CarouselSection />
      <MentorSection />
      <QualificationSection />
      <InvestmentSection />
      <FinalCtaSection />
      <FooterSection />
      <QuizPopup isOpen={isQuizOpen} onClose={closeQuiz} />
    </main>
  );
};

export default MainPage;