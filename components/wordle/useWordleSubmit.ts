import { useAtom } from "jotai"
import { ActiveWordleRow, WordleMissCount } from "../../models/jotai/Wordle"
import { useSnackMessage } from "../../models/util-hooks/useSnackMessage"
import { useUpdateOneRowMutation, useUpdateTwoRowMutation, useUpdateThreeRowMutation, useUpdateFourRowMutation, useUpdateFiveRowMutation, useUpdateSixRowMutation, useSkipMutation, useAddSkippedWordMutation } from "../../src/generated/graphql"
import { answers } from "./const"

export default () => {
    const { displayCenterWarningMessage } = useSnackMessage()
    const [activeRow] = useAtom(ActiveWordleRow)
    const [missCount, setMissCount] = useAtom(WordleMissCount)
    const [updateOne] = useUpdateOneRowMutation()
    const [updateTwo] = useUpdateTwoRowMutation()
    const [updateThree] = useUpdateThreeRowMutation()
    const [updateFour] = useUpdateFourRowMutation()
    const [updateFive] = useUpdateFiveRowMutation()
    const [updateSix] = useUpdateSixRowMutation()
    const [skipTurn] = useSkipMutation()
    const [addSkippedWord] = useAddSkippedWordMutation()



    const submit = async (userInput: string, emptyUserInput: Function, slug: string, nextTurn: string) => {
        if (userInput.length !== 5) {
            displayCenterWarningMessage("Please enter 5 characters")
            return
        }
        if (!answers.some((a) => a === userInput)) {
            setMissCount(missCount + 1)
            addSkippedWord({
                variables: {
                    slug: slug,
                    word: userInput
                }
            })

            if (missCount >= 3) {
                displayCenterWarningMessage(`Not in word list.(${missCount + 1} / 3). Your turn is skipped.`)
                await skipTurn({
                    variables: {
                        roomSlug: slug,
                        turn: nextTurn
                    }
                })
            } else {
                displayCenterWarningMessage(`Not in word list.(${missCount + 1} / 3).`)
            }
            emptyUserInput()
            return
        }
        if (activeRow === 0) {
            await updateOne({
                variables: {
                    text: userInput,
                    roomSlug: slug,
                    turn: nextTurn
                }
            })
        } else if (activeRow === 1) {
            await updateTwo({
                variables: {
                    text: userInput,
                    roomSlug: slug,
                    turn: nextTurn
                }
            })
        } else if (activeRow === 2) {
            await updateThree({
                variables: {
                    text: userInput,
                    roomSlug: slug,
                    turn: nextTurn
                }
            })
        } else if (activeRow === 3) {
            await updateFour({
                variables: {
                    text: userInput,
                    roomSlug: slug,
                    turn: nextTurn
                }
            })
        } else if (activeRow === 4) {
            await updateFive({
                variables: {
                    text: userInput,
                    roomSlug: slug,
                    turn: nextTurn
                }
            })
        } else if (activeRow === 5) {
            await updateSix({
                variables: {
                    text: userInput,
                    roomSlug: slug,
                    turn: nextTurn
                }
            })
        }
        emptyUserInput()
    }

    return { submit }
}