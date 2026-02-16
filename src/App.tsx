import { useState } from 'react';
import { EmotionWheel } from './components/EmotionWheel';
import { EmotionDetail } from './components/EmotionDetail';
import { DailyChallenge } from './components/DailyChallenge';
import { RadarChart } from './components/RadarChart';
import { Journal } from './components/Journal';
import { Progress } from './components/Progress';
import { useStore } from './hooks/useStore';
import type { Emotion } from './data/emotions';

type Tab = 'wheel' | 'challenge' | 'range' | 'journal' | 'progress';

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: 'wheel', label: 'Wheel', icon: '🎨' },
  { id: 'challenge', label: 'Daily', icon: '⚡' },
  { id: 'range', label: 'Range', icon: '📊' },
  { id: 'journal', label: 'Journal', icon: '📝' },
  { id: 'progress', label: 'Progress', icon: '🏆' },
];

export default function App() {
  const [tab, setTab] = useState<Tab>('wheel');
  const [selected, setSelected] = useState<Emotion | null>(null);
  const { state, addJournalEntry, completeChallenge, getTodayChallenge } = useStore();

  return (
    <div className="min-h-dvh flex flex-col">
      {/* Header */}
      <header className="pt-8 pb-4 px-4 text-center">
        <h1 className="text-lg font-light tracking-[0.3em] uppercase bg-gradient-to-r from-yellow-300 via-rose-400 to-purple-400 bg-clip-text text-transparent">
          Emotional Range
        </h1>
      </header>

      {/* Content */}
      <main className="flex-1 px-4 pb-24 overflow-y-auto">
        {tab === 'wheel' && <EmotionWheel onSelect={setSelected} unlockedEmotions={state.unlockedEmotions} />}
        {tab === 'challenge' && <DailyChallenge challenge={getTodayChallenge()} onComplete={completeChallenge} />}
        {tab === 'range' && <RadarChart journal={state.journal} />}
        {tab === 'journal' && <Journal journal={state.journal} />}
        {tab === 'progress' && <Progress unlockedEmotions={state.unlockedEmotions} />}
      </main>

      {/* Detail modal */}
      {selected && (
        <EmotionDetail
          emotion={selected}
          onClose={() => setSelected(null)}
          onLog={(id, intensity) => addJournalEntry(id, intensity)}
        />
      )}

      {/* Bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#0a0a0f]/90 backdrop-blur-lg border-t border-white/5">
        <div className="flex justify-around max-w-md mx-auto">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex flex-col items-center py-3 px-2 text-xs transition-all ${tab === t.id ? 'text-white' : 'text-gray-500'}`}
            >
              <span className="text-lg mb-0.5">{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
