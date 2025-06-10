import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
    const {theme, toogleTheme} = useTheme();
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
            <div className="flex space-x-6">
                <Link to="/" className="px-3 py-2 text-lg font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Home</Link>
                <Link to="/about" className="px-3 py-2 text-lg font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors">About</Link>
                <Link to="/gallery" className="px-3 py-2 text-lg font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Gallery</Link>
                <Link to="/contact-us" className="px-3 py-2 text-lg font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Contact Us</Link>
                <Link to="/login" className="px-3 py-2 text-lg font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors">login</Link>
                <Link to="/register" className="px-3 py-2 text-lg font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors">register</Link>
            </div>
            <button
            onClick={toogleTheme}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {theme}
          </button>
        </nav>
    )
}

export default Navbar;