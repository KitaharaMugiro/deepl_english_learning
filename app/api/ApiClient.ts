import { Auth } from "aws-amplify";
import axios, { AxiosInstance } from "axios";


export class ApiClient {
    BASE_URL: string

    constructor() {
        const { NEXT_PUBLIC_TARGET_API } = process.env;
        this.BASE_URL = "https://uvrrlrytl7.execute-api.ap-northeast-1.amazonaws.com/dev"
        if (NEXT_PUBLIC_TARGET_API === "local") {
            this.BASE_URL = "http://localhost:8080/dev";
        }
    }

    public async get(path: string, params: Object) {
        const instance = axios.create({
            baseURL: this.BASE_URL,
            timeout: 10000
        });
        try {
            const token = await Auth.currentSession()
            return instance.get(path, {
                params,
                headers: { "Authorization": `Bearer ${token.getIdToken().getJwtToken()}` }
            })
        } catch {
            return instance.get(path, {
                params,
            })
        }
    }

    public async post(path: string, body: Object) {
        const instance = axios.create({
            baseURL: this.BASE_URL,
            timeout: 10000
        });
        try {
            const token = await Auth.currentSession()
            return instance.post(path, {
                data: body,
                headers: { "Authorization": `Bearer ${token.getIdToken().getJwtToken()}` }
            })
        } catch {
            return instance.post(path, {
                data: body,
            })
        }
    }

}