// this is the axios req to server using sever end-points
// we can use different methods to make req like get,post,put,patch etc.
// here is the example of the get req

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


// simple fetch req

fetch(url)
    .then(res=>{
        if(!res.ok){
            setError(true);
            throw Error("cant able to connect the server..!")
        }
        return res.json();
    })
    .then(res=>{
        setBlogs(res); 
        setisPending(false); 
        setError(null);
    })
    .catch((err)=>{
          setisPending(false);
          setError(err.message);
      })

