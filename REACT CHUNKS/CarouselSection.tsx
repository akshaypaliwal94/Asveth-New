import React, { useRef, useEffect } from 'react';

interface VideoCard {
  type: 'video';
  id: string;
  tag: string;
  label: string;
  subtitle: string;
}

interface BeforeAfterCard {
  type: 'before-after';
  id: string;
  name: string;
  stat: string;
  description: string;
}

interface StatCard {
  type: 'stat';
  id: string;
  hashtag: string;
  mainStat: string;
  badges: string[];
}

type CarouselCard = VideoCard | BeforeAfterCard | StatCard;

const CarouselSection: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 300;

  const carouselCards: CarouselCard[] = [
    {
      type: 'video',
      id: 'rahul-video',
      tag: 'Video Testimonial',
      label: 'Rahul\'s Story',
      subtitle: 'Chennai · Lost 40kg · 12 months'
    },
    {
      type: 'before-after',
      id: 'rahul-ba',
      name: 'Rahul',
      stat: '↓ 40kg',
      description: 'Gym-goer for years. No results. Blood markers revealed the real block.'
    },
    {
      type: 'stat',
      id: 'rahul-stat',
      hashtag: '#AthleticIndian',
      mainStat: 'Lost 40kg\nMinimal\nLoose Skin',
      badges: ['🔥 D3 Fixed', '↑ Testosterone', '✓ No Surgery']
    },
    {
      type: 'video',
      id: 'arjun-video',
      tag: 'Video Testimonial',
      label: 'Arjun\'s Story',
      subtitle: 'Singapore · 85% pain-free · 8 weeks'
    },
    {
      type: 'before-after',
      id: 'muttukumar-ba',
      name: 'Muttukumar',
      stat: 'Body Recomp',
      description: 'Marathon runner. Still skinny fat. Fixed in 90 days without stopping his cardio.'
    },
    {
      type: 'stat',
      id: 'muttukumar-stat',
      hashtag: '#AthleticIndian',
      mainStat: '↓ 12 min\nMarathon\nPR',
      badges: ['🏃 Dubai Runner', '↑ Protein Fixed', '✓ Body Recomp']
    },
    {
      type: 'video',
      id: 'machala-video',
      tag: 'Video Testimonial',
      label: 'Machala\'s Story',
      subtitle: 'France · 4kg + skin cleared · 1 month'
    },
    {
      type: 'stat',
      id: 'machala-stat',
      hashtag: '#AthleticIndian',
      mainStat: '85%\nPain\nResolved',
      badges: ['💪 Strength Fixed', '✓ No Physio', 'IT Professional']
    }
  ];

  // Drag to scroll functionality
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      track.classList.add('grabbing');
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      track.classList.remove('grabbing');
    };

    const handleMouseUp = () => {
      isDown = false;
      track.classList.remove('grabbing');
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      track.scrollLeft = scrollLeft - (x - startX) * 1.5;
    };

    track.addEventListener('mousedown', handleMouseDown);
    track.addEventListener('mouseleave', handleMouseLeave);
    track.addEventListener('mouseup', handleMouseUp);
    track.addEventListener('mousemove', handleMouseMove);

    return () => {
      track.removeEventListener('mousedown', handleMouseDown);
      track.removeEventListener('mouseleave', handleMouseLeave);
      track.removeEventListener('mouseup', handleMouseUp);
      track.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollTrack = (direction: 'prev' | 'next') => {
    const track = trackRef.current;
    if (!track) return;

    const scrollBy = direction === 'next' ? scrollAmount : -scrollAmount;
    track.scrollBy({ left: scrollBy, behavior: 'smooth' });
  };

  // Play button SVG component
  const PlayButtonSvg: React.FC = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M8 5v14l11-7z" />
    </svg>
  );

  const renderVideoCard = (card: VideoCard) => (
    <div key={card.id} className="c-card video-card">
      <div className="c-card-media">
        <div className="c-media-placeholder">🎥</div>
        <div className="c-play-btn">
          <PlayButtonSvg />
        </div>
        <div className="c-card-footer">
          <div className="c-card-tag">{card.tag}</div>
          <div className="c-card-label">{card.label}</div>
          <div className="c-card-sub">{card.subtitle}</div>
        </div>
      </div>
    </div>
  );

  const renderBeforeAfterCard = (card: BeforeAfterCard) => (
    <div key={card.id} className="c-card ba-card">
      <div className="c-ba-split">
        <div className="c-ba-slot">
          <div className="c-ba-slot-ph">📷</div>
          <div className="c-ba-label">Before</div>
        </div>
        <div className="c-ba-slot after">
          <div className="c-ba-slot-ph">📷</div>
          <div className="c-ba-label">After</div>
        </div>
      </div>
      <div className="c-ba-info">
        <div className="c-ba-name">
          {card.name} <span className="c-ba-stat">{card.stat}</span>
        </div>
        <div className="c-ba-desc">{card.description}</div>
      </div>
    </div>
  );

  const renderStatCard = (card: StatCard) => (
    <div key={card.id} className="c-card stat-card">
      <div className="c-stat-hashtag">{card.hashtag}</div>
      <div>
        <div className="c-stat-main">
          <em>{card.mainStat.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {index === 0 ? line : <><br />{line}</>}
            </React.Fragment>
          ))}</em>
        </div>
        <div className="c-stat-badges">
          {card.badges.map((badge, index) => (
            <span key={index} className="c-stat-badge">{badge}</span>
          ))}
        </div>
      </div>
      <div className="c-stat-photo-strip">
        <div className="c-stat-ph">📷</div>
        <div className="c-stat-ph after-ph">📷</div>
      </div>
    </div>
  );

  const renderCard = (card: CarouselCard) => {
    switch (card.type) {
      case 'video':
        return renderVideoCard(card);
      case 'before-after':
        return renderBeforeAfterCard(card);
      case 'stat':
        return renderStatCard(card);
      default:
        return null;
    }
  };

  return (
    <>
      <div className="section-divider" style={{ marginTop: '64px' }}></div>
      
      <section className="carousel-section">
        <div className="carousel-header">
          <p className="carousel-eyebrow">
            <strong>65+ men</strong> have gone through the Diagnostic-First Method
          </p>
          <h2 className="carousel-headline">See What Asveth's Clients Achieve</h2>
        </div>

        <div className="carousel-track-wrap">
          <div className="carousel-track" ref={trackRef}>
            {carouselCards.map(renderCard)}
          </div>
        </div>

        <div className="carousel-nav">
          <button 
            className="carousel-btn" 
            onClick={() => scrollTrack('prev')}
            aria-label="Previous testimonials"
          >
            ←
          </button>
          <button 
            className="carousel-btn" 
            onClick={() => scrollTrack('next')}
            aria-label="Next testimonials"
          >
            →
          </button>
        </div>
      </section>
    </>
  );
};

export default CarouselSection;