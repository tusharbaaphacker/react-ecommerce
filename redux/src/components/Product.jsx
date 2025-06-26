import { useDispatch, useSelector } from "react-redux";
import {fetchProducts } from "../redux/productActions";
import { useEffect } from "react";

const Products = () => {
    const { products } = useSelector((state) => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div>
            {products?.map((product) => (
                <div key={product._id}>
                    <h2>{product?.name}</h2>
                    <p>{product?.description}</p>
                    <p>Price: ${product?.price}</p>
                    <img src={product?.image} alt={product?.name || "image"} style={{ width: '100px', height: '100px' }} />
                </div>
            ))}
        </div>
    );
};


export default Products;