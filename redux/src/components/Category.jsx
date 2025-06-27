import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategoryAction, fetchCategory } from "../redux/categoryActions";
import { Link } from "react-router-dom";

const Category = () => {
    const { categories } = useSelector((state) => state.category);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategory());
    }, [dispatch]);

    const handleDelete = (id) => {
        const token = localStorage.getItem("token");
        if (window.confirm("Are you sure you want to delete this category?")) {
            dispatch(deleteCategoryAction(id, token));
        }
    };
    return (
        <div>
            {categories?.map((cat) => (
                <div key={cat._id}>
                    <h2>{cat.name}</h2>
                    <p>{cat.description}</p>
                    {cat.image && <img src={cat.image} alt={cat.name || "Category Image"} style={{ width: '100px', height: '100px' }} />}
                    <Link to={`/category/edit/${cat._id}`}>Edit</Link>
                    <button onClick={() => handleDelete(cat._id)}>Delete</button>
                    <Link to={`/category/${cat._id}`}>View</Link>
                </div>
            ))}
        </div>
    );
};

export default Category;
