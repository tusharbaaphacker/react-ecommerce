export const fetchProducts = () => {
    return async (dispatch) => {
        try {
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();
            dispatch({
                type: 'PRODUCT',
                payload: data.products
            });
        }
        catch (error) {
            console.log(error)
        }
    }
}