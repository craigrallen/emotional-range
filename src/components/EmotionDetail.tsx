import type { Emotion } from '../data/emotions';
import { categoryLabels } from '../data/emotions';

interface Props {
  emotion: Emotion;
  onClose: () => void;
  onLog: (emotionId: string, intensity: number) => void;
}

export function EmotionDetail({ emotion, onClose, onLog }: Props) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 fade-in" onClick={onClose}>
      <div
        className="max-w-md w-full rounded-2xl p-6 space-y-4"
        style={{ background: `linear-gradient(135deg, ${emotion.color}22, #14141f)`, border: `1px solid ${emotion.color}44` }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-gray-400">{categoryLabels[emotion.category]}</span>
            <h3 className="text-2xl font-semibold" style={{ color: emotion.color }}>{emotion.name}</h3>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl leading-none">&times;</button>
        </div>
        <p className="text-gray-300 leading-relaxed">{emotion.definition}</p>
        <div className="bg-white/5 rounded-xl p-4 space-y-1">
          <h4 className="text-sm font-semibold text-gray-200">How to cultivate</h4>
          <p className="text-sm text-gray-400">{emotion.cultivate}</p>
        </div>
        <div className="bg-white/5 rounded-xl p-4 space-y-1">
          <h4 className="text-sm font-semibold text-gray-200">🎬 Media prompt</h4>
          <p className="text-sm text-gray-400">{emotion.mediaPrompt}</p>
        </div>
        <div className="flex gap-2 pt-2">
          {[1, 2, 3, 4, 5].map(n => (
            <button
              key={n}
              onClick={() => { onLog(emotion.id, n); onClose(); }}
              className="flex-1 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105"
              style={{ background: `${emotion.color}${n * 12 + 20}`, color: n > 3 ? '#0a0a0f' : '#e8e8f0' }}
            >
              {n}
            </button>
          ))}
        </div>
        <p className="text-xs text-center text-gray-500">Rate intensity 1-5 to log this emotion</p>
      </div>
    </div>
  );
}
