import { useState, useCallback } from 'react';

export interface JournalEntry {
  id: string;
  emotionId: string;
  intensity: number;
  timestamp: number;
  note?: string;
}

export interface DailyChallenge {
  date: string;
  emotionId: string;
  completed: boolean;
  intensity?: number;
}

export interface AppState {
  journal: JournalEntry[];
  challenges: DailyChallenge[];
  unlockedEmotions: string[];
}

const STORAGE_KEY = 'emotional-range-state';

function loadState(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // localStorage unavailable or JSON parse failed; use default state
  }
  return { journal: [], challenges: [], unlockedEmotions: [] };
}

function saveState(state: AppState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function useStore() {
  const [state, setState] = useState<AppState>(loadState);

  const update = useCallback((fn: (s: AppState) => AppState) => {
    setState(prev => {
      const next = fn(prev);
      saveState(next);
      return next;
    });
  }, []);

  const addJournalEntry = useCallback((emotionId: string, intensity: number, note?: string) => {
    update(s => {
      const unlocked = s.unlockedEmotions.includes(emotionId)
        ? s.unlockedEmotions
        : [...s.unlockedEmotions, emotionId];
      return {
        ...s,
        unlockedEmotions: unlocked,
        journal: [...s.journal, { id: Date.now().toString(), emotionId, intensity, timestamp: Date.now(), note }],
      };
    });
  }, [update]);

  const completeChallenge = useCallback((date: string, emotionId: string, intensity: number) => {
    update(s => {
      const existing = s.challenges.find(c => c.date === date);
      const challenges = existing
        ? s.challenges.map(c => c.date === date ? { ...c, completed: true, intensity } : c)
        : [...s.challenges, { date, emotionId, completed: true, intensity }];
      const unlocked = s.unlockedEmotions.includes(emotionId)
        ? s.unlockedEmotions
        : [...s.unlockedEmotions, emotionId];
      return { ...s, challenges, unlockedEmotions: unlocked };
    });
  }, [update]);

  const getTodayChallenge = useCallback((): DailyChallenge | null => {
    const today = new Date().toISOString().split('T')[0];
    return state.challenges.find(c => c.date === today) || null;
  }, [state.challenges]);

  return { state, addJournalEntry, completeChallenge, getTodayChallenge };
}
