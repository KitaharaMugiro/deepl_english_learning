import { Auth } from "aws-amplify";
import axios, { AxiosInstance } from "axios";


//デプロイミスするので環境で必ず分ける
const { TARGET_API } = process.env;
let BASE_URL = "https://uvrrlrytl7.execute-api.ap-northeast-1.amazonaws.com/dev"
if (TARGET_API === "local") {
    BASE_URL = "http://localhost:8080/dev"
}
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