import { categories, categoryColors, categoryLabels, emotions } from '../data/emotions';
import type { JournalEntry } from '../hooks/useStore';

interface Props {
  journal: JournalEntry[];
}

export function RadarChart({ journal }: Props) {
  const categoryScores = categories.map(cat => {
    const catEmotions = emotions.filter(e => e.category === cat);
    const catEntries = journal.filter(j => catEmotions.some(e => e.id === j.emotionId));
    if (catEntries.length === 0) return 0;
    const avg = catEntries.reduce((s, e) => s + e.intensity, 0) / catEntries.length;
    const breadth = new Set(catEntries.map(e => e.emotionId)).size / catEmotions.length;
    return Math.min(1, (avg / 5) * 0.5 + breadth * 0.5);
  });

  const cx = 120, cy = 120, r = 90;
  const n = categories.length;

  function getPoint(i: number, value: number) {
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
    return { x: cx + Math.cos(angle) * r * value, y: cy + Math.sin(angle) * r * value };
  }

  const points = categoryScores.map((s, i) => getPoint(i, s));
  const poly = points.map(p => `${p.x},${p.y}`).join(' ');

  return (
    <div className="fade-in max-w-md mx-auto space-y-6">
      <h2 className="text-2xl font-light tracking-wide text-center">Emotional Range</h2>
      <p className="text-sm text-gray-400 text-center">Your radar shows strength across emotional categories</p>
      <svg viewBox="0 0 240 240" className="w-full max-w-xs mx-auto">
        {[0.2, 0.4, 0.6, 0.8, 1].map(level => (
          <polygon
            key={level}
            points={Array.from({ length: n }, (_, i) => getPoint(i, level)).map(p => `${p.x},${p.y}`).join(' ')}
            fill="none" stroke="#ffffff10" strokeWidth="0.5"
          />
        ))}
        {categories.map((_, i) => {
          const p = getPoint(i, 1);
          return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="#ffffff10" strokeWidth="0.5" />;
        })}
        <polygon points={poly} fill="url(#radarGrad)" stroke="#1ABC9C" strokeWidth="1.5" opacity="0.8" />
        <defs>
          <radialGradient id="radarGrad">
            <stop offset="0%" stopColor="#1ABC9C" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#1ABC9C" stopOpacity="0.05" />
          </radialGradient>
        </defs>
        {categories.map((cat, i) => {
          const p = getPoint(i, 1.18);
          return (
            <text key={cat} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="central"
              fill={categoryColors[cat]} fontSize="9" fontWeight="500">
              {categoryLabels[cat]}
            </text>
          );
        })}
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="3" fill={categoryColors[categories[i]]} />
        ))}
      </svg>
      <div className="grid grid-cols-2 gap-3">
        {categories.map((cat, i) => (
          <div key={cat} className="bg-white/5 rounded-xl p-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
              style={{ background: `${categoryColors[cat]}33`, color: categoryColors[cat] }}>
              {Math.round(categoryScores[i] * 100)}
            </div>
            <div>
              <p className="text-sm font-medium" style={{ color: categoryColors[cat] }}>{categoryLabels[cat]}</p>
              <p className="text-xs text-gray-500">{categoryScores[i] > 0.6 ? 'Strong' : categoryScores[i] > 0.3 ? 'Growing' : 'Underdeveloped'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
