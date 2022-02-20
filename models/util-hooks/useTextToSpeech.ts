export default () => {
    if (!process.browser) return {}
    const isTextToSpeechSupported = window && 'speechSynthesis' in window

    const speak = (text: string, language?: string) => {
        const uttr = new SpeechSynthesisUtterance(text)
        uttr.lang = language || "en-US"
        uttr.voice = speechSynthesis.getVoices().find(v => v.lang === uttr.lang) || null
        window.speechSynthesis.speak(uttr)
    }

    return { isTextToSpeechSupported, speak }
}