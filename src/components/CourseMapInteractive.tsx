'use client';

import { useState } from 'react';

interface HoleData {
  hole: number;
  par: number;
  yards: number;
  tip: string;
  signature?: boolean;
  cx: number;
  cy: number;
}

const holes: HoleData[] = [
  { hole: 1, par: 4, yards: 395, tip: 'Gentle opener with views of downtown Denver', cx: 370, cy: 400 },
  { hole: 2, par: 3, yards: 212, tip: 'First par 3 - elevated tee with mountain backdrop', cx: 200, cy: 260 },
  { hole: 3, par: 5, yards: 545, tip: 'Signature hole - risk/reward over water', signature: true, cx: 380, cy: 170 },
  { hole: 4, par: 4, yards: 420, tip: 'Dogleg left, bunkers guard the green', cx: 590, cy: 200 },
  { hole: 5, par: 4, yards: 380, tip: 'Uphill approach to elevated green', cx: 730, cy: 340 },
  { hole: 6, par: 4, yards: 410, tip: 'Strategic tee shot avoids fairway bunkers', cx: 830, cy: 520 },
  { hole: 7, par: 5, yards: 520, tip: 'Best views of the Denver skyline', signature: true, cx: 680, cy: 590 },
  { hole: 8, par: 3, yards: 157, tip: 'Shortest par 3 - precision required', cx: 590, cy: 430 },
  { hole: 9, par: 4, yards: 435, tip: 'Strong finish to front nine, water right', cx: 490, cy: 280 },
  { hole: 10, par: 4, yards: 405, tip: 'Solid start to back nine', cx: 300, cy: 270 },
  { hole: 11, par: 4, yards: 390, tip: 'Downhill tee shot, watch the wind', cx: 170, cy: 420 },
  { hole: 12, par: 4, yards: 385, tip: 'Mountain views, tricky green', signature: true, cx: 275, cy: 560 },
  { hole: 13, par: 3, yards: 207, tip: 'Mid-length par 3, front bunker', cx: 440, cy: 570 },
  { hole: 14, par: 5, yards: 530, tip: 'Reachable in two for big hitters', cx: 340, cy: 380 },
  { hole: 15, par: 3, yards: 245, tip: 'Longest par 3 on the course', cx: 330, cy: 210 },
  { hole: 16, par: 4, yards: 425, tip: 'Challenging approach over swale', cx: 540, cy: 125 },
  { hole: 17, par: 4, yards: 408, tip: 'Dramatic elevation change', cx: 770, cy: 150 },
  { hole: 18, par: 3, yards: 214, tip: 'Finishing par 3 back to clubhouse', cx: 770, cy: 350 },
];

