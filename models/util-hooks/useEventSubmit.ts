import { EventApi } from "../../api/EventApi"
import { FireGaEvent } from "../gtag"
import { useSnackMessage } from "./useSnackMessage"

export default () => {
    const { displaySuccessMessage } = useSnackMessage()

    const submitDiscord = () => {
        EventApi.submitDoneEvent("Discord", true).then(e => {
            if (e.firstTime) {
                displaySuccessMessage("クエストを完了しました！", "/quest")
            }
        })
        FireGaEvent({ action: "click", category: "event", label: "discord" })
    }

    const submitTrial = () => {
        EventApi.submitDoneEvent("Trial", true).then(e => {
            if (e.firstTime) {
                displaySuccessMessage("クエストを完了しました！", "/quest")
            }
        })
        FireGaEvent({ action: "click", category: "event", label: "10 trial question" })
    }

    const submitSpeechRecognition = () => {
        EventApi.submitDoneEvent("SpeechRecognition", true).then(e => {
            if (e.firstTime) {
                displaySuccessMessage("クエストを完了しました！", "/quest")
            }
        })
        FireGaEvent({ action: "click", category: "event", label: "speech recognition" })
    }

    const submitPhrase = () => {
        EventApi.submitDoneEvent("Phrase", true).then(e => {
            if (e.firstTime) {
                displaySuccessMessage("クエストを完了しました！", "/quest")
            }
        })
        FireGaEvent({ action: "click", category: "event", label: "phrase" })
    }

    const submitTextToSpeech = () => {
        EventApi.submitDoneEvent("TextToSpeech", true).then(e => {
            if (e.firstTime) {
                displaySuccessMessage("クエストを完了しました！", "/quest")
            }
        })

        FireGaEvent({ action: "click", category: "event", label: "textToSpeech" })
    }

    const submitRestudy = () => {
        EventApi.submitDoneEvent("Restudy", true).then(e => {
            if (e.firstTime) {
                displaySuccessMessage("クエストを完了しました！", "/quest")
            }
        })

        FireGaEvent({ action: "click", category: "event", label: "restudy" })
    }

    const submitToday = () => {
        EventApi.submitDoneEvent("Today", true).then(e => {
            if (e.firstTime) {
                displaySuccessMessage("クエストを完了しました！", "/quest")
            }
        })

        FireGaEvent({ action: "click", category: "event", label: "restudy" })
    }

    return { submitDiscord, submitTrial, submitSpeechRecognition, submitPhrase, submitTextToSpeech, submitRestudy, submitToday }
}