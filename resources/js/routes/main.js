import { Routes, Route} from "react-router-dom";

import Converters from '../components/Converters.js';
import Mytodo from '../components/Todo';
import Coin from '../components/Coin';
import Movie from '../components/movie.js';
import Home from '../components/Home.js';


function App(){
  return(
       <Routes>
                 <Route path="/" element={<Home />} />
                 <Route path="/movie" element={<Movie />} />
                 <Route path="/coin" element={<Coin />} />
                 <Route path="/todo" element={<Mytodo />} />
                 <Route path="/converters" element={<Converters />} />
       </Routes>
    );
}

export default App;