import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import MyHeader from '../components/header/MyHeader';
import { LocalStorageHelper } from '../models/localstorage/LocalStorageHelper';
import resumeOrStartStudy from '../models/process/resumeOrStartStudy';


export default function Album() {
  const router = useRouter()

  const startStudy = async () => {
    resumeOrStartStudy()
    LocalStorageHelper.setFirstStudyFlag()
  }

  useEffect(() => {
    if (LocalStorageHelper.isFirstStudyFlagAcquired()) {
      router.push("/dashboard")
    }
  }, [])

  return (
    <React.Fragment>
      <MyHeader />
      <main>
        {/* Hero unit */}
        <div style={{
          backgroundColor: "white",
          padding: "80px 0 60px",
        }}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
              AIで英語力をあげよう
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              自分の考えたことを英語にすると拙い英語になってしまう、そんな悩みを抱えている方に効果的な勉強法があります。<br />
              ステップは単純な３ステップ。<br />
              日本語で自分の意見を書く → 英語にする → お手本を覚える。<br />
              これであなたもネイティブレベルの英語力を手に入れよう。
            </Typography>
            <div style={{
              marginTop: "40px",
            }}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Link href="/question/1_question">
                    <Button variant="contained" color="primary" onClick={startStudy}>
                      早速始める
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}