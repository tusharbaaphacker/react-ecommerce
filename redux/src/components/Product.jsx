import { useDispatch, useSelector } from "react-redux";
import {deleteProduct, fetchProducts } from "../redux/productActions";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Products = () => {
    const { products } = useSelector((state) => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleDelete = (id) => {
        const token = localStorage.getItem("token");
        if (window.confirm("Are you sure you want to delete this product?")) {
            dispatch(deleteProduct(id, token));
        }
    };

    return (
        <div>
            {products?.map((product) => (
                <div key={product._id}>
                    <h2>{product?.name}</h2>
                    <p>{product?.description}</p>
                    <p>Price: ${product?.price}</p>
                    <img src={product?.image} alt={product?.name || "Product Image"} style={{ width: '100px', height: '100px' }} />
                    <Link to={`/products/edit/${product._id}`}>Edit</Link>
                    <button onClick={() => handleDelete(product._id)}>Delete</button>
                    <Link to={`/products/${product._id}`}>View</Link>
                </div>
            ))}
        </div>
    );
};


export default Products;