import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetchUserProfile(token);
        } else {
            setLoading(false);
        }
    }, []);


    const login = async (email, password) => {
        try {
            const response = await fetch('http://localhost:3000/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            setUser(data.user);
            setIsAuthenticated(true);
            localStorage.setItem('token', data.token);
            return data;
        } catch (error) {
            throw error;
        }
    };

    const register = async (username, email, password) => {
        try {
            const response = await fetch('http://localhost:3000/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Registration failed');
            }
        } catch (error) {
            throw error;
        }
    };


    const fetchUserProfile = async (token) => {
        console.log(user)
        try {
            const response = await fetch('http://localhost:3000/api/user/profile', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            const data = await response.json();

            if (response.ok) {
                if (data.user) {
                    setUser(data.user);
                    setIsAuthenticated(true);
                } else {
                    localStorage.removeItem("token");
                    setIsAuthenticated(false);
                }
            } else {
                console.error("Profile fetch failed:", data.message || "Unknown error");
                localStorage.removeItem("token");
                setIsAuthenticated(false);
            }
        } catch (error) {
            console.error('Error fetching profile:', error);
            localStorage.removeItem('token');
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('token');
    };
    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);

