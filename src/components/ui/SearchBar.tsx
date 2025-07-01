import { useState } from "react"

interface Props {
    handleClick : (user: string)=>void 
}



export const SearchBar : React.FC <Props> = ({handleClick}) => {
    const [user, setUser] = useState("")


    return (


    <div>
        <input type="text" onChange={((e)=>{
            setUser(e.target.value)
        })}/>
        
        <button className="" onClick={()=>handleClick(user)}>
            🔍Buscar 
        </button>
    </div>


    )
}
