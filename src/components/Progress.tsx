import { emotions, categories, categoryColors, categoryLabels } from '../data/emotions';

interface Props {
  unlockedEmotions: string[];
}

export function Progress({ unlockedEmotions }: Props) {
  const total = emotions.length;
  const unlocked = unlockedEmotions.length;
  const pct = Math.round((unlocked / total) * 100);

  return (
    <div className="fade-in max-w-md mx-auto space-y-6">
      <h2 className="text-2xl font-light tracking-wide text-center">Progress</h2>
      <div className="text-center space-y-2">
        <p className="text-6xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          {unlocked}/{total}
        </p>
        <p className="text-gray-400">Emotions Unlocked</p>
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full rounded-full transition-all duration-500"
            style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #FFD700, #E74C3C, #8E44AD, #1ABC9C)' }} />
        </div>
      </div>
      <div className="space-y-4">
        {categories.map(cat => {
          const catEmotions = emotions.filter(e => e.category === cat);
          const catUnlocked = catEmotions.filter(e => unlockedEmotions.includes(e.id));
          return (
            <div key={cat} className="bg-white/5 rounded-xl p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium" style={{ color: categoryColors[cat] }}>{categoryLabels[cat]}</span>
                <span className="text-xs text-gray-400">{catUnlocked.length}/{catEmotions.length}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {catEmotions.map(e => {
                  const isUnlocked = unlockedEmotions.includes(e.id);
                  return (
                    <span key={e.id}
                      className="text-xs px-2 py-1 rounded-full transition-all"
                      style={{
                        background: isUnlocked ? `${e.color}33` : '#ffffff08',
                        color: isUnlocked ? e.color : '#555',
                        border: `1px solid ${isUnlocked ? e.color + '55' : '#ffffff10'}`,
                      }}>
                      {isUnlocked ? e.name : '???'}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
