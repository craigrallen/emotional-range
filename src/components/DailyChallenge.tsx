import { useMemo } from 'react';
import { emotions } from '../data/emotions';
import type { DailyChallenge as DC } from '../hooks/useStore';

interface Props {
  challenge: DC | null;
  onComplete: (date: string, emotionId: string, intensity: number) => void;
}

function getDailyEmotion(): { date: string; emotion: typeof emotions[0] } {
  const today = new Date().toISOString().split('T')[0];
  const seed = today.split('-').reduce((a, b) => a + parseInt(b), 0);
  const emotion = emotions[seed % emotions.length];
  return { date: today, emotion };
}

export function DailyChallenge({ challenge, onComplete }: Props) {
  const { date, emotion } = useMemo(getDailyEmotion, []);
  const isCompleted = challenge?.completed;

  return (
    <div className="fade-in max-w-md mx-auto space-y-6">
      <h2 className="text-2xl font-light tracking-wide text-center">Daily Challenge</h2>
      <div
        className="rounded-2xl p-6 space-y-4"
        style={{ background: `linear-gradient(160deg, ${emotion.color}15, #14141f)`, border: `1px solid ${emotion.color}33` }}
      >
        <p className="text-sm text-gray-400 uppercase tracking-widest">Today, notice</p>
        <h3 className="text-4xl font-bold" style={{ color: emotion.color }}>{emotion.name}</h3>
        <p className="text-gray-300">{emotion.definition}</p>
        <div className="bg-white/5 rounded-xl p-4">
          <p className="text-sm text-gray-200 font-medium mb-1">🎬 To evoke it</p>
          <p className="text-sm text-gray-400">{emotion.mediaPrompt}</p>
        </div>
        <div className="bg-white/5 rounded-xl p-4">
          <p className="text-sm text-gray-200 font-medium mb-1">🌱 How to cultivate</p>
          <p className="text-sm text-gray-400">{emotion.cultivate}</p>
        </div>
        {isCompleted ? (
          <div className="text-center py-3 rounded-xl bg-white/5">
            <p className="text-lg" style={{ color: emotion.color }}>✓ Completed — intensity {challenge.intensity}/5</p>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="text-sm text-gray-400 text-center">Evening check-in: How intensely did you feel it?</p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map(n => (
                <button
                  key={n}
                  onClick={() => onComplete(date, emotion.id, n)}
                  className="flex-1 py-3 rounded-xl text-lg font-bold transition-all hover:scale-105"
                  style={{ background: `${emotion.color}${n * 12 + 20}`, color: n > 3 ? '#0a0a0f' : '#e8e8f0' }}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
