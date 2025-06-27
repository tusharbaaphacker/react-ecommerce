import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <h1>Redux Store</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/category">Category</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;