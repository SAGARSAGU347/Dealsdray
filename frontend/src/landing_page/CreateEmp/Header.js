import React from 'react';
import '../../index.css'

function Header(){
    return(
        <div >
        <div className=' ' style={{backgroundColor:'black'}}>
            <div className='row p-2 '>
            <div className='col-4 '>
                <img src='/images/logo.png.jpg' alt='ss' width='15%' className='mx-3' ></img>
            </div>
            <div className='col-6 kishore'  style={{color:'white', fontSize:'50px', fontWeight:'bold ', fontFamily:'sans-serif', marginRight:'10px'}} >DealsDray</div>
            
        </div>
        
        </div>
        <div style={{backgroundColor:'grey', fontWeight:'bold'}} className='p-2'>
            <ul className='saa'>
           
                <a href='/dashboardemp'><li>HOME</li></a>
                <a href='/createemployee'><li>Employee List</li></a>
                <br/>
                <li>Admin Name</li>
               <a href='http://localhost:3001/login'> <li>Logout</li></a>
                


            
                </ul>
           
        </div>
        
        </div>
        
    );
}
export default Header;  
