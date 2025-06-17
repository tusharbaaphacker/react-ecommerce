import { useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProducts] = useState(null)
    const fetchProductDetails =async () => {
        const res = await fetch(`https://dummyjson.com/product/${id}`);
        const data = await res.json();
        setProducts(data)
    }
    return (
        <div>
            {product.title}
        </div>
    )
}

export default ProductDetails;