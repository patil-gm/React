// the of the custom hook should always be start with 'use' word
// here url is paased as a prop

const useFetch=(url)=>{

    const [Blogs, setBlogs] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{

//       This setTimeoutfuction used to simulate live loading of the page 
//       Don't use in real world projects 
        setTimeout(()=>{
          
            axios.get(url)
                .then(res=>{
                    setBlogs(res.data); 
                    setisPending(false); 
                    setError(null);
                })
                .catch((err)=>{
                      setisPending(false);
                      setError(err.message);
                 }) 
          
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

            
                
        },1000)
      
    },[])

    return {isPending,error,Blogs}

}

export default useFetch;
