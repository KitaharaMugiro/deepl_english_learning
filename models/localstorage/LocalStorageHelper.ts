import { v4 as uuidv4 } from 'uuid';
export class LocalStorageHelper {

    static setConfirmed(key: string) {
        if (!process.browser) return;
        return localStorage.setItem("Confirmed" + key, "true")
    }

    static getConfirmed(key: string) {
        if (!process.browser) return;
        return localStorage.getItem("Confirmed" + key)
    }

    static saveStudySessionId(sessionId: string) {
        if (!process.browser) return;
        localStorage.setItem("StudySessionId", sessionId)
    }

    static getStudySessionId() {
        if (!process.browser) return;
        return localStorage.getItem("StudySessionId")
    }

    static clearStudySessionId() {
        if (!process.browser) return;
        localStorage.removeItem("StudySessionId")
    }

    static setUserId() {
        if (!process.browser) return;
        const userId = uuidv4()
        localStorage.setItem("UserId", userId)
        if (!userId) {
            var S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
            var N = 16
            const uuid = Array.from(crypto.getRandomValues(new Uint8Array(N))).map((n) => S[n % S.length]).join('')
            localStorage.setItem("UserId", uuid)
        }
    }

    static initializeUserId() {
        if (!process.browser) return;
        const userId = this.getUserId()
        if (!userId) {
            this.setUserId()
        }
    }


    static getUserId() {
        if (!process.browser) return;
        const userId = localStorage.getItem("UserId")
        if (!userId) {
            this.setUserId()
            return localStorage.getItem("UserId")
        }
        return userId
    }

    static clearUserId() {
        if (!process.browser) return;
        localStorage.removeItem("UserId")
    }

    static savePreviousStudiedCategorySlug(categorySlug: string) {
        if (!process.browser) return;
        localStorage.setItem("PrevCategorySlug", categorySlug)
    }

    static getPreviousStudiedCategorySlug() {
        if (!process.browser) return;
        return localStorage.getItem("PrevCategorySlug")
    }

}