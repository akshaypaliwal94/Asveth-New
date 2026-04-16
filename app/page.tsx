'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div>
      {/* Background */}
      <div className="hero-bg"></div>

      {/* Main Content */}
      <div className="outer-wrap">
        <div className="frame">
          
          {/* TOP BAR */}
          <div className="top-bar">
            <div className="logo-wrap">
              <div className="logo-icon">🏃</div>
              <div className="logo-text">THE ATHLETIC INDIAN</div>
            </div>
          </div>

          {/* HERO BODY */}
          <div className="hero-body">
            <div className="pre-headline">
              <div className="pre-dot"></div>
              TRANSFORMATION AWAITS
            </div>
            
            <h1 className="headline">
              FORGE AN <em>UNBREAKABLE</em> PHYSIQUE & MINDSET
            </h1>
            
            <p className="subheadline">
              Escape the endless cycle of mediocre workouts and <strong>unlock the blueprint</strong> 
              that transforms ordinary Indian men into athletic powerhouses in just 90 days.
            </p>
            
            <div className="cta-wrap">
              <button 
                className="cta-btn cta-watch" 
                onClick={() => {
                  const videoSection = document.querySelector('.video-wrap')
                  videoSection?.scrollIntoView({behavior: 'smooth'})
                }}
              >
                <span>WATCH FREE TRAINING</span>
                <div className="cta-arrow">▶</div>
              </button>
            </div>
            
            <div className="proof-row">
              <svg className="arrow-svg" viewBox="0 0 56 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 2L54 23L28 44L28 30L2 30L2 16L28 16L28 2Z" fill="url(#arrowGradient)"/>
                <defs>
                  <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f97316"/>
                    <stop offset="100%" stopColor="#fbbf24"/>
                  </linearGradient>
                </defs>
              </svg>
              
              <div className="social-proof">
                <div className="avatars">
                  <div className="av a1">R</div>
                  <div className="av a2">M</div>
                  <div className="av a3">A</div>
                  <div className="av a4">K</div>
                  <div className="av a5">+</div>
                </div>
                <div className="stars-wrap">
                  <div className="stars">★★★★★</div>
                  <div className="stars-label">2,847+ Success Stories</div>
                </div>
              </div>
              
              <svg className="arrow-svg arrow-right-flip" viewBox="0 0 56 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 2L54 23L28 44L28 30L2 30L2 16L28 16L28 2Z" fill="url(#arrowGradient2)"/>
                <defs>
                  <linearGradient id="arrowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f97316"/>
                    <stop offset="100%" stopColor="#fbbf24"/>
                  </linearGradient>
                </defs>
              </svg>
              
              <div className="proof-divider"></div>
              <div className="proof-text">
                <strong>90-Day</strong> Guarantee
              </div>
            </div>
          </div>
          
          {/* VIDEO SECTION */}
          <div className="video-wrap">
            <div className="video-outer-ring">
              <div className="video-container">
                <div className="video-thumb-bg">
                  <div style={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#f0f0f0',
                    fontSize: '18px',
                    fontWeight: '600'
                  }}>
                    VIDEO THUMBNAIL PLACEHOLDER
                  </div>
                </div>
                <div className="video-overlay">
                  <div className="play-btn" onClick={() => alert('Video would play here')}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5V19L19 12L8 5Z" fill="#000"/>
                    </svg>
                  </div>
                  <div className="video-label">FREE TRAINING • 47 MINS</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* BOTTOM BAR */}
          <div className="bottom-bar">
            <div className="check-item">
              <div className="check-icon">✓</div>
              <span>ZERO Equipment Needed</span>
            </div>
            <div className="check-item">
              <div className="check-icon">✓</div>
              <span>30-Min Daily Sessions</span>
            </div>
            <div className="check-item">
              <div className="check-icon">✓</div>
              <span>Indian Body Blueprint</span>
            </div>
            <div className="check-item">
              <div className="check-icon">✓</div>
              <span>Proven by 2,847+ Men</span>
            </div>
          </div>
          
        </div>
      </div>

      {/* STRATEGY SECTION */}
      <div className="strategy-section">
        <div className="section-eyebrow">THE TRANSFORMATION ROADMAP</div>
        <h2 className="section-headline">
          THE <span>3-PHASE ATHLETIC</span> SYSTEM
        </h2>
        <p className="section-sub">
          The exact 90-day framework that has transformed thousands of Indian men 
          from ordinary to extraordinary — without fancy equipment or expensive supplements.
        </p>
        
        <div className="steps-wrap">
          <div className="step-row">
            <div className="step-left">
              <div className="step-num">01</div>
              <div className="step-line"></div>
            </div>
            <div className="step-card">
              <div className="card-top">
                <div className="card-icon">🔥</div>
                <div className="card-tag">FOUNDATION</div>
              </div>
              <div className="card-title">METABOLIC IGNITION</div>
              <div className="card-body">
                Kickstart your transformation with our <strong>signature bodyweight protocols</strong> 
                designed specifically for the Indian male physiology. No gym needed — just 30 minutes 
                of targeted movements that ignite your metabolic fire and prepare your body for rapid change.
              </div>
            </div>
          </div>
          
          <div className="step-row">
            <div className="step-left">
              <div className="step-num">02</div>
              <div className="step-line"></div>
            </div>
            <div className="step-card">
              <div className="card-top">
                <div className="card-icon">💪</div>
                <div className="card-tag">STRENGTH</div>
              </div>
              <div className="card-title">POWER AMPLIFICATION</div>
              <div className="card-body">
                Systematically build <strong>functional strength and lean muscle</strong> using 
                progressive overload principles adapted for home training. Watch as your body 
                transforms while your confidence skyrockets to new heights.
              </div>
            </div>
          </div>
          
          <div className="step-row">
            <div className="step-left">
              <div className="step-num">03</div>
            </div>
            <div className="step-card">
              <div className="card-top">
                <div className="card-icon">🏆</div>
                <div className="card-tag">MASTERY</div>
              </div>
              <div className="card-title">ATHLETIC OPTIMIZATION</div>
              <div className="card-body">
                Fine-tune your newly forged physique with <strong>advanced conditioning protocols</strong> 
                and mental toughness training. Emerge as the athletic, confident man you've always 
                envisioned yourself to be.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}