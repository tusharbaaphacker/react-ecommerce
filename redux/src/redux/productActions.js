export const fetchProducts = () => {
    return async (dispatch, getState) => {
        const { products } = getState().product;
        if (products.length > 0) {
            return; 
        }
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