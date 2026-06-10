import React from 'react';
import details from '../data.js';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1 id='heading'>User Directory</h1>
       {
        details.map((item)=>{
            return(
                <Link key={item.id} to={`/${item.id}`} className='profiles'>

              
                <h2 className="profileName">{item.name}</h2>
             
              </Link>
            )
        })
      }
    </div>
  )
}

export default Home