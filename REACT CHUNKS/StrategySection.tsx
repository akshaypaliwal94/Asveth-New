import React from 'react';

const StrategySection: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: "🔬",
      tag: "Diagnosis · Value ₹2,500",
      title: "The Health Audit Call",
      description: "A live Zoom session — not a sales call. Asveth reviews your blood markers, injury history, and 3–4 days of eating patterns to identify the precise internal blocks preventing your transformation. Most people have never been told why their body isn't responding. They've only been told to try harder. This call ends that."
    },
    {
      number: "02", 
      icon: "📋",
      tag: "Report · Value ₹1,500",
      title: "Personalised Diagnostic Report",
      description: "Your specific blood marker flags — D3, testosterone, thyroid, HbA1c, B12. Your injury profile review. Your dietary gap analysis. Every item identified as a named, specific internal block for your body — not a body type. A private blood test interpretation alone costs ₹800–1,200 at a clinic — without dietary or injury analysis."
    },
    {
      number: "03",
      icon: "🎯", 
      tag: "Roadmap · Value ₹2,000",
      title: "Custom Transformation Roadmap",
      description: "A personalised action framework specific to your blood markers, injury profile, and dietary reality. Not a generic plan — a roadmap that says 'for your body, here's the sequence: fix this first, then add this, then build this.' You don't leave with information. You leave with a clear, specific, immediately actionable next step."
    }
  ];

  return (
    <>
      <div className="section-divider"></div>

      <section className="strategy-section">
        <p className="section-eyebrow">The Health Audit</p>

        <h2 className="section-headline">
          Not a Consultation.
          <span>A Diagnosis.</span>
        </h2>

        <p className="section-sub">
          Here's exactly what you get in your Health Audit — ₹6,000 worth of diagnostic work for ₹97.
        </p>

        <div className="steps-wrap">
          {steps.map((step, index) => (
            <div key={index} className="step-row">
              <div className="step-left">
                <div className="step-num">{step.number}</div>
                <div className="step-line"></div>
              </div>
              <div className="step-card">
                <div className="card-top">
                  <div className="card-icon">{step.icon}</div>
                  <div className="card-tag">{step.tag}</div>
                </div>
                <div className="card-title">{step.title}</div>
                <div className="card-body">
                  {step.description.split(/(\*\*.*?\*\*)/).map((part, i) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return <strong key={i}>{part.slice(2, -2)}</strong>;
                    }
                    if (part.includes('why')) {
                      return <em key={i}>{part}</em>;
                    }
                    return part;
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default StrategySection;