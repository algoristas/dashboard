import React from "react";
import { Route, Switch } from "react-router-dom";

import AllProblemsBoard from 'components/AllProblemsBoard'
import GlobalScoreboard from 'components/GlobalScoreboard'
import IndividualScoreboard from 'components/IndividualScoreboard'
import ProblemSetBoard from 'components/ProblemSetBoard'
import WeeklyScoreboard from 'components/WeeklyScoreboard'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={GlobalScoreboard} />
      <Route path="/all-problems" exact component={AllProblemsBoard} />
      <Route path="/global" exact component={GlobalScoreboard} />
      <Route path="/individual" exact component={IndividualScoreboard} />
      <Route path="/problem-set" exact component={ProblemSetBoard} />
      <Route path="/weekly" exact component={WeeklyScoreboard} />
    </Switch>
  );
}
