import { useEffect,useState } from "react";
import axios from 'axios'

const useFetch=(url)=>{

    const [Blogs, setBlogs] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error,setError]=useState(null);

    
    useEffect(()=>{
        const abortContr = new AbortController();
        
        setTimeout(()=>{
            // fetch(url)
            //     .then(res=>{
            //         if(!res.ok){
            //             setError(true);
            //             throw Error("cant able to connect the server..!")
            //         }
            //         return res.json();
            //     })
            //     .then(res=>{
            //         setBlogs(res); 
            //         setisPending(false); 
            //         setError(null);
            //     })
            //     .catch((err)=>{
            //           setisPending(false);
            //           setError(err.message);
            //       })

            axios.get(url,{ signal:abortContr.signal})
                .then(res=>{
                    setBlogs(res.data); 
                    setisPending(false); 
                    setError(null);
                })
                .catch((err)=>{
                    if(err.name=== "AbortError"){
                        console.log ("fetch aborted");
                    }
                    else{  
                        setisPending(false);
                        setError(err.message);
                    }
                  }) 
                
        },1000)

        return ()=> abortContr.abort();

    },[url])

    return {isPending,error,Blogs}

}

export default useFetch;
