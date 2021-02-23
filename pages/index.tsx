import React, { useReducer, useEffect } from 'react';

import { Body, PageContent } from '../commons/general.styles';
import Section from '../components/section/section';
import Header from '../components/header/header';
import data from '../data.json';
import emptyData from '../emptyData.json';
import Match from '../containers/match/match';
import { initialState, reducer } from '../store/reducer';
import {
  SET_ROUND_OF_16,
  SET_ROUND_OF_8,
  SET_SEMIFINALS,
  SET_FINALS,
  SET_MATCH_RESULT,
  SET_ROUND_MATCHES
} from '../store/action-types';
import { Iteam } from '../interfaces/Iteam';
import { Iresult } from '../interfaces/Iresult';

function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    r1, r2, r3, r4
  } = state;

  useEffect(() => {
    const { result } = emptyData;
    dispatch({ type: SET_ROUND_OF_16, payload: data.result });
    dispatch({ type: SET_ROUND_OF_8, payload: result.slice(0, 4) });
    dispatch({ type: SET_SEMIFINALS, payload: result.slice(0, 2) });
    dispatch({ type: SET_FINALS, payload: result.slice(0, 1) });
  }, []);

  function onUpdateMatchResult(
    matchId: string,
    round: string,
    result: Iresult,
    winner: Iteam
  ) {
    const {
      firstTeamGoals, firstTeamPenalties, secondTeamGoals, secondTeamPenalties
    } = result;

    dispatch({ 
      type: SET_MATCH_RESULT,
      round,
      matchId,
      firstTeamGoals,
      firstTeamPenalties,
      secondTeamGoals,
      secondTeamPenalties
    });

    dispatch({ type: SET_ROUND_MATCHES, round, matchId, winner });
  }

  type GeneralMatch = {
    matchId: string,
    teams: [Iteam]
  };

  return (
    <Body>
      <Header />
      <PageContent>
        <Section title='Round of 16'>
          <>
            {r1 && r1.map((match: GeneralMatch) => {
              const { matchId, teams } = match;
              return (
                <Match
                  key={matchId}
                  firstTeam={teams[0]}
                  secondTeam={teams[1]}
                  onUpdateMatchResult={onUpdateMatchResult}
                  round='r1'
                  matchId={matchId}
                />
              );
            })}
          </>
        </Section>
          <Section title='Quarter finals'>
            <>
              {r2 && r2.map((match: GeneralMatch) => {
                const { matchId, teams } = match;
                return (
                  <Match
                    key={matchId}
                    firstTeam={teams[0]}
                    secondTeam={teams[1]}
                    onUpdateMatchResult={onUpdateMatchResult}
                    round='r2'
                    matchId={matchId}
                  />
                );
              })}
            </>
          </Section>
          <Section title='Semifinals'>
            <>
              {r3 && r3.map((match: GeneralMatch) => {
                const { matchId, teams } = match;
                return (
                  <Match
                    key={matchId}
                    firstTeam={teams[0]}
                    secondTeam={teams[1]}
                    onUpdateMatchResult={onUpdateMatchResult}
                    round='r3'
                    matchId={matchId}
                  />
                );
              })}
            </>
          </Section>
          <Section title='Finals'>
            <>
              {r4 && r4.map((match: GeneralMatch) => {
                const { matchId, teams } = match;
                return (
                  <Match
                    key={matchId}
                    firstTeam={teams[0]}
                    secondTeam={teams[1]}
                    onUpdateMatchResult={onUpdateMatchResult}
                    round='r4'
                    matchId={matchId}
                  />
                );
              })}
            </>
          </Section>
      </PageContent>
    </Body>
  );
}

export default Home;
