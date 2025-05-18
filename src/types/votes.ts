// Тип для ключів голосування
export type VoteType = "good" | "neutral" | "bad";

// Інтерфейс для стану голосів
export interface Votes {
  good: number;
  neutral: number;
  bad: number;
}
