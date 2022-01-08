import { Card, Divider, Fab } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import React from 'react';
import MyFooter from '../components/footer/MyFooter';
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
        <MyFooter />

        <Fab
          variant="extended"
          color="primary"
          style={{ position: "fixed", right: 30, bottom: 30 }}
          href="https://docs.google.com/forms/d/e/1FAIpQLSdu4iiOKOyb1Pj7RKXnmUX2l_ZlDqRaX57P3i9q3Afvedzv9g/viewform?usp=sf_link" >
          <Typography variant="h5" style={{ fontWeight: 40, padding: 20 }}>
            事前登録受付中
          </Typography>
        </Fab>
      </main>
    </React.Fragment >
  );
}