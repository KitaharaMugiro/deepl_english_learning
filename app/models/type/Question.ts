export interface Question {
    topicId: string
    title: string
    description: string
    titleEng?: string
    descriptionEng?: string
    categorySlug?: string //TODO: APIを修正して必須にしたい
}

export interface StudyRecord {
    japanese: string
    english: string
    translation: string
}