import { Link, NavLink, Outlet } from "react-router";

export default function DataLayout() {
    return (
        <>
            <div>
                <h1>This is Header</h1>

                {/* Navlink kalo ingin memberikan warnan saat navigasi aktif */}
                <ul>
                    <li><NavLink to="/data/products">Products</NavLink></li>
                    <li><NavLink to="/data/sellers">Sellers</NavLink></li>
                    <li><NavLink to="/data/customers">Costumers</NavLink></li>
                    {/* <li><Link to={"/about"}>About</Link></li> */}
                </ul>
            </div>
            <div>
                <Outlet />
            </div>
            <div>
                <p>This is Footer</p>
            </div>
        </>
    )
}
