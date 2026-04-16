import React from 'react';

const FinalCtaSection: React.FC = () => {
  const stats = [
    { number: "100+", label: "Transformed" },
    { number: "45 min", label: "Health Audit" },
    { number: "₹97", label: "One-Time" }
  ];

  return (
    <>
      <div className="section-divider" style={{ marginTop: '64px' }}></div>

      <section className="final-cta-section">
        <p className="final-cta-eyebrow">Still Reading?</p>

        <h2 className="final-cta-headline">
          You Already<br />
          <span className="know">Know.</span>
        </h2>

        <p className="final-cta-body">
          Every day you wait is another day you wake up in a body that doesn't match the man you've built everywhere else. <strong>The gap doesn't close itself.</strong>
        </p>

        <div className="final-cta-stats">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div>
                <div className="final-stat-num">{stat.number}</div>
                <div className="final-stat-label">{stat.label}</div>
              </div>
              {index < stats.length - 1 && (
                <div className="final-stat-divider"></div>
              )}
            </React.Fragment>
          ))}
        </div>

        <a href="#" className="final-cta-btn">
          Book My Health Audit Now
          <span className="final-cta-btn-sub">Health Audit · ₹97 · Full Refund if No Clarity</span>
        </a>

        <p className="final-cta-footnote">
          Limited spots per week <span>·</span> No spam <span>·</span> No pressure
        </p>
      </section>
    </>
  );
};

export default FinalCtaSection;