import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <p>check</p>
            <Link to={'/products'} >Products</Link>
        </div>
    )
}