import React, { useEffect, useState } from 'react';

import Input from '../input/input';
import Image from '../../containers/image/image';
import { MatchContainer, TeamResult, InputLabel, Vs } from './match.styles';
import { Imatch } from '../../interfaces/Imatch';
import { Iteam } from '../../interfaces/Iteam';

function Match(props: Imatch) {
  const [fTeam, setFirstTeam] = useState<Iteam>({ id: '-', country: '-'});
  const [sTeam, setSecondTeam] = useState<Iteam>({ id: '-', country: '-'});
  const [isDisabled, setIsDisabled] = useState(false);

  const {
    firstTeam, secondTeam, matchId, onUpdateResult, winner, hasPenalties
  } = props;

  useEffect(() => {
    setFirstTeam(firstTeam);
    setSecondTeam(secondTeam);
    setIsDisabled(firstTeam.id === '-' || secondTeam.id === '-');
  }, [firstTeam, secondTeam, matchId, onUpdateResult, winner, hasPenalties]);

  function onChange(e: React.ChangeEvent<HTMLInputElement>, team: string) {
    const goals = parseInt(e.target.value);
    onUpdateResult(goals, team, 'match');
  }

  function onChangePenalties(e: React.ChangeEvent<HTMLInputElement>, team: string) {
    const goals = parseInt(e.target.value);
    onUpdateResult(goals, team, 'penalties');
  }

  function teamResult(team: Iteam, position: string) {
    const { id, country, goals, penalties } = team;
    
    return (
      <TeamResult winner={winner === id} position={position} data-test={`match-${matchId}-team-${id}`}>
        {fTeam.id !== '-' && <Image src={id} />}
        <InputLabel>
          {country}
        </InputLabel>
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e, id)}
          type='match'
          value={goals}
          isDisabled={isDisabled}
        />
        {hasPenalties && (
          <InputLabel>
            (<Input
              onChange={(e) => onChangePenalties(e, id)}
              value={penalties}
              isDisabled={isDisabled}
              type='penalties'
            />)
          </InputLabel>
        )}
      </TeamResult>
    )
  }

  return (
    <MatchContainer data-test={`match-${matchId}`}>
      {fTeam && teamResult(fTeam, 'left')}
      <Vs>
        VS
      </Vs>
      {sTeam && teamResult(sTeam, 'right')}
    </MatchContainer>
  );
}

export default Match;
