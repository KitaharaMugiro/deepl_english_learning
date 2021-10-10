export interface StudyRecordDetail {
    studySessionId: string,
    japanese: string,
    translation: string,
    english: string,
    englishHistory: [
        { english: string, createdAt: string }]
}