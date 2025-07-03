'use client'

import { makeAutoObservable } from 'mobx'
import { Emotion } from '@/types/Emotion'

const EMOTIONS_STORAGE_KEY = 'userEmotions'

export class UserStore {
  isAddEmotionModalOpen: boolean = false
  emotionsList: Emotion[] = []

  constructor() {
    makeAutoObservable(this)
    // this.loadEmotionsFromStorage()
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
}

export const userStore = new UserStore()
