import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import FloatingLoginButton from '../components/common/FloatingLoginButton';
import HowToUseCard from '../components/hero/HowToUseCard';
import SummaryHeroCard from '../components/hero/SummaryHeroCard';
import TargetUserCard from '../components/hero/TargetUserCard';
import UserTweets from '../components/hero/UserTweets';
import PlanBoxGroup from '../components/price/PlanBoxGroup';
import useUser from '../models/util-hooks/useUser';


export default function Album() {
  const { user } = useUser();
  const router = useRouter()
  useEffect(() => {
    if (user) {
      router.push("/dashboard")
    }
  }, [user])

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
          <UserTweets />
        </Grid>


        <div style={{ height: 40 }}></div>
        <Grid container alignItems="center" justifyContent="center">
          <HowToUseCard />
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