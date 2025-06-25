import { useDispatch, useSelector } from "react-redux"
import { profileAction } from "../redux/userActions"

//call the dispatch action on reload, if user present in the store then skip the profile api

const Profile = () => {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const getProfile = () => {
        const token = localStorage.getItem('token')
        dispatch(profileAction(token))
    }
    return (
        <div>
            {JSON.stringify(user)}
            <button onClick={getProfile}>get profile</button>
        </div>
    )
}

export default Profile;