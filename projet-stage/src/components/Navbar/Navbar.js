import React from 'react'
import { menuItems } from '../../data/menudata/menudata'
import {Link} from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
  return (
        <ul className='ulnav'>
            <li>
            <Link to="/" ><div className='logo linav' >Logo</div></Link>

            </li>
            {menuItems.map((item,index)=>{
                return(
                    <li key={index} className="linav"><Link to={item.url} >
                        {item.title}
                    </Link></li>
                )
            })

            }
        </ul>
  )
}
