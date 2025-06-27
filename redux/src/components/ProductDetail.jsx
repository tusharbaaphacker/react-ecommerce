import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { id } = useParams();
    const product = useSelector((state) => state.product.products.find((p) => p._id === id));
    return (
        <div>
            <h1>Product Detail Page</h1>
            {product ? (
                <div>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    {product.image && <img src={product.image} alt={product.name || "Product Image"} style={{ width: '100px', height: '100px' }} />}
                </div>
            ) : (
                <p>Product not found</p>
            )}
        </div>
    );
}

export default ProductDetail;
