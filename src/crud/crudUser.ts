import axios from "axios"
import { IUser } from "../types/IUser"


const API_URL = `https://api.github.com/users`

//getByUserName

export const getByUserName = async (username: string) : Promise<IUser | undefined> =>{

    try {
        const response = await axios.get(`${API_URL}/${username}`)
        return response.data
    } catch (error) {
        console.error("Error", error)
        return undefined
    }

} 