
import { Paper } from "@mui/material";
import { GetServerSideProps } from "next";
import React from "react";
import { GetStudyResultResponse, StudyApi } from "../../../api/StudyApi";
import Seo, { MetaData } from "../../../components/common/Seo";
import { Copyright } from "../../../components/footer/Copyright";
import Review from "../../../components/study/Review";

const ResultPage = ({ studyResult, ogpInfo }: { studyResult: GetStudyResultResponse, ogpInfo: MetaData }) => {
    if (!studyResult) return <div>404</div>

    const { question, answer } = studyResult;

    return (
        <React.Fragment>
            <Seo ogpInfo={ogpInfo} />
            <main style={{
                width: 'auto',
                maxWidth: "600px",
                marginRight: "auto",
                marginLeft: "auto"
            }}>
                <Paper style={{
                    marginTop: "30px",
                    padding: "20px",
                    maxWidth: "600px",
                    marginRight: "auto",
                    marginLeft: "auto"
                }}>
                    <React.Fragment>
                        <Review
                            english={answer?.english}
                            japanese={answer?.japanese}
                            translation={answer?.translation}
                            activeQuestion={question}
                            fromResultPage={true} />
                    </React.Fragment>
                </Paper>
                <div style={{ height: 10 }} />
                <Copyright />
            </main>
        </React.Fragment >
    );
}


// resultIdに紐づくOGPを出す
export const getServerSideProps: GetServerSideProps = async (context) => {
    const { resultId } = context.query
    if (!resultId) {
        return { props: {} }
    }

    try {
        const studyResult = await StudyApi.getResult(resultId as string)
        const ogpInfo: MetaData = {
            description: studyResult.question.title,
            image: `/static/ogp/slide_${(studyResult.answer?.age || 0) + 1}.png`

        }
        return {
            props: {
                studyResult,
                ogpInfo
            }
        }
    } catch {
        const ogpInfo: MetaData = {
            image: `/static/ogp/slide_5.png`
        }
        return {
            props: {
                ogpInfo
            }
        }
    }

}

export default ResultPage;