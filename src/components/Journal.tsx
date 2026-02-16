import { emotions } from '../data/emotions';
import type { JournalEntry } from '../hooks/useStore';

interface Props {
  journal: JournalEntry[];
}

export function Journal({ journal }: Props) {
  const sorted = [...journal].sort((a, b) => b.timestamp - a.timestamp);

  return (
    <div className="fade-in max-w-md mx-auto space-y-6">
      <h2 className="text-2xl font-light tracking-wide text-center">Emotion Journal</h2>
      <p className="text-sm text-gray-400 text-center">Tap emotions on the wheel to log entries</p>
      {sorted.length === 0 ? (
        <div className="text-center py-16 text-gray-600">
          <p className="text-5xl mb-4">📝</p>
          <p>No entries yet. Explore the wheel to start logging.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {sorted.slice(0, 50).map(entry => {
            const emotion = emotions.find(e => e.id === entry.emotionId);
            if (!emotion) return null;
            const date = new Date(entry.timestamp);
            return (
              <div key={entry.id} className="bg-white/5 rounded-xl p-4 flex items-center gap-4"
                style={{ borderLeft: `3px solid ${emotion.color}` }}>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium" style={{ color: emotion.color }}>{emotion.name}</span>
                    <span className="text-xs text-gray-500">
                      {date.toLocaleDateString()} {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  {entry.note && <p className="text-sm text-gray-400 mt-1">{entry.note}</p>}
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map(n => (
                    <div key={n} className="w-2 h-6 rounded-sm"
                      style={{ background: n <= entry.intensity ? emotion.color : '#ffffff10' }} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