export default function CourseMapInteractive() {
  const [selectedHole, setSelectedHole] = useState<HoleData | null>(null);
  const [panelVisible, setPanelVisible] = useState(false);

  const handleHoleClick = (hole: HoleData) => {
    setSelectedHole(hole);
    setPanelVisible(true);
  };

  const closePanel = () => {
    setPanelVisible(false);
    setSelectedHole(null);
  };

  return (
    <div className="course-map-wrapper" data-animate="fade-up">
      <svg className="course-map-svg" viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="fairwayGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#4a7c3f', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#3d6834', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#4a90b8' }} />
            <stop offset="100%" style={{ stopColor: '#3a7a9f' }} />
          </linearGradient>
        </defs>

        {/* Course background */}
        <rect x="0" y="0" width="1000" height="700" fill="#2d5a27" opacity="0.3"/>

        {/* Rough/tree areas */}
        <ellipse cx="100" cy="150" rx="80" ry="60" fill="#1a3d14" opacity="0.6"/>
        <ellipse cx="900" cy="200" rx="70" ry="50" fill="#1a3d14" opacity="0.6"/>
        <ellipse cx="150" cy="550" rx="90" ry="70" fill="#1a3d14" opacity="0.6"/>
        <ellipse cx="850" cy="600" rx="85" ry="65" fill="#1a3d14" opacity="0.6"/>

        {/* Water feature */}
        <path d="M 400,320 Q 450,280 520,300 Q 580,320 560,380 Q 540,440 480,450 Q 420,460 380,420 Q 340,380 400,320" fill="url(#waterGrad)" />

        {/* Clubhouse */}
        <g>
          <rect x="470" y="600" width="60" height="40" fill="#8B7355" rx="4"/>
          <polygon points="470,600 500,575 530,600" fill="#5C4033"/>
          <text x="500" y="660" textAnchor="middle" fill="#d4af37" fontSize="12" fontWeight="600">Clubhouse</text>
        </g>

        {/* Fairways */}
        {[
          'M 500,580 Q 450,500 380,420', 'M 340,400 Q 280,350 220,280',
          'M 200,250 Q 280,200 360,180', 'M 390,180 Q 480,160 570,190',
          'M 600,200 Q 680,250 720,320', 'M 740,350 Q 800,420 820,500',
          'M 830,530 Q 780,580 700,590', 'M 670,580 Q 620,520 600,450',
          'M 590,420 Q 540,360 500,300', 'M 480,270 Q 400,240 320,260',
          'M 290,270 Q 220,320 180,400', 'M 170,430 Q 200,500 260,550',
          'M 290,570 Q 350,600 420,580', 'M 450,560 Q 380,480 350,400',
          'M 340,370 Q 300,300 320,230', 'M 340,200 Q 420,140 520,130',
          'M 550,130 Q 650,100 750,140', 'M 780,160 Q 820,250 780,340',
        ].map((d, i) => (
          <path key={i} d={d} stroke="url(#fairwayGrad)" strokeWidth={i % 3 === 0 ? 25 : i % 3 === 1 ? 22 : 20} fill="none" strokeLinecap="round" />
        ))}

        {/* Hole markers */}
        {holes.map(hole => (
          <g
            key={hole.hole}
            className={`hole-marker${selectedHole?.hole === hole.hole ? ' selected' : ''}`}
            style={{ cursor: 'pointer' }}
            onClick={() => handleHoleClick(hole)}
            tabIndex={0}
            role="button"
            aria-label={`Hole ${hole.hole}, Par ${hole.par}, ${hole.yards} yards`}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleHoleClick(hole); } }}
          >
            <circle
              cx={hole.cx}
              cy={hole.cy}
              r={hole.signature ? 18 : 16}
              fill="#1a1a1a"
              stroke="#d4af37"
              strokeWidth={hole.signature ? 3 : 2}
            />
            <text
              x={hole.cx}
              y={hole.cy + 5}
              textAnchor="middle"
              fill={hole.signature ? '#d4af37' : '#fff'}
              fontSize="12"
              fontWeight="bold"
            >
              {hole.hole}
            </text>
          </g>
        ))}

        {/* Legend */}
        <g transform="translate(20, 600)">
          <rect x="0" y="0" width="140" height="80" fill="rgba(0,0,0,0.7)" rx="8"/>
          <circle cx="20" cy="20" r="8" fill="#1a1a1a" stroke="#d4af37" strokeWidth="2"/>
          <text x="35" y="24" fill="#fff" fontSize="11">Hole Marker</text>
          <circle cx="20" cy="45" r="8" fill="#1a1a1a" stroke="#d4af37" strokeWidth="3"/>
          <text x="35" y="49" fill="#d4af37" fontSize="11">Signature Hole</text>
          <rect x="12" y="60" width="16" height="10" fill="url(#waterGrad)" rx="2"/>
          <text x="35" y="69" fill="#fff" fontSize="11">Water Hazard</text>
        </g>
      </svg>

      {/* Hole Details Panel */}
      <div className={`hole-details-panel${panelVisible ? ' visible' : ''}`}>
        <button className="panel-close" aria-label="Close details" onClick={closePanel}>&times;</button>
        <div className="panel-content">
          {selectedHole ? (
            <>
              <div className="panel-header">
                <span className="hole-number">Hole {selectedHole.hole}</span>
                <span className="hole-par">Par {selectedHole.par}</span>
              </div>
              <div className="hole-yardage">{selectedHole.yards} yards</div>
              <p className="hole-tip">{selectedHole.tip}</p>
              <div className="hole-badges">
                {selectedHole.signature && <span className="hole-badge signature">Signature Hole</span>}
                <span className={`hole-badge par-${selectedHole.par}`}>
                  Par {selectedHole.par}
                </span>
              </div>
            </>
          ) : (
            <>
              <div className="panel-header">
                <span className="hole-number">Hole 1</span>
                <span className="hole-par">Par 4</span>
              </div>
              <div className="hole-yardage">395 yards</div>
              <p className="hole-tip">Click a hole marker for details</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
