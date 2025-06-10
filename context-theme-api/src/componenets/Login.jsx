import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useAuth } from "../context/AuthContext"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const {login} = useAuth();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")

        console.log(email, password)
        try {
            await login(email, password)
            navigate('/')
        } catch (error) {
            setError(error.message || "Login failed. Please try again.")
        }
        //http://localhost:3000/api/user
        //http://192.168.1.17:3000/api/user
        // const res = await axios.post("http://localhost:3000/api/user/login", { email, password })
        // navigate("/about")
    }

    return (
        <div>
            {error && <div style={{ color: "red" }}>{error}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">email</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div><div>
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">login</button>
                <Link to={"/register"}>create an account</Link>
            </form>
        </div>
    )
}

export default Login;