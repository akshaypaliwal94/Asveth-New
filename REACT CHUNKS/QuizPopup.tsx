import React, { useState, useEffect } from 'react';

interface QuizAnswers {
  step0: string;
  step1: string;
  step2: string;
  name: string;
  email: string;
  phone: string;
}

interface QuizPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuizPopup: React.FC<QuizPopupProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({
    step0: '',
    step1: '',
    step2: '',
    name: '',
    email: '',
    phone: ''
  });

  // Reset state when popup opens
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
      setAnswers({
        step0: '',
        step1: '',
        step2: '',
        name: '',
        email: '',
        phone: ''
      });
    }
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  const handleOptionSelect = (step: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [step]: value
    }));
  };

  const handleInputChange = (field: keyof Pick<QuizAnswers, 'name' | 'email' | 'phone'>, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const goToNext = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const goToBack = (targetStep: number) => {
    setCurrentStep(targetStep);
  };

  const handleSubmit = () => {
    // Validate required fields
    if (!answers.name.trim() || !answers.phone.trim()) {
      alert('Please fill in your name and phone number.');
      return;
    }
    
    // Move to confirmation step
    goToNext();
  };

  const handleBooking = () => {
    // Here you would integrate with your booking system
    console.log('Booking with answers:', answers);
    onClose();
  };

  if (!isOpen) return null;

  const steps = [
    {
      question: "What has stopped you from getting in shape until now?",
      options: [
        { value: "guidance", text: "I didn't have the right guidance" },
        { value: "time", text: "I have no time with my busy schedule" },
        { value: "consistency", text: "I've tried before but couldn't stay consistent" },
        { value: "afford", text: "I didn't think I could afford it" }
      ]
    },
    {
      question: "Have you tried any fitness program, coach or diet before?",
      options: [
        { value: "first", text: "No, this would be my first time" },
        { value: "quit", text: "Yes — but I quit or it didn't work" },
        { value: "lost", text: "Yes — it worked but I lost progress after stopping" }
      ]
    },
    {
      question: "What is your #1 goal from this program?",
      options: [
        { value: "lean", text: "Lose weight & get lean" },
        { value: "muscle", text: "Build muscle & look athletic" },
        { value: "energy", text: "Improve energy, stamina & performance" },
        { value: "recomp", text: "Complete body recomposition — lose fat & build muscle together" }
      ]
    }
  ];

  const currentStepKey = `step${currentStep}` as keyof QuizAnswers;
  const isStepCompleted = (stepIndex: number) => {
    if (stepIndex <= 2) {
      const stepKey = `step${stepIndex}` as keyof QuizAnswers;
      return !!answers[stepKey];
    }
    return stepIndex < currentStep;
  };

  const canProceedToNext = () => {
    if (currentStep <= 2) {
      return !!answers[currentStepKey];
    }
    if (currentStep === 3) {
      return answers.name.trim() && answers.phone.trim();
    }
    return false;
  };

  return (
    <div className="qpop-overlay active" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="qpop-modal" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button className="qpop-close" onClick={onClose}>
          ✕
        </button>

        {/* Progress Bar */}
        <div className="qpop-progress">
          {Array.from({ length: 5 }, (_, index) => (
            <div 
              key={index}
              className={`qpop-seg ${
                isStepCompleted(index) 
                  ? 'done' 
                  : index === currentStep 
                    ? 'active' 
                    : ''
              }`}
            />
          ))}
        </div>

        {/* Question Steps */}
        {steps.map((step, stepIndex) => (
          <div 
            key={stepIndex}
            className={`qpop-step ${stepIndex === currentStep ? 'active' : ''}`}
          >
            <div className="qpop-body">
              <div className="qpop-q">{step.question}</div>
              <div className="qpop-options">
                {step.options.map((option, optionIndex) => (
                  <div 
                    key={optionIndex}
                    className={`qpop-option ${
                      answers[`step${stepIndex}` as keyof QuizAnswers] === option.value 
                        ? 'selected' 
                        : ''
                    }`}
                    onClick={() => handleOptionSelect(`step${stepIndex}`, option.value)}
                  >
                    <div className="qpop-radio"></div>
                    <div className="qpop-option-text">{option.text}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`qpop-footer ${stepIndex === 0 ? 'qpop-footer-only-next' : ''}`}>
              {stepIndex > 0 && (
                <button className="qpop-back" onClick={() => goToBack(stepIndex - 1)}>
                  ← BACK
                </button>
              )}
              <button 
                className="qpop-next"
                onClick={goToNext}
                disabled={!canProceedToNext()}
                style={{
                  opacity: canProceedToNext() ? 1 : 0.5,
                  cursor: canProceedToNext() ? 'pointer' : 'not-allowed'
                }}
              >
                NEXT →
              </button>
            </div>
          </div>
        ))}

        {/* Form Step */}
        <div className={`qpop-step ${currentStep === 3 ? 'active' : ''}`}>
          <div className="qpop-form-header">
            <div className="qpop-form-title">Great! One last step — your details</div>
            <div className="qpop-form-sub">
              <span>⏱</span> Almost done — we need this to book your call
            </div>
          </div>
          <div className="qpop-fields">
            <div>
              <div className="qpop-field-label">
                Full Name <span className="qpop-field-req">*</span>
              </div>
              <input 
                className="qpop-input"
                type="text"
                placeholder="Enter your full name"
                value={answers.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>
            <div>
              <div className="qpop-field-label">Email</div>
              <input 
                className="qpop-input"
                type="email"
                placeholder="Enter your email (optional)"
                value={answers.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </div>
            <div>
              <div className="qpop-field-label">
                Phone Number <span className="qpop-field-req">*</span>
              </div>
              <input 
                className="qpop-input"
                type="tel"
                placeholder="Enter your phone number"
                value={answers.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              />
            </div>
          </div>
          <div className="qpop-privacy">
            🔒 We'll only contact you about your fitness plan
          </div>
          <div className="qpop-footer">
            <button className="qpop-back" onClick={() => goToBack(2)}>
              ← BACK
            </button>
            <button 
              className="qpop-next"
              onClick={handleSubmit}
              disabled={!canProceedToNext()}
              style={{
                opacity: canProceedToNext() ? 1 : 0.5,
                cursor: canProceedToNext() ? 'pointer' : 'not-allowed'
              }}
            >
              SUBMIT →
            </button>
          </div>
        </div>

        {/* Confirmation Step */}
        <div className={`qpop-step ${currentStep === 4 ? 'active' : ''}`}>
          <div className="qpop-confirm">
            <div className="qpop-confirm-icon">🎯</div>
            <div className="qpop-confirm-tag">Health Audit</div>
            <div className="qpop-price-box">
              <div className="qpop-price">₹97</div>
              <div className="qpop-price-label">Adjusted against program fee if you join</div>
              <ul className="qpop-checklist">
                <li>Full diagnostic audit of your body & blood markers</li>
                <li>90-day personalised roadmap</li>
                <li>Fitness & lifestyle assessment</li>
              </ul>
              <div className="qpop-note">45-min paid call · Fully dedicated to your plan</div>
            </div>
          </div>
          <div className="qpop-footer-confirm">
            <button className="qpop-book-btn" onClick={handleBooking}>
              Book My Health Audit Now →
            </button>
            <div style={{
              textAlign: 'center',
              marginTop: '10px',
              fontSize: '11px',
              color: 'var(--muted)'
            }}>
              Full refund if no clarity · No spam · No pressure
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default QuizPopup;