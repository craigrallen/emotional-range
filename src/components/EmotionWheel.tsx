import { emotions, categories, categoryColors, categoryLabels, type Emotion, type Category } from '../data/emotions';

interface Props {
  onSelect: (emotion: Emotion) => void;
  unlockedEmotions: string[];
}

export function EmotionWheel({ onSelect, unlockedEmotions }: Props) {
  const grouped = categories.reduce((acc, cat) => {
    acc[cat] = emotions.filter(e => e.category === cat);
    return acc;
  }, {} as Record<Category, Emotion[]>);

  const totalEmotions = emotions.length;
  let currentAngle = 0;

  return (
    <div className="flex flex-col items-center gap-6 fade-in">
      <h2 className="text-2xl font-light tracking-wide">Emotion Wheel</h2>
      <p className="text-sm text-gray-400 max-w-md text-center">Tap any emotion to explore it. Unlocked emotions glow.</p>
      <div className="relative w-80 h-80 md:w-96 md:h-96">
        <svg viewBox="-120 -120 240 240" className="w-full h-full">
          {categories.map(cat => {
            const catEmotions = grouped[cat];
            const catAngleSize = (catEmotions.length / totalEmotions) * 360;
            const startAngle = currentAngle;
            currentAngle += catAngleSize;

            return catEmotions.map((emotion, i) => {
              const sliceAngle = catAngleSize / catEmotions.length;
              const angle = startAngle + i * sliceAngle;
              const midAngle = angle + sliceAngle / 2;
              const rad = (midAngle * Math.PI) / 180;
              const isUnlocked = unlockedEmotions.includes(emotion.id);

              const innerR = 35;
              const outerR = 105;
              const a1 = (angle * Math.PI) / 180;
              const a2 = ((angle + sliceAngle) * Math.PI) / 180;

              const x1 = Math.cos(a1) * innerR;
              const y1 = Math.sin(a1) * innerR;
              const x2 = Math.cos(a1) * outerR;
              const y2 = Math.sin(a1) * outerR;
              const x3 = Math.cos(a2) * outerR;
              const y3 = Math.sin(a2) * outerR;
              const x4 = Math.cos(a2) * innerR;
              const y4 = Math.sin(a2) * innerR;

              const large = sliceAngle > 180 ? 1 : 0;
              const path = `M${x1},${y1} L${x2},${y2} A${outerR},${outerR} 0 ${large} 1 ${x3},${y3} L${x4},${y4} A${innerR},${innerR} 0 ${large} 0 ${x1},${y1}Z`;

              const labelR = (innerR + outerR) / 2;
              const lx = Math.cos(rad) * labelR;
              const ly = Math.sin(rad) * labelR;

              return (
                <g key={emotion.id} onClick={() => onSelect(emotion)} className="cursor-pointer group">
                  <path
                    d={path}
                    fill={emotion.color}
                    opacity={isUnlocked ? 0.9 : 0.35}
                    stroke="#0a0a0f"
                    strokeWidth="1"
                    className="transition-all duration-200 hover:opacity-100"
                  />
                  {isUnlocked && (
                    <path d={path} fill="none" stroke="#fff" strokeWidth="1.5" opacity="0.3" />
                  )}
                  <text
                    x={lx}
                    y={ly}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="#0a0a0f"
                    fontSize="5"
                    fontWeight="600"
                    transform={`rotate(${midAngle > 90 && midAngle < 270 ? midAngle + 180 : midAngle}, ${lx}, ${ly})`}
                    className="pointer-events-none select-none"
                  >
                    {emotion.name}
                  </text>
                </g>
              );
            });
          })}
          <circle cx="0" cy="0" r="34" fill="#0a0a0f" />
          <text x="0" y="-4" textAnchor="middle" fill="#e8e8f0" fontSize="7" fontWeight="300">EMOTIONAL</text>
          <text x="0" y="6" textAnchor="middle" fill="#e8e8f0" fontSize="7" fontWeight="300">RANGE</text>
        </svg>
      </div>
      <div className="flex flex-wrap justify-center gap-3 mt-2">
        {categories.map(cat => (
          <span key={cat} className="flex items-center gap-1.5 text-xs text-gray-300">
            <span className="w-3 h-3 rounded-full" style={{ background: categoryColors[cat] }} />
            {categoryLabels[cat]}
          </span>
        ))}
      </div>
    </div>
  );
}
