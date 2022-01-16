import { v4 as uuidv4 } from 'uuid';
export class LocalStorageHelper {

    static setConfirmed(key: string) {
        return localStorage.setItem("Confirmed" + key, "true")
    }

    static getConfirmed(key: string) {
        return localStorage.getItem("Confirmed" + key)
    }

    static saveStudySessionId(sessionId: string) {
        localStorage.setItem("StudySessionId", sessionId)
    }

    static getStudySessionId() {
        return localStorage.getItem("StudySessionId")
    }

    static clearStudySessionId() {
        localStorage.removeItem("StudySessionId")
    }

    static initializeUserId() {
        const userId = this.getUserId() || uuidv4()
        localStorage.setItem("UserId", userId)
    }

    static saveUserId(userId: string) {
        localStorage.setItem("UserId", userId)
    }

    static getUserId() {
        return localStorage.getItem("UserId")
    }

    static clearUserId() {
        localStorage.removeItem("UserId")
    }

    static saveSecretUserId(userId: string) {
        localStorage.setItem("SecretUserId", userId)
    }
}