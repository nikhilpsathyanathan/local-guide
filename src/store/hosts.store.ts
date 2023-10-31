"use client";

import { create } from "zustand";

interface GuideState {
  selectedLanguages: string[];
  addLanguages: (lan: string) => void;
  removeLanguage: (lan: string) => void;
}

export const useGuideStore = create<GuideState>((set) => ({
  selectedLanguages: [],
  addLanguages: (lan: string) =>
    set((state) => ({
      selectedLanguages: [...state.selectedLanguages, lan],
    })),
  removeLanguage: (lan: string) =>
    set((state) => ({
      selectedLanguages: state.selectedLanguages.filter(
        (language) => lan !== language
      ),
    })),
}));
