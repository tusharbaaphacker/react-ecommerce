import { useTheme } from "../context/ThemeContext";

const About = () => {
    const {theme} = useTheme();
    return (
        <>
        <h1>about page {theme}</h1>
        </>
    )
}

export default About;