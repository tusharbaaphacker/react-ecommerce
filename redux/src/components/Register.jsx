import { useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import { registerAction } from "../redux/userActions";

const Register = () => {
    const dispatch  = useDispatch();
    const user = useSelector((state) => state.user)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const userdata = {
        username,
        email, 
        password
    }
    const submitData = (e) => {
        e.preventDefault();
        dispatch(registerAction(userdata))
    }
    return (
        <>
        {JSON.stringify(user)}
        <form onSubmit={submitData}>
            <div>
                <label htmlFor="usernmae">usernmae</label>
                <input type="text" value={username} id="username" name="username" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input type="email" value={email} id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
            </div><div>
                <label htmlFor="password">password</label>
                <input type="password" value={password} id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">register</button>
        </form> 
        </>
    )
}


export default Register