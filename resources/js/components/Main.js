import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from '../routes/main.js';
import { BrowserRouter,Link } from "react-router-dom";

function Main() {
   
    return (
         <BrowserRouter>
             <div className="container " style={{"maxWidth":"400px"}} >
                    <div>
             <ul className="d-flex justify-content-between" style={{'list-style-type': 'none'}}>
                 <li> <Link to="/" >home</Link> </li>
                 <li> <Link to="/movie" >movie</Link> </li>
                 <li> <Link to="/coin" >coin</Link> </li>
                 <li> <Link to="/todo" >todo</Link> </li>
                 <li> <Link to="/converters" >converters</Link> </li>
             </ul>
         </div>
           <App/>
             </div>   
         </BrowserRouter>

    );
}

export default Main;

if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}
