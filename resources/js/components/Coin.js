import  { useState,useEffect } from 'react';

function Coin(){
	
	// loading | once | (true)
	const [loading,setLoading] = useState(true);
	// store api datta
	const [coins,setCoins] = useState([]);
	
	// fetchn api once 
	useEffect( () =>{
		fetch("https://api.coinpaprika.com/v1/tickers")
		.then((response)=>response.json())
		.then( (json)=>{
			setCoins(json);
			setLoading(false);
		});
	},[]);

	return(
           <div className="container">
           	   <h1>coin   {loading ? null : coins.length}</h1>
           	   {loading ? <p>loading..</p> :

  	           <select>
                 {coins.map((item)=>(
                      <option key={item.id}> 
                 	    {item.name} : {item.quotes.USD.price} 
                 	</option>
                 ))}
           	   </select>


           	    }
           	   
         

           </div>
		)
}

export default Coin;