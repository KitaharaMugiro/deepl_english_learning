import Grid from '@mui/material/Grid';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import FloatingDaoInvitation from '../components/common/FloatingDaoInvitation';
import Seo from '../components/common/Seo';
import FirstViewLearning from '../components/hero/FirstViewLearning';
import ServiceDescriptionCard from '../components/hero/ServiceDescriptionCard';
import SummaryHeroCard from '../components/hero/SummaryHeroCard';
import TargetUserCard from '../components/hero/TargetUserCard';
import UserTweets from '../components/hero/UserTweets';
import PlanBoxGroup from '../components/price/PlanBoxGroup';


export default function TopPage() {
  const [_isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(isMobile);
  }, [isMobile])

  const renderPCHero = () => {

    return <div style={{ display: _isMobile ? "none" : undefined }}>
      <div style={{ height: 40 }}></div>
      <Grid container alignItems="center" justifyContent="center">
        <FirstViewLearning />
      </Grid>

      <div style={{ height: 40 }}></div>
      <Grid container alignItems="center" justifyContent="center">
        <ServiceDescriptionCard />
      </Grid>
    </div>

  }

  const renderMobileHero = () => {
    return <div style={{ display: _isMobile ? undefined : "none" }}>
      <div style={{ height: 40 }}></div>
      <Grid container alignItems="center" justifyContent="center">
        <SummaryHeroCard />
      </Grid>
    </div>
  }

  return (
    <React.Fragment>
      <main>
        <Seo
          ogpInfo={{}}
        />
        {/* Hero unit */}
        {renderPCHero()}
        {renderMobileHero()}

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