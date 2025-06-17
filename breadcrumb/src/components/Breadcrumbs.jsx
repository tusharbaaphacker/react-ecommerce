import { useLocation } from "react-router-dom";

const BreadCrumbs = () => {
    const location = useLocation();
    console.log(location, "location");
    const pathnames = location.pathname.split('/').filter((x)=> x);
    console.log(pathnames, "pathnames")
    return (
        <div>
            cassda
        </div>
    )
}

export default BreadCrumbs;