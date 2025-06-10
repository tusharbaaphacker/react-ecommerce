import { useTheme } from "../context/ThemeContext";
import Login from "./Login";

const Home = () => {
    const {theme} = useTheme();
    return (
        <>
        <div className={` ${theme === "dark" ? "bg-black" : "bg-white"}`}>
        <h1 className={`${theme === "dark" ? "text-white" : "text-gray"} `}>hello from home page</h1>
        </div>
        </>
    )
}
export default Home;