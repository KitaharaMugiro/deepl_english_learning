import Grid from '@mui/material/Grid';
import Link from 'next/link';
import React from 'react';
import FloatingDaoInvitation from '../components/common/FloatingDaoInvitation';
import FloatingLoginButton from '../components/common/FloatingLoginButton';
import Seo from '../components/common/Seo';
import FirstViewLearning from '../components/hero/FirstViewLearning';
import HowToUseCard from '../components/hero/HowToUseCard';
import SummaryHeroCard from '../components/hero/SummaryHeroCard';
import TargetUserCard from '../components/hero/TargetUserCard';
import UserTweets from '../components/hero/UserTweets';
import PlanBoxGroup from '../components/price/PlanBoxGroup';


export default function TopPage() {

  return (
    <React.Fragment>
      <main>
        <Seo
          ogpInfo={{}}
        />
        {/* Hero unit */}
        <div style={{ height: 40 }}></div>
        <Grid container alignItems="center" justifyContent="center">
          <FirstViewLearning />
        </Grid>


        <div style={{ height: 40 }}></div>
        <Grid container alignItems="center" justifyContent="center">
          <TargetUserCard />
        </Grid>

        <div style={{ height: 40 }}></div>
        <Grid container alignItems="center" justifyContent="center">
          <UserTweets />
        </Grid>

        <PlanBoxGroup />

        <div style={{ height: 200 }}></div>

        <FloatingDaoInvitation />
        {/* prefetch目的 */}
        <Link href="/dashboard" prefetch={true} ><div></div></Link>
      </main>
    </React.Fragment >
  );
}