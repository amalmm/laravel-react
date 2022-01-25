import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Converters from './Converters.js';
import Mytodo from './Todo';

function Main() {
   
    return (
       <div>
           <Mytodo />
           <hr />
           <Converters />
       </div>
    );
}

export default Main;

if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}
