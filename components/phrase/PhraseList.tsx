import { useListPhraseQuery } from "../../src/generated/graphql"

export default () => {

    const { data, error } = useListPhraseQuery()

    return <div>
        <h1>List</h1>
        {error && <div>{error.message}</div>}
        {data && data.englister_Phrase && data.englister_Phrase.map(phrase => <div key={phrase.id}>{phrase.phrase}</div>)}
    </div>

}