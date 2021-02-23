import React, { useEffect, useState } from 'react';

import Match from '../../components/match/match';
import { Imatch } from '../../interfaces/Imatch';
import { Iteam } from '../../interfaces/Iteam';

function MatchContainer(props: Imatch) {
  const [hasPenalties, setHasPenalties] = useState(false);
  const [winner, setWinner] = useState<Iteam | undefined>(undefined);

  const {
    firstTeam, secondTeam, matchId, onUpdateMatchResult, round
  } = props;

  function getWinner(
    fTeam: Iteam | undefined,
    goalsA: number | string | undefined,
    penA: number | string | undefined,
    sTeam: Iteam | undefined,
    goalsB: number | string | undefined,
    penB: number | string | undefined
  ) {
    if ((isNaN(goalsA) || isNaN(goalsB)) ||
      (goalsA === goalsB && (isNaN(penA) || isNaN(penB))) ||
      (goalsA === goalsB && (penA === penB))) {
      return;
    }
    else if ((goalsA + (penA || 0)) > (goalsB + (penB || 0))) return fTeam;
    else return sTeam;
  }

  useEffect(() => {
    if (firstTeam.goals && secondTeam.goals) {
      setHasPenalties(firstTeam.goals === secondTeam.goals);
    }
  }, [
    round,
    firstTeam && firstTeam.goals,
    firstTeam.penalties,
    secondTeam && secondTeam.goals,
    secondTeam.penalties]);

  function onChange(goals: number, team: string, type: string) {
    const result = {
      firstTeamGoals: type === 'match' && firstTeam.id === team ? goals : firstTeam.goals,
      secondTeamGoals: type === 'match' && secondTeam.id === team ? goals : secondTeam.goals,
      firstTeamPenalties: type === 'penalties' && firstTeam.id === team ? goals : firstTeam.penalties,
      secondTeamPenalties: type === 'penalties' && secondTeam.id === team ? goals : secondTeam.penalties,
    };

    const {
      firstTeamGoals, secondTeamGoals, firstTeamPenalties, secondTeamPenalties
    } = result;

    const winner = getWinner(
      firstTeam, firstTeamGoals, firstTeamPenalties, secondTeam, secondTeamGoals, secondTeamPenalties
      );

    setWinner(winner);
    onUpdateMatchResult(matchId, round, result, winner);
  }

  return (
    <Match
      firstTeam={firstTeam} 
      secondTeam={secondTeam}
      onUpdateResult={onChange}
      winner={winner && winner.id}
      matchId={`${round}-${matchId}`}
      hasPenalties={hasPenalties}
    />
  );
}

export default MatchContainer;
