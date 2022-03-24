import React from 'react'
import './header.css'
import { BsCartFill } from "react-icons/bs";
import {Link} from 'react-router-dom'
import { UseCartContext } from './CartContext';

function Nav({links}) {
    const { IconCart, CartList } = UseCartContext();
    return (
        <div className="Menu">

            
          
            <ul>
            <img style={{height:"60px", width:"auto", float:"left", padding:"5px" }} src="/images/logo.png" alt="logo"/>
                <li><Link to="/">Home</Link></li>

{links.map((link, i) => (<li><Link key={i} to={`/category/${link}`}>{link}</Link></li>))}

<li className="carWidget"><Link style={{padding:"5px 10px"}}to="/cart"><BsCartFill/></Link></li>
{CartList.length < 1 ? "" : <h2 style={{color:"yellow", padding:"20px 0", float:"right"}}>{IconCart()}</h2>}

            </ul>
           
        </div>
    )
}

export default Nav

