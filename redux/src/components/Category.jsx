import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../redux/categoryActions";

const Category = () => {
    const { categories } = useSelector((state) => state.category);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategory());
    }, [dispatch]);
    return (
        <div>
            {categories?.map((cat) => (
                <div key={cat._id}>
                    <h2>{cat.name}</h2>
                </div>
            ))}
        </div>
    );
};

export default Category;
