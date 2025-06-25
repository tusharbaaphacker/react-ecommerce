export const registerAction = (userdata) => {
    return async (dispatch) => {
        try {
            const res = await fetch("http://localhost:3000/api/user/register", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userdata)
            })
            const data = await res.json();
            localStorage.setItem("token", data.token)
            console.log(data, "form backend data")
            dispatch({
                type: 'REGISTER',
                payload: data,
            });
        } catch (error) {
            console.log(error)
        }
    }
}



export const LoginAction = (userdata) => {
    return async (dispatch) => {
        try {
            const res = await fetch("http://localhost:3000/api/user/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userdata)
            })
            const data = await res.json();
            localStorage.setItem("token", data.token)
            console.log(data, "form backend data")
            dispatch({
                type: 'LOGIN',
                payload: data,
            });
        } catch (error) {
            console.log(error)
        }
    }
}


export const profileAction = (token) => {
    return async (dispatch) => {
        try {
            const res  = await fetch('http://localhost:3000/api/user/profile', {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const data = await res.json();
            dispatch({type: "PROFILE", payload: data})
        } catch (error) {
            console.log(error)
        }
    }
}