import  { useState } from 'react';


function Converters() {

  const [amount, setAmount] = useState("");

  const [fliped, setFliped] = useState(false);

  const onChange = (event) => { setAmount(event.target.value); }

  const reset = () => setAmount(""); 

  const onFlip = () => {setFliped( (current) => !fliped ); reset();} 

    return (
        <div className="container">
          <h1>time converters  </h1>
            <div>
              <label htmlFor="minutes">minutes</label>
           <input type="number" placeholder="minutes" 
           value={fliped ? amount*60 : amount  }
              onChange={onChange}
              disabled={fliped === true}  
             />
             </div>
      
              <div>
                       <label htmlFor="hours">hours</label>
           <input id="hours" type="number"
           onChange={onChange}
            value={ fliped ? amount : Math.round(amount/60)} placeholder="hours"  
            disabled={fliped === false}  />
              </div>

              <div>
                  <button onClick={reset} >reset</button>
                  <button onClick={onFlip} >{fliped ? "invert back" : "invert"}</button>
              </div>
        </div>
    );
}

export default Converters;


