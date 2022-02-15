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
        if (!userId) {
            var S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
            var N = 16
            const uuid = Array.from(crypto.getRandomValues(new Uint8Array(N))).map((n) => S[n % S.length]).join('')
            localStorage.setItem("UserId", uuid)
        }
        localStorage.setItem("UserId", userId)
    }


    static getUserId() {
        return localStorage.getItem("UserId")
    }

    static clearUserId() {
        localStorage.removeItem("UserId")
    }

    static savePreviousStudiedCategorySlug(categorySlug: string) {
        localStorage.setItem("PrevCategorySlug", categorySlug)
    }

    static getPreviousStudiedCategorySlug() {
        return localStorage.getItem("PrevCategorySlug")
    }

}