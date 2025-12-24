import { Link } from "react-router-dom"
import { categoryList } from "../Data"

function Header(){
    return(
        <>
        <header className="bg-green-700 text-white py-5 text-center text-3xl">This is Header</header>
        <nav className="bg-red-500 text-white py-3 text-center space-x-6">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            {categoryList.slice(0,9).map(a=><Link to={`/category/${a.slug}`}>{a.name}</Link>)}
            <Link to="/contact">Contact</Link>
        </nav>
        </>
    )
}
export default Header