import { useState } from "react"
import { Header } from "../components/ui/Header"
import { SearchBar } from "../components/ui/SearchBar"
import { getByUserName } from "../crud/crudUser"
import { IUser } from "../types/IUser"
import { CardUser } from "../components/ui/CardUser"



export const MainScreen = () => {
    const [user, setUser] = useState<IUser | undefined>()

    const resolvedora = async (usuario: string)=>{
        const response = await getByUserName(usuario)
        setUser(response)
        console.log(response)
    }


    return (


    <div>
        <Header></Header>
        <SearchBar handleClick={resolvedora}></SearchBar>
        {user && <CardUser user={user}></CardUser>}
    </div>


  )
}
