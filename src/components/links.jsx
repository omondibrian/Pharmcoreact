import React from 'react'
import {NavLink} from "react-router-dom";
const Link = (props) => {
    return (
    <li ><NavLink to="/products">
             <i className="icon-chevron-right" />
            {props.name} ({props.qty})
         </NavLink>
    </li> );
}
 
export default Link;