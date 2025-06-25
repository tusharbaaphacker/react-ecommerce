import { useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import { LoginAction } from "../redux/userActions";

const Login = () => {
    const dispatch  = useDispatch();
    const user = useSelector((state) => state.user)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const userdata = {
        email, 
        password
    }
    const submitData = (e) => {
        e.preventDefault();
        dispatch(LoginAction(userdata))
    }
    return (
        <>
        {JSON.stringify(user)}
        {/* {user.username} */}
        <form onSubmit={submitData}>
            <div>
                <label htmlFor="email">email</label>
                <input type="email" value={email} id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
            </div><div>
                <label htmlFor="password">password</label>
                <input type="password" value={password} id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">login</button>
        </form> 
        </>
    )
}


export default Login