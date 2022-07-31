import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const RouterCon = () => {
  const [data, setData] = useState(false)
  return (
    <div className='navbar'>
       
        <Link to="/home">Home</Link>

        <Link to="/about" className='subMenuitems' onClick={()=>setData(!data)}>About</Link>      
        
        {
          data?
          
          <ul>
            <li><Link to='/One'>One</Link></li>
            <li><Link to='/Two'>Two</Link></li>
            <li><Link to='/Three'>Three</Link></li>
          </ul>
          :null 
        } 


        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
       
    </div>
  )
}

export default RouterCon



// {
//   // data?<h2>Vikrant Mulankar</h2>:null 
//   data?
  
//   <ul>
//     <li> <Link to='/one'> One </Link> </li>

//     <li>
//       <a href='#'>
//         Two
//       </a>
//     </li>
   
//   </ul>
//   :null 
// }

