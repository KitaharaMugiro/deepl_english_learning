import Grid from '@mui/material/Grid';
import React from 'react';
import FloatingLoginButton from '../components/common/FloatingLoginButton';
import SummaryHeroCard from '../components/hero/SummaryHeroCard';
import TargetUserCard from '../components/hero/TargetUserCard';
import PlanBoxGroup from '../components/price/PlanBoxGroup';


export default function Album() {

  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div style={{ height: 40 }}></div>
        <Grid container alignItems="center" justifyContent="center">
          <SummaryHeroCard />
        </Grid>

        <div style={{ height: 40 }}></div>
        <Grid container alignItems="center" justifyContent="center">
          <TargetUserCard />
        </Grid>

        <PlanBoxGroup />

        <div style={{ height: 200 }}></div>

        <FloatingLoginButton />
      </main>
    </React.Fragment >
  );
}