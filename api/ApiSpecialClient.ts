

import { Auth } from "aws-amplify";
import axios, { AxiosInstance } from "axios";

const BASE_URL = "https://ke5c05zzxb.execute-api.ap-northeast-1.amazonaws.com/dev/"

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
            score_num: number,
            easiness: string,
            easiness_num: number,
            wordDifficulty: string,
            wordDifficulty_num: number,
            totalReadablity: string,
            totalReadablity_num: number,
            age: number,
        }
    }

}