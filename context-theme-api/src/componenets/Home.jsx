import { useTheme } from "../context/ThemeContext";

const Home = () => {
    const {theme} = useTheme();
    return (
        <>
        <p>
         Home page {theme}
        </p>
        </>
    )
}
export default Home;