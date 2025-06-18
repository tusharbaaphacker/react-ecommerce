import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "./redux/productActions";
const App = () => {
  const dispatch = useDispatch();
  const { user, theme , product } = useSelector((state) => state);
  console.log(product.products)

  const [data, setData] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const handleTestSendValue = (e) => {
    e.preventDefault();
    dispatch({ type: 'TEST', payload: data })
  }
  const handleChnageTheme = () => {
    const newTheme = theme.theme === "light" ? "dark" : "light";
    dispatch({ type: "SET_THEME", payload: { theme: newTheme } })
  }

  const fetchDatafromApi = () => {
    dispatch(fetchProducts())
  }
  return (
    <div>
      {JSON.stringify(user)}
      <form onSubmit={handleTestSendValue}>
        <div>
          <label htmlFor="username">username</label>
          <input type="text" id="username" name="username" value={data.username} onChange={handleOnChange} />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input type="email" id="email" name="email" value={data.email} onChange={handleOnChange} />
        </div><div>
          <label htmlFor="password">password</label>
          <input type="password" id="password" name="password" value={data.password} onChange={handleOnChange} />
        </div>
        <button type="submit">check</button>
      </form>
      <button onClick={handleChnageTheme}>change {theme.theme}</button>

      <button onClick={fetchDatafromApi}>get data</button>

     {product.products.length > 0 ? (
          product.products.map((ele) => (
            <p key={ele.id}>{ele.title}</p>
          ))
        ) : (
          <p>No products available</p>
        )}
    </div>

  )
}

export default App;