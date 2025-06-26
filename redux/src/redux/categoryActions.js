export const fetchCategory = () => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:3000/api/category");
            const data = await response.json();
            console.log(data.categories, "category data from action");
            dispatch({
                type: 'GET_CATEGORY',
                payload: data.categories
            });
        } catch (error) {
            console.log(error);
        }
    };
};
