export default () => {
    const isTextToSpeechSupported = 'speechSynthesis' in window

    const speak = (text: string, language?: string) => {
        const uttr = new SpeechSynthesisUtterance(text)
        uttr.lang = language || "en-US"
        window.speechSynthesis.speak(uttr)
    }

    return { isTextToSpeechSupported, speak }
}