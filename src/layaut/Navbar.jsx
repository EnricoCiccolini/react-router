import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"

function Navbar() {


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className='m-3' to='/'  > homepages</NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink className='m-3' to="/chi-siamo"> chi siamo</NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink className='m-3' to="/post-list"> lista dei post</NavLink >
                        </li>
                    </ul>

                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar

