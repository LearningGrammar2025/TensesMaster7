import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTimestamp(timestamp: number): string {
  return new Date(timestamp).toLocaleString();
}

export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export function calculateProgress(correct: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((correct / total) * 100);
}

export function getLevelTitle(points: number): string {
  if (points >= 1000) return "Advanced";
  if (points >= 500) return "Intermediate";
  return "Beginner";
}

export function getBadgeTitle(correctAnswers: number): string {
  if (correctAnswers >= 35) return "Tenses Master";
  if (correctAnswers >= 25) return "Grammar Pro";
  if (correctAnswers >= 15) return "English Enthusiast";
  if (correctAnswers >= 5) return "Grammar Novice";
  return "Beginner";
}