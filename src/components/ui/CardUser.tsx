import { IUser } from "../../types/IUser"

interface Props {
    user: IUser
}


export const CardUser: React.FC <Props> = ({user}) => {
  return (
    <div>CardUser
        <p>{user.login}</p>


    </div>
  )
}
