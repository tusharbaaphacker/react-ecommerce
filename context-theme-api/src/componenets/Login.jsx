// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useTheme } from "../context/ThemeContext";
// import { Mail, Lock, LogIn, ArrowLeft } from "lucide-react";


// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const { login } = useAuth();
//     const { theme } = useTheme();
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError("");

//         try {
//             await login(email, password);
//             navigate("/profile");
//         } catch (error) {
//             setError(error.message || "Login failed. Please try again.");
//         }
//     };


//     return (
//         <div
//             className={`min-h-screen ${theme === "dark" ? "bg-gray-950" : "bg-gray-50"
//                 } flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500`}
//         >
//             <div
//                 className={`w-full max-w-md ${theme === "dark" ? "bg-gray-800" : "bg-white"
//                     } rounded-2xl shadow-lg p-8 space-y-6 animate-fade-in`}
//             >
//                 <Link
//                     to="/"
//                     className={`inline-flex items-center space-x-2 text-sm font-medium mb-6 ${theme === "dark"
//                         ? "text-teal-400 hover:text-teal-300"
//                         : "text-teal-600 hover:text-teal-700"
//                         } transition-colors duration-300`}
//                 >
//                     <ArrowLeft size={16} />
//                     <span>Back to Home</span>
//                 </Link>
//                 {/* Header */}
//                 <div className="text-center">
//                     <h2
//                         className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"
//                             }`}
//                     >
//                         Welcome Back
//                     </h2>
//                     <p
//                         className={`mt-2 text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"
//                             }`}
//                     >
//                         Sign in to your account
//                     </p>
//                 </div>

//                 {/* Error Message */}
//                 {error && (
//                     <div
//                         className={`bg-red-100 dark:bg-red-900 border ${theme === "dark" ? "border-red-700" : "border-red-400"
//                             } text-red-700 dark:text-red-300 px-4 py-3 rounded-lg text-sm`}
//                     >
//                         {error}
//                     </div>
//                 )}

//                 {/* Form */}
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                     {/* Email Field */}
//                     <div className="relative">
//                         <label
//                             htmlFor="email"
//                             className={`block text-sm font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"
//                                 } mb-1`}
//                         >
//                             Email
//                         </label>
//                         <div className="relative">
//                             <Mail
//                                 size={20}
//                                 className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${theme === "dark" ? "text-gray-500" : "text-gray-400"
//                                     }`}
//                             />
//                             <input
//                                 type="email"
//                                 id="email"
//                                 name="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 className={`w-full pl-10 pr-4 py-2 border ${theme === "dark" ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-gray-50 text-gray-900"
//                                     } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300`}
//                                 placeholder="Enter your email"
//                                 required
//                             />
//                         </div>
//                     </div>

//                     {/* Password Field */}
//                     <div className="relative">
//                         <label
//                             htmlFor="password"
//                             className={`block text-sm font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"
//                                 } mb-1`}
//                         >
//                             Password
//                         </label>
//                         <div className="relative">
//                             <Lock
//                                 size={20}
//                                 className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${theme === "dark" ? "text-gray-500" : "text-gray-400"
//                                     }`}
//                             />
//                             <input
//                                 type="password"
//                                 id="password"
//                                 name="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 className={`w-full pl-10 pr-4 py-2 border ${theme === "dark" ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-gray-50 text-gray-900"
//                                     } rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300`}
//                                 placeholder="Enter your password"
//                                 required
//                             />
//                         </div>
//                     </div>

//                     {/* Submit Button */}
//                     <button
//                         type="submit"
//                         className={`w-full flex items-center justify-center space-x-2 px-4 py-2 ${theme === "dark"
//                                 ? "bg-teal-600 text-white hover:bg-teal-700"
//                                 : "bg-teal-500 text-white hover:bg-teal-600"
//                             } rounded-lg font-semibold focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-300`}
//                     >
//                         <LogIn size={18} />
//                         <span>Sign In</span>
//                     </button>
//                 </form>

//                 {/* Register Link */}
//                 <div className="text-center text-sm">
//                     <span
//                         className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"
//                             }`}
//                     >
//                         Don't have an account?{" "}
//                     </span>
//                     <Link
//                         to="/register"
//                         className={`${theme === "dark" ? "text-teal-400 hover:text-teal-300" : "text-teal-600 hover:text-teal-700"
//                             } font-medium hover:underline`}
//                     >
//                         Create an account
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;




import { GoogleLogin } from "@react-oauth/google"
import jwtDecode from "jwt-decode";
const Login = () => {
    return (
        <div>
            {/* <GoogleLogin
                onSuccess={(credentialResponse) => {
                    const base64Url = credentialResponse.credential.split(".")[1];
                    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
                    const decoded = JSON.parse(atob(base64));
                    console.log("User Information:", decoded);
                }}
            >
            </GoogleLogin> */}
            <GoogleLogin
                onSuccess={(credentialResponse) => {
                    const decoded = jwtDecode(credentialResponse.credential);
                    console.log("User Information:", decoded);
                }}
                onError={() => {
                    console.log("Login Failed");
                }}
            />
        </div>
    )
}
export default Login;








