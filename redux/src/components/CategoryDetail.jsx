import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CategoryDetail = () => {
    const { id } = useParams();
    const category = useSelector((state) => state.category.categories.find((c) => c._id === id));
    return (
        <div>
            <h1>Category Detail Page</h1>
            {category ? (
                <div>
                    <h2>{category.name}</h2>
                    <p>{category.description}</p>
                    {category.image && <img src={category.image} alt={category.name || "Category Image"} style={{ width: '100px', height: '100px' }} />}
                </div>
            ) : (
                <p>Category not found</p>
            )}
        </div>
    );
}

export default CategoryDetail;
