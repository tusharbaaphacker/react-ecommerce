// import { useDispatch , useSelector} from "react-redux";
// import { increment, decrement, reset } from "./redux/actions";
// const App = () => {
//   const count = useSelector((state)=> state.count)
//   const dispatch = useDispatch();
//   return (
//     <div>
//       {count}
//       <button
//         onClick={() => dispatch(increment())}
//       >increment</button>
//       <button
//         onClick={() => dispatch(decrement())}
//       >decrement</button>
//       <button
//         onClick={() => dispatch(reset())}
//       >reset</button>
//     </div>
//   )
// }


// export default App;





import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "./redux/productActions";
const App = () => {
  const dispatch = useDispatch();
  const { user, theme } = useSelector((state) => state);

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
    </div>
  )
}

export default App;