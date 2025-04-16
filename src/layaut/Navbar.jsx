import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"

function Navbar() {


    return (
        <>
            <NavLink to='/'  > homepages</NavLink >
            <NavLink to="/chi-siamo"> chi siamo</NavLink >
            <NavLink to="/post-list"> lista dei post</NavLink >

            <Outlet />
        </>
    )
}

export default Navbar

