import { EventApi } from "../../api/EventApi"
import { useSnackMessage } from "./useSnackMessage"

export default () => {
    const { displaySuccessMessage } = useSnackMessage()

    const submitDiscord = () => {
        EventApi.submitDoneEvent("Discord", true).then(e => {
            if (e.firstTime) {
                displaySuccessMessage("クエストを完了しました！", "/quest")
            }
        })
    }

    const submitTrial = () => {
        EventApi.submitDoneEvent("Trial", true).then(e => {
            if (e.firstTime) {
                displaySuccessMessage("クエストを完了しました！", "/quest")
            }
        })
    }

    const submitSpeechRecognition = () => {
        EventApi.submitDoneEvent("SpeechRecognition", true).then(e => {
            if (e.firstTime) {
                displaySuccessMessage("クエストを完了しました！", "/quest")
            }
        })
    }

    const submitPhrase = () => {
        EventApi.submitDoneEvent("Phrase", true).then(e => {
            if (e.firstTime) {
                displaySuccessMessage("クエストを完了しました！", "/quest")
            }
        })
    }

    const submitTextToSpeech = () => {
        EventApi.submitDoneEvent("TextToSpeech", true).then(e => {
            if (e.firstTime) {
                displaySuccessMessage("クエストを完了しました！", "/quest")
            }
        })

    }

    const submitRestudy = () => {
        EventApi.submitDoneEvent("Restudy", true).then(e => {
            if (e.firstTime) {
                displaySuccessMessage("クエストを完了しました！", "/quest")
            }
        })
    }

    return { submitDiscord, submitTrial, submitSpeechRecognition, submitPhrase, submitTextToSpeech, submitRestudy }
}