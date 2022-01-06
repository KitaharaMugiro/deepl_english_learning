import { Auth } from "aws-amplify";
import axios, { AxiosInstance } from "axios";

//const BASE_URL = "http://localhost:3000/api"
//const BASE_URL = "https://d33a2u3dm2hqzc.cloudfront.net/api"
const BASE_URL = "https://7m3mn2chy9.execute-api.ap-northeast-1.amazonaws.com/dev"
export class ApiClient {
    private instance: AxiosInstance
    constructor() {
        this.instance = axios.create({
            baseURL: BASE_URL,
            timeout: 10000
        });
    }

    public async get(path: string, params: Object) {
        try {
            const token = await Auth.currentSession()
            return this.instance.get(path, {
                params,
                headers: { "Authorization": `Bearer ${token.getIdToken().getJwtToken()}` }
            })
        } catch {
            return this.instance.get(path, {
                params,
            })
        }


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

}