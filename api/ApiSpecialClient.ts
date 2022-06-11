

import { Auth } from "aws-amplify";
import axios, { AxiosInstance } from "axios";

//WARN 開発中でも本番URLを使う
const BASE_URL = "https://1kfq730jwf.execute-api.ap-northeast-1.amazonaws.com/dev/"
export class ApiSpecialClient {
    private instance: AxiosInstance
    constructor() {
        this.instance = axios.create({
            baseURL: BASE_URL,
            timeout: 10000
        });
    }

    public async post(path: string, body: Object) {
        try {
            const token = await Auth.currentSession()
            return this.instance.post(path, {
                data: body,
                headers: { "Authorization": `Bearer ${token.getIdToken().getJwtToken()}` }
            })
        } catch {
            return this.instance.post(path, {
                data: body,
            })
        }
    }

    public async englishScore(text: string, translation: string) {
        const path = "/nl/english_level"
        const res = await this.post(path, { text, translation })
        return res.data as {
            translation: string,
            text: string,
            score: string,
            scoreNum: number,
            scoreRaw: number,
            easiness: string,
            easinessNum: number,
            easinessRaw: number,
            wordDifficulty: string,
            wordDifficultyNum: number,
            wordDifficultyRaw: number,
            totalReadablity: string,
            totalReadablityNum: number,
            totalReadablityRaw: number,
            age: number,
        }
    }

}