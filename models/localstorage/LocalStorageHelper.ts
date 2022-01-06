import { v4 as uuidv4 } from 'uuid';
import { PachiFilter } from '../type/Secrets';
export class LocalStorageHelper {

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

    static saveSecretUserId(userId: string) {
        localStorage.setItem("SecretUserId", userId)
    }

    static getSecretUserId() {
        return localStorage.getItem("SecretUserId")
    }

    static clearSecretUserSession() {
        localStorage.removeItem("SecretUserId")
    }

    static setCustomFilterList(customFilterList: PachiFilter[]) {
        const json = JSON.stringify(customFilterList)
        localStorage.setItem("Filters", json)
    }

    static getCustomFilterList() {
        const json = localStorage.getItem("Filters")
        if (json) {
            const filterList = JSON.parse(json)
            return filterList as PachiFilter[]
        }
        return []
    }
}