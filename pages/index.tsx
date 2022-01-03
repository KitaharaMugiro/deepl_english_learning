import { Fab } from '@material-ui/core';
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
  return (
    <React.Fragment>
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
              とりあえずやってみよう。
            </Typography>
            <div style={{
              marginTop: "40px",
            }}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Link href="/question/1_question">
                    <Button variant="contained" color="primary">
                      早速始める
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Fab
          variant="extended"
          color="primary"
          style={{ position: "absolute", right: 30, bottom: 30 }}
          href="https://docs.google.com/forms/d/e/1FAIpQLSdu4iiOKOyb1Pj7RKXnmUX2l_ZlDqRaX57P3i9q3Afvedzv9g/viewform?usp=sf_link" >
          <Typography variant="h5" style={{ fontWeight: 40, padding: 20 }}>
            事前登録受付中
          </Typography>

        </Fab>
      </main>
    </React.Fragment>
  );
}