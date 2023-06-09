// the of the custom hook should always be start with 'use' word
// here url is passed as a prop

import { useEffect,useState } from "react";
import axios from 'axios'

const useFetch=(url)=>{
  const [data, setData] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error,setError]=useState(null);

  useEffect(()=>{
//       This setTimeoutfuction used to simulate live loading of the page 
//       Don't use in real world projects 
      setTimeout(()=>{
          axios.get(url)
              .then(res=>{
                  setData(res.data); 
                  setisPending(false); 
                  setError(null);
              })
              .catch((err)=>{
                    setisPending(false);
                    setError(err.message);
               }) 
      },1000)
    
  },[])
  return {isPending,error,data}
}

export default useFetch;

// use of custom Hook 
// pass the url to hook and store the data data
// their is no need to create the below variabbles as useState
// use the data to show on dashboard
// below line used in page where we want the data
const {Data:workouts ,isPending,error} = useFetch('/api/workouts');

