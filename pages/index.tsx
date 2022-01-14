import { Card, Divider, Fab } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Router, useRouter } from 'next/router';
import React, { useEffect } from 'react';
import FloatingLoginButton from '../components/common/FloatingLoginButton';
import MyFooter from '../components/footer/MyFooter';
import SummaryHeroCard from '../components/hero/SummaryHeroCard';
import TargetUserCard from '../components/hero/TargetUserCard';
import PlanBoxGroup from '../components/price/PlanBoxGroup';
import useUser from '../models/util-hooks/useUser';


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