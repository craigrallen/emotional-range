export interface Emotion {
  id: string;
  name: string;
  category: Category;
  color: string;
  definition: string;
  cultivate: string;
  mediaPrompt: string;
}

export type Category = 'joy' | 'sadness' | 'anger' | 'fear' | 'surprise' | 'complex';

export const categoryColors: Record<Category, string> = {
  joy: '#FFD700',
  sadness: '#4A90D9',
  anger: '#E74C3C',
  fear: '#8E44AD',
  surprise: '#F39C12',
  complex: '#1ABC9C',
};

export const categoryLabels: Record<Category, string> = {
  joy: 'Joy',
  sadness: 'Sadness',
  anger: 'Anger',
  fear: 'Fear',
  surprise: 'Surprise',
  complex: 'Complex',
};

export const emotions: Emotion[] = [
  // Joy family
  { id: 'euphoria', name: 'Euphoria', category: 'joy', color: '#FFE066', definition: 'Intense, overwhelming happiness that makes everything feel perfect.', cultivate: 'Recall a peak life moment — graduation, first love, a breakthrough. Let the memory wash over you fully.', mediaPrompt: 'Listen to "Here Comes the Sun" by The Beatles with your eyes closed.' },
  { id: 'contentment', name: 'Contentment', category: 'joy', color: '#F7DC6F', definition: 'Quiet satisfaction with the present moment, wanting nothing more.', cultivate: 'Sit in a comfortable spot. Notice warmth, safety, fullness. Whisper "this is enough."', mediaPrompt: 'Watch a sunset timelapse and breathe slowly.' },
  { id: 'gratitude', name: 'Gratitude', category: 'joy', color: '#F0B27A', definition: 'Deep appreciation for what you have or what others have done.', cultivate: 'Write three specific things you\'re grateful for, including why each matters.', mediaPrompt: 'Write a thank-you note to someone who shaped you.' },
  { id: 'tenderness', name: 'Tenderness', category: 'joy', color: '#FADBD8', definition: 'Gentle, caring affection — the softening of the heart toward another.', cultivate: 'Look at a photo of someone you love. Notice the warmth in your chest.', mediaPrompt: 'Watch a video of a parent reuniting with their child.' },
  { id: 'pride', name: 'Pride', category: 'joy', color: '#E59866', definition: 'Satisfaction from your own achievements or the achievements of those you care about.', cultivate: 'List three things you\'ve accomplished that required real effort.', mediaPrompt: 'Remember a moment someone said they were proud of you.' },
  { id: 'serenity', name: 'Serenity', category: 'joy', color: '#AED6F1', definition: 'Peaceful calm, an absence of disturbance — like still water.', cultivate: 'Close your eyes, breathe for 2 minutes, and imagine floating on a calm lake.', mediaPrompt: 'Listen to ambient nature sounds for 5 minutes.' },
  // Sadness family
  { id: 'melancholy', name: 'Melancholy', category: 'sadness', color: '#5B8DEF', definition: 'A gentle, reflective sadness — bittersweet and often beautiful.', cultivate: 'Look at old photos from a happy time that\'s passed. Let the bittersweetness in.', mediaPrompt: 'Listen to "Gymnopédie No. 1" by Erik Satie.' },
  { id: 'grief', name: 'Grief', category: 'sadness', color: '#2C3E7B', definition: 'Deep sorrow from loss — the weight of absence.', cultivate: 'Think of someone or something you\'ve lost. Allow tears if they come.', mediaPrompt: 'Read a poem about loss, like "Funeral Blues" by Auden.' },
  { id: 'loneliness', name: 'Loneliness', category: 'sadness', color: '#3B5998', definition: 'The ache of feeling disconnected, even when surrounded by others.', cultivate: 'Sit alone in silence for 10 minutes. Notice the desire for connection.', mediaPrompt: 'Watch "Lost in Translation" — the hotel scenes.' },
  { id: 'nostalgia', name: 'Nostalgia', category: 'sadness', color: '#7B68EE', definition: 'Wistful longing for a past time — warm memory tinged with loss.', cultivate: 'Smell something from your childhood — a food, soap, or perfume.', mediaPrompt: 'Listen to a song from your teenage years.' },
  { id: 'disappointment', name: 'Disappointment', category: 'sadness', color: '#6C7A89', definition: 'The gap between expectation and reality — a deflating feeling.', cultivate: 'Recall a time something didn\'t work out. Sit with that feeling without fixing it.', mediaPrompt: 'Think about a goal you set and didn\'t reach. What did you learn?' },
  // Anger family
  { id: 'frustration', name: 'Frustration', category: 'anger', color: '#E67E22', definition: 'Irritation from blocked goals — energy with nowhere to go.', cultivate: 'Try to solve a difficult puzzle. Notice when effort meets resistance.', mediaPrompt: 'Recall a time bureaucracy blocked you from something simple.' },
  { id: 'indignation', name: 'Indignation', category: 'anger', color: '#C0392B', definition: 'Righteous anger at injustice — anger that something is fundamentally wrong.', cultivate: 'Read about an injustice. Notice where the anger sits in your body.', mediaPrompt: 'Watch a documentary about social justice.' },
  { id: 'resentment', name: 'Resentment', category: 'anger', color: '#922B21', definition: 'Lingering bitterness from feeling wronged — anger that won\'t let go.', cultivate: 'Think of an old grudge. Notice if the anger still has heat.', mediaPrompt: 'Journal about something unfair that happened to you.' },
  { id: 'irritation', name: 'Irritation', category: 'anger', color: '#F1948A', definition: 'Low-grade annoyance — a prickle beneath the skin.', cultivate: 'Notice small annoyances throughout your day without reacting.', mediaPrompt: 'Pay attention to sounds that slightly bother you.' },
  { id: 'contempt', name: 'Contempt', category: 'anger', color: '#7B241C', definition: 'Feeling of superiority mixed with dislike — looking down.', cultivate: 'Notice when you dismiss someone\'s opinion. What triggers that response?', mediaPrompt: 'Watch a debate and notice moments of condescension.' },
  // Fear family
  { id: 'anxiety', name: 'Anxiety', category: 'fear', color: '#AF7AC5', definition: 'Unease about the future — the body preparing for uncertain threat.', cultivate: 'Think about an upcoming uncertain event. Notice your breathing change.', mediaPrompt: 'Sit in a dark room for 3 minutes. Notice what your mind does.' },
  { id: 'dread', name: 'Dread', category: 'fear', color: '#6C3483', definition: 'Heavy anticipation of something bad — fear with weight.', cultivate: 'Imagine receiving bad news. Where in your body does dread live?', mediaPrompt: 'Watch the opening of a thriller — notice tension building.' },
  { id: 'vulnerability', name: 'Vulnerability', category: 'fear', color: '#D2B4DE', definition: 'Exposure without armor — the courage of being seen.', cultivate: 'Share something honest with someone you trust. Notice the openness.', mediaPrompt: 'Watch Brené Brown\'s TED talk on vulnerability.' },
  { id: 'awe', name: 'Awe', category: 'fear', color: '#BB8FCE', definition: 'Wonder mixed with overwhelm — feeling small before something vast.', cultivate: 'Look at photos of deep space or the ocean floor. Feel your scale shift.', mediaPrompt: 'Watch "Overview Effect" — astronauts seeing Earth from space.' },
  { id: 'paranoia', name: 'Paranoia', category: 'fear', color: '#4A235A', definition: 'Suspicious watchfulness — sensing threat in neutral situations.', cultivate: 'In a crowded place, notice if you feel watched. Observe without acting.', mediaPrompt: 'Watch a scene from a psychological thriller.' },
  // Surprise family
  { id: 'wonder', name: 'Wonder', category: 'surprise', color: '#F5B041', definition: 'Delighted curiosity — the mind opening to something new.', cultivate: 'Learn one fact about nature that amazes you. Sit with the wonder.', mediaPrompt: 'Watch a magic trick and resist figuring it out.' },
  { id: 'shock', name: 'Shock', category: 'surprise', color: '#DC7633', definition: 'Sudden disorientation — the world rearranging without warning.', cultivate: 'Recall a moment that completely surprised you. The seconds before you processed it.', mediaPrompt: 'Think about a plot twist that genuinely shocked you.' },
  { id: 'confusion', name: 'Confusion', category: 'surprise', color: '#E59866', definition: 'Mental fog — the discomfort of not understanding.', cultivate: 'Read a paragraph of philosophy. Stay with the not-knowing.', mediaPrompt: 'Watch an abstract art video without trying to "get it."' },
  { id: 'curiosity', name: 'Curiosity', category: 'surprise', color: '#FAD7A0', definition: 'The pull toward the unknown — desire to understand.', cultivate: 'Pick a random Wikipedia article. Follow links for 10 minutes.', mediaPrompt: 'Ask someone about their job or hobby. Listen deeply.' },
  { id: 'disbelief', name: 'Disbelief', category: 'surprise', color: '#CA6F1E', definition: 'Refusal to accept what\'s real — "this can\'t be happening."', cultivate: 'Recall extraordinary news. Remember the moment before acceptance.', mediaPrompt: 'Read about an unbelievable true story.' },
  // Complex family
  { id: 'schadenfreude', name: 'Schadenfreude', category: 'complex', color: '#48C9B0', definition: 'Guilty pleasure in another\'s misfortune — the secret smile.', cultivate: 'Notice if you feel pleasure when a rival stumbles. Don\'t judge it.', mediaPrompt: 'Watch a fail compilation. Notice your reaction honestly.' },
  { id: 'saudade', name: 'Saudade', category: 'complex', color: '#76D7C4', definition: 'Portuguese: longing for something you love that\'s absent — not quite grief, not quite nostalgia.', cultivate: 'Think of a place you once loved and may never return to.', mediaPrompt: 'Listen to fado music. Let the longing wash through you.' },
  { id: 'ambivalence', name: 'Ambivalence', category: 'complex', color: '#45B39D', definition: 'Holding two opposing feelings simultaneously — being pulled both ways.', cultivate: 'Think of a decision where both options had real cost. Sit in the middle.', mediaPrompt: 'Consider a relationship that was both beautiful and painful.' },
  { id: 'sublime', name: 'Sublime', category: 'complex', color: '#1ABC9C', definition: 'Beauty so intense it borders on terror — grandeur beyond comprehension.', cultivate: 'Stand before something massive — a mountain, storm, starry sky.', mediaPrompt: 'Watch footage of a volcanic eruption or northern lights.' },
  { id: 'ennui', name: 'Ennui', category: 'complex', color: '#A3E4D7', definition: 'Existential boredom — not just bored, but weary of being bored.', cultivate: 'Sit without phone, book, or music for 15 minutes. Notice what arises.', mediaPrompt: 'Stare out a window for 5 minutes. Let your mind drift.' },
  { id: 'catharsis', name: 'Catharsis', category: 'complex', color: '#2ECC71', definition: 'Emotional release — the relief of finally feeling what you\'ve been holding.', cultivate: 'Watch something that makes you cry. Don\'t hold back.', mediaPrompt: 'Listen to a song that always moves you and let it.' },
  { id: 'flow', name: 'Flow', category: 'complex', color: '#58D68D', definition: 'Total absorption — losing yourself in an activity, time dissolving.', cultivate: 'Do something you\'re skilled at for 30 minutes without interruption.', mediaPrompt: 'Start a creative project with no goal. Just make.' },
];

export const categories: Category[] = ['joy', 'sadness', 'anger', 'fear', 'surprise', 'complex'];
