import axios from "axios";
import { AssignHeaderInterceptor } from "./AssignHeaderInterceptor";

export const AxiosClient = (token) => {
    const clientInstance = axios.create({
        baseURL : process.env.REACT_APP_BASE_URL
    })
    
    clientInstance.interceptors.request.use(AssignHeaderInterceptor(token).authHeaderInterceptor) // aku mengira tadi tu conventionnya, jadi emang gabisa diotak atik
    return clientInstance
}