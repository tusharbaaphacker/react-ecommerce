import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("");
    const { register } = useAuth();
    const nagivate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        console.log(username, email, password)

        try {
            await register(username, email, password)
            nagivate("/login")
        } catch (error) {
            setError(error.message || "Registration failed. Please try again.");
        }


        // const res = await fetch("http://localhost:3000/api/user/register",
        //     {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify({ username, email, password })
        //     }
        // )

        // if (res.ok) {
        //     nagivate("/login")
        // }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {error && <div style={{ color: "red" }}>{error}</div>}
                <div>
                    <label htmlFor="username">username</label>
                    <input type="text" id="usernmae" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div><div>
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">register</button>
            </form>
        </div>
    )
}

export default Register;