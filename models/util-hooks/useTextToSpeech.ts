export default () => {
    if (!process.browser) return {}
    const isTextToSpeechSupported = window && 'speechSynthesis' in window

    const speak = (text: string, language?: string) => {
        const uttr = new SpeechSynthesisUtterance(text)
        uttr.lang = language || "en-US"
        window.speechSynthesis.speak(uttr)
    }

    return { isTextToSpeechSupported, speak }
}