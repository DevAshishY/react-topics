import { useDispatch } from "react-redux";
import { dec, inc } from "./store/slice";
import Child from "./Child";


function App(){
  const dispatch = useDispatch()
return(
  <>
 <Child/>
  <button onClick={()=>dispatch(inc(10))}>ince</button>
  <button  onClick={()=>dispatch(dec(10))}>dec</button>
  
  </>
)
}
export default App;