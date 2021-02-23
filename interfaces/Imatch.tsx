import { Iteam } from './Iteam';

export interface Imatch {
  firstTeam: Iteam;
  secondTeam: Iteam;
  onUpdateResult: (goals: number, team: string, type: string) => void;
  onUpdateMatchResult: (matchId: string, round: string | undefined, result: any, winner: Iteam | undefined) => void;
  matchId: string;
  winner?: string;
  round?: string;
  hasPenalties?: boolean;
}
