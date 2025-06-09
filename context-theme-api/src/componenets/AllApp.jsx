import { useState } from "react";

const AllApp = ({children}) => {
    const [data, setData] = useState("asdasd")
    return (
        <>
        {children}
        </>
    )
}

export default AllApp;