import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { useContext } from "react";
import { Authcontext } from "../../providers/Authprovider";

const Navber = () => {

  const { user, Logout } = useContext(Authcontext);
  console.log(user)

    const navitem = <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Services">Services</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            {user?.email ? (
        <li><Link to="/bookings">Bookings</Link></li>
      ) : (
        <li><Link to="/login">Login</Link></li>
      )}
        
    </>

const handelLogout = () => {
  Logout()
    .then(() => {
     
    })
    .catch((error) => console.log(error));
};
    return (
        <div className="navbar bg-base-100 h-28 mb-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navitem}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">
<img src={logo} alt="" />

          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navitem}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <a className="btn  btn-outline btn-warning ">Appointment</a>
         <div>
         {
  user?.email ? (
    <Link onClick={handelLogout} className="btn btn-outline btn-error">
      Logout
    </Link>
  ) : (
    <Link to="/login" className="btn btn-outline btn-error">
      Login
    </Link>
  )
}
         </div>
        </div>
      </div>
    );
};

export default Navber;