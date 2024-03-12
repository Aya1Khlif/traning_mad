import "./NavBAR.css"
import logo from "../../assets/Logo.svg"
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { Link } from "react-router-dom";
export default function NavBAR() {
  return (
    <>
      <nav>
      <div className="">
          <img src={logo} alt="" />
        </div>
        <ul>
         <Link to={'/'} > <li>Home</li> </Link>
          <Link to={''}> <li>Catalogu</li> </Link>  
          <Link to={''}> <li>ContactUS</li> </Link>   
          <Link to={''}> <li>Help</li> </Link>  
        </ul>      
        <div className="i">
        <MdOutlineLocalGroceryStore />
        <Link to={''}>  <button className="btn btn-outline mt-5 "> Regester </button> </Link>  
        </div>

      
      </nav>
     

    </>
  )
}
