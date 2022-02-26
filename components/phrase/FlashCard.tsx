import { useListPhraseQueryQuery } from "../../src/generated/graphql"

export default () => {
    const { data } = useListPhraseQueryQuery()
    const phraseList = data?.englister_Phrase

    //未実装
}