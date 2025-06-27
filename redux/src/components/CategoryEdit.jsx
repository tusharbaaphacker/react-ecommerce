import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCategoryAction } from "../redux/categoryActions";
import { useParams } from "react-router-dom";

const CategoryEdit = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const [categoryData, setCategoryData] = useState({
        name: "",
        description: "",
        image: null,
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", categoryData.name);
        formData.append("description", categoryData.description);
        if (categoryData.image) {
            formData.append("image", categoryData.image);
        }
        const token = localStorage.getItem("token");
        dispatch(updateCategoryAction(formData, token, id));
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Category Name"
                    value={categoryData.name}
                    onChange={(e) => setCategoryData({ ...categoryData, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={categoryData.description}
                    onChange={(e) => setCategoryData({ ...categoryData, description: e.target.value })}
                />
                <input
                    type="file"
                    onChange={(e) => setCategoryData({ ...categoryData, image: e.target.files[0] })}
                />
                <button type="submit">Update Category</button>
            </form>
        </div>
    )
}

export default CategoryEdit;