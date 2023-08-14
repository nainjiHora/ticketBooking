import React from "react";
import { Link } from "react-router-dom";

function Header(){
    

    return(
    <>
    <div className="HeaderMainDiv">
     <Link to="/">   <button className="HeaderButton">Login</button></Link>
        {window.location.pathname!=='/register' &&<Link to={'/register'}> <button className="HeaderButton">Register</button></Link>}
        {<Link to="/logout"><button className="HeaderButton">Logout</button></Link>}
        {window.location.pathname!=='/book' &&<Link to={"/book"}><button className="HeaderButton">Book Ticket</button></Link>}
        {window.location.pathname!=='/details' && <Link to={"/details"}><button className="HeaderButton">Ticket Details</button></Link>}
        
    </div>
    </>
    )
}

export default Header;