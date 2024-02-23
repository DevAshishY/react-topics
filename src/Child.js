import { useSelector } from "react-redux";



function Child(){

    const counterReduce = useSelector((state)=>state.counterReduce)
return(
    <>
     <h2>{counterReduce.count}</h2>
    
    </>
)
}

export default Child;