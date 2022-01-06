import React from 'react'
import './header.css'
import { BsCartFill } from "react-icons/bs";
import {Link} from 'react-router-dom'

function Nav({links}) {
    return (
        <div className="Menu">

            
          
            <ul>
            <img style={{height:"60px", width:"auto", float:"left", padding:"5px" }} src="/images/logo.png" alt="logo"/>
                <li><Link to="/">Home</Link></li>

{links.map((link, i) => (<li><Link key={i} to={`/category/${link}`}>{link}</Link></li>))}

<li className="carWidget"><BsCartFill/></li>

            </ul>
        </div>
    )
}

export default Nav


/*
<Link to={'/categoy/familiar}><li>Familiar</li></Link>
<li>Camioneta</li>
<li>Coupe</li>

*/