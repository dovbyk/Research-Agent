import React from "react";

type Props = {
  className?: string;
};

export function DragonWingsWatermark({ className }: Props) {
  return (
    <div
      className={
        "fixed inset-0 pointer-events-none z-0 opacity-[0.06] " +
        (className ?? "")
      }
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1600 900"
        className="h-full w-full text-foreground"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          
          {/* ========== BAR CHART 1 - Top Left ========== */}
          <g transform="translate(80, 60)">
            {/* Bars */}
            <rect x="0" y="120" width="35" height="80" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5" />
            <rect x="50" y="80" width="35" height="120" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5" />
            <rect x="100" y="40" width="35" height="160" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1.5" />
            <rect x="150" y="100" width="35" height="100" fill="currentColor" fillOpacity="0.07" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5" />
            <rect x="200" y="60" width="35" height="140" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5" />
            {/* Axis */}
            <line x1="0" y1="200" x2="250" y2="200" strokeOpacity="0.12" strokeWidth="1.5" />
            <line x1="0" y1="0" x2="0" y2="200" strokeOpacity="0.12" strokeWidth="1.5" />
          </g>

          {/* ========== LINE CHART 1 - Top Center ========== */}
          <g transform="translate(550, 80)">
            {/* Grid lines */}
            <line x1="0" y1="40" x2="320" y2="40" strokeOpacity="0.06" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="0" y1="80" x2="320" y2="80" strokeOpacity="0.06" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="0" y1="120" x2="320" y2="120" strokeOpacity="0.06" strokeWidth="1" strokeDasharray="4 4" />
            {/* Line path */}
            <path 
              d="M 0 140 L 50 100 L 100 120 L 150 60 L 200 80 L 250 30 L 320 50" 
              strokeOpacity="0.2" 
              strokeWidth="2.5" 
              fill="none"
            />
            {/* Data points */}
            <circle cx="0" cy="140" r="4" fill="currentColor" fillOpacity="0.15" />
            <circle cx="50" cy="100" r="4" fill="currentColor" fillOpacity="0.15" />
            <circle cx="100" cy="120" r="4" fill="currentColor" fillOpacity="0.15" />
            <circle cx="150" cy="60" r="5" fill="currentColor" fillOpacity="0.2" />
            <circle cx="200" cy="80" r="4" fill="currentColor" fillOpacity="0.15" />
            <circle cx="250" cy="30" r="4" fill="currentColor" fillOpacity="0.15" />
            <circle cx="320" cy="50" r="4" fill="currentColor" fillOpacity="0.15" />
            {/* Axis */}
            <line x1="0" y1="160" x2="320" y2="160" strokeOpacity="0.12" strokeWidth="1.5" />
            <line x1="0" y1="0" x2="0" y2="160" strokeOpacity="0.12" strokeWidth="1.5" />
          </g>

          {/* ========== BOX PLOT 1 - Top Right ========== */}
          <g transform="translate(1150, 70)">
            {/* Box plot 1 */}
            <line x1="40" y1="20" x2="40" y2="50" strokeOpacity="0.15" strokeWidth="1.5" />
            <rect x="20" y="50" width="40" height="60" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5" />
            <line x1="20" y1="80" x2="60" y2="80" strokeOpacity="0.2" strokeWidth="2" />
            <line x1="40" y1="110" x2="40" y2="150" strokeOpacity="0.15" strokeWidth="1.5" />
            <line x1="25" y1="20" x2="55" y2="20" strokeOpacity="0.12" strokeWidth="1.5" />
            <line x1="25" y1="150" x2="55" y2="150" strokeOpacity="0.12" strokeWidth="1.5" />
            
            {/* Box plot 2 */}
            <line x1="120" y1="30" x2="120" y2="60" strokeOpacity="0.15" strokeWidth="1.5" />
            <rect x="100" y="60" width="40" height="70" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5" />
            <line x1="100" y1="95" x2="140" y2="95" strokeOpacity="0.2" strokeWidth="2" />
            <line x1="120" y1="130" x2="120" y2="160" strokeOpacity="0.15" strokeWidth="1.5" />
            <line x1="105" y1="30" x2="135" y2="30" strokeOpacity="0.12" strokeWidth="1.5" />
            <line x1="105" y1="160" x2="135" y2="160" strokeOpacity="0.12" strokeWidth="1.5" />
            
            {/* Box plot 3 */}
            <line x1="200" y1="40" x2="200" y2="70" strokeOpacity="0.15" strokeWidth="1.5" />
            <rect x="180" y="70" width="40" height="50" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5" />
            <line x1="180" y1="90" x2="220" y2="90" strokeOpacity="0.2" strokeWidth="2" />
            <line x1="200" y1="120" x2="200" y2="145" strokeOpacity="0.15" strokeWidth="1.5" />
            <line x1="185" y1="40" x2="215" y2="40" strokeOpacity="0.12" strokeWidth="1.5" />
            <line x1="185" y1="145" x2="215" y2="145" strokeOpacity="0.12" strokeWidth="1.5" />
            
            {/* Axis */}
            <line x1="0" y1="180" x2="240" y2="180" strokeOpacity="0.12" strokeWidth="1.5" />
          </g>

          {/* ========== BAR CHART 2 - Middle Left ========== */}
          <g transform="translate(50, 380)">
            {/* Horizontal bars */}
            <rect x="30" y="0" width="180" height="25" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1.5" />
            <rect x="30" y="35" width="140" height="25" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1.5" />
            <rect x="30" y="70" width="220" height="25" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5" />
            <rect x="30" y="105" width="100" height="25" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1.5" />
            <rect x="30" y="140" width="160" height="25" fill="currentColor" fillOpacity="0.07" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1.5" />
            {/* Axis */}
            <line x1="30" y1="0" x2="30" y2="180" strokeOpacity="0.12" strokeWidth="1.5" />
          </g>

          {/* ========== LINE CHART 2 (Area) - Center ========== */}
          <g transform="translate(600, 350)">
            {/* Area fill */}
            <path 
              d="M 0 180 L 0 140 L 60 100 L 120 130 L 180 70 L 240 90 L 300 40 L 360 60 L 360 180 Z" 
              fill="currentColor" 
              fillOpacity="0.04"
            />
            {/* Line */}
            <path 
              d="M 0 140 L 60 100 L 120 130 L 180 70 L 240 90 L 300 40 L 360 60" 
              strokeOpacity="0.18" 
              strokeWidth="2" 
              fill="none"
            />
            {/* Axis */}
            <line x1="0" y1="180" x2="360" y2="180" strokeOpacity="0.1" strokeWidth="1.5" />
            <line x1="0" y1="0" x2="0" y2="180" strokeOpacity="0.1" strokeWidth="1.5" />
          </g>

          {/* ========== BOX PLOT 2 - Middle Right ========== */}
          <g transform="translate(1200, 360)">
            {/* Vertical box plots */}
            <line x1="30" y1="10" x2="30" y2="40" strokeOpacity="0.12" strokeWidth="1.5" />
            <rect x="15" y="40" width="30" height="80" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1.5" />
            <line x1="15" y1="75" x2="45" y2="75" strokeOpacity="0.18" strokeWidth="2" />
            <line x1="30" y1="120" x2="30" y2="160" strokeOpacity="0.12" strokeWidth="1.5" />
            
            <line x1="90" y1="25" x2="90" y2="55" strokeOpacity="0.12" strokeWidth="1.5" />
            <rect x="75" y="55" width="30" height="65" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1.5" />
            <line x1="75" y1="85" x2="105" y2="85" strokeOpacity="0.18" strokeWidth="2" />
            <line x1="90" y1="120" x2="90" y2="150" strokeOpacity="0.12" strokeWidth="1.5" />
            
            <line x1="150" y1="15" x2="150" y2="45" strokeOpacity="0.12" strokeWidth="1.5" />
            <rect x="135" y="45" width="30" height="90" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1.5" />
            <line x1="135" y1="90" x2="165" y2="90" strokeOpacity="0.18" strokeWidth="2" />
            <line x1="150" y1="135" x2="150" y2="165" strokeOpacity="0.12" strokeWidth="1.5" />
          </g>

          {/* ========== BAR CHART 3 - Bottom Left ========== */}
          <g transform="translate(100, 650)">
            <rect x="0" y="60" width="45" height="100" fill="currentColor" fillOpacity="0.07" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1.5" />
            <rect x="60" y="30" width="45" height="130" fill="currentColor" fillOpacity="0.09" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5" />
            <rect x="120" y="80" width="45" height="80" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1.5" />
            <rect x="180" y="50" width="45" height="110" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1.5" />
            <rect x="240" y="70" width="45" height="90" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1.5" />
            {/* Axis */}
            <line x1="0" y1="160" x2="300" y2="160" strokeOpacity="0.1" strokeWidth="1.5" />
            <line x1="0" y1="0" x2="0" y2="160" strokeOpacity="0.1" strokeWidth="1.5" />
          </g>

          {/* ========== LINE CHART 3 - Bottom Center ========== */}
          <g transform="translate(550, 660)">
            {/* Multiple lines */}
            <path 
              d="M 0 120 L 70 80 L 140 100 L 210 50 L 280 70 L 350 30" 
              strokeOpacity="0.16" 
              strokeWidth="2" 
              fill="none"
            />
            <path 
              d="M 0 140 L 70 130 L 140 110 L 210 120 L 280 90 L 350 100" 
              strokeOpacity="0.1" 
              strokeWidth="1.5" 
              fill="none"
              strokeDasharray="6 4"
            />
            {/* Dots on primary line */}
            <circle cx="0" cy="120" r="3" fill="currentColor" fillOpacity="0.12" />
            <circle cx="70" cy="80" r="3" fill="currentColor" fillOpacity="0.12" />
            <circle cx="140" cy="100" r="3" fill="currentColor" fillOpacity="0.12" />
            <circle cx="210" cy="50" r="4" fill="currentColor" fillOpacity="0.15" />
            <circle cx="280" cy="70" r="3" fill="currentColor" fillOpacity="0.12" />
            <circle cx="350" cy="30" r="3" fill="currentColor" fillOpacity="0.12" />
            {/* Axis */}
            <line x1="0" y1="150" x2="350" y2="150" strokeOpacity="0.1" strokeWidth="1.5" />
          </g>

          {/* ========== SCATTER / BOX PLOT 3 - Bottom Right ========== */}
          <g transform="translate(1100, 640)">
            {/* Scatter points */}
            <circle cx="30" cy="100" r="6" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" />
            <circle cx="70" cy="60" r="8" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" />
            <circle cx="120" cy="120" r="5" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
            <circle cx="160" cy="40" r="7" fill="currentColor" fillOpacity="0.09" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" />
            <circle cx="200" cy="90" r="6" fill="currentColor" fillOpacity="0.07" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" />
            <circle cx="250" cy="70" r="9" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.14" strokeWidth="1" />
            <circle cx="290" cy="110" r="5" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
            <circle cx="330" cy="50" r="7" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" />
            <circle cx="100" cy="80" r="4" fill="currentColor" fillOpacity="0.05" />
            <circle cx="180" cy="130" r="4" fill="currentColor" fillOpacity="0.05" />
            <circle cx="270" cy="30" r="5" fill="currentColor" fillOpacity="0.06" />
            {/* Trend line */}
            <line x1="20" y1="130" x2="340" y2="40" strokeOpacity="0.08" strokeWidth="1.5" strokeDasharray="8 6" />
            {/* Axis */}
            <line x1="0" y1="150" x2="360" y2="150" strokeOpacity="0.1" strokeWidth="1.5" />
            <line x1="0" y1="0" x2="0" y2="150" strokeOpacity="0.1" strokeWidth="1.5" />
          </g>

        </g>
      </svg>
    </div>
  );
}
