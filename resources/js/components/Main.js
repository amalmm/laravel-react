import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Converters from './Converters.js';
import Mytodo from './Todo';

import Coin from './Coin';

function Main() {
   
    return (
       <div>
           <Converters />
           <hr />
           <Mytodo />
           <hr/>
           <Coin />
       </div>
    );
}

export default Main;

if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}
