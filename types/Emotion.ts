export interface Emotion {
  id: string
  name: EmotionName
  description: string
  date: string
}

export enum EmotionName {
  Happy = 'happy',
  Sad = 'sad',
  Angry = 'angry',
  Anxious = 'anxious',
  Excited = 'excited',
  Calm = 'calm',
}

