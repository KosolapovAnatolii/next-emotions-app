'use client'

import { makeAutoObservable } from 'mobx'
import { Emotion } from '@/types/Emotion'

const EMOTIONS_STORAGE_KEY = 'userEmotions'

export class UserStore {
  isAddEmotionModalOpen: boolean = false
  emotionsList: Emotion[] = []

  constructor() {
    makeAutoObservable(this)
  }

  openEmotionModal() {
    this.isAddEmotionModalOpen = true
  }

  closeEmotionModal() {
    this.isAddEmotionModalOpen = false
  }

  addEmotion(emotion: Emotion) {
    this.emotionsList.push(emotion)
    this.saveEmotionsToStorage()
  }

  loadEmotionsFromStorage() {
    const data = localStorage.getItem(EMOTIONS_STORAGE_KEY)
    if (data) {
      try {
        this.emotionsList = JSON.parse(data)
      } catch (e) {
        console.error('Failed to parse local emotions:', e)
      }
    }
  }

  saveEmotionsToStorage() {
    localStorage.setItem(EMOTIONS_STORAGE_KEY, JSON.stringify(this.emotionsList))
  }

  reorderEmotions(newOrder: Emotion[]) {
    this.emotionsList = newOrder
    this.saveEmotionsToStorage()
  }

  removeEmotion(emotionId: string) {
    this.emotionsList = this.emotionsList.filter(emotion => emotion.id !== emotionId)
    this.saveEmotionsToStorage()
  }

  clearEmotionsList() {
    this.emotionsList = []
    this.saveEmotionsToStorage()
  }
}

export const userStore = new UserStore()
