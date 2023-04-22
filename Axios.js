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


// the function to handle Submit

 const handleSubmit=(e)=>{
            // prevent the refrershing after cliking submit
            e.preventDefault();
   
            // here we are creating object to post using the var declared previously
            const Blog = {title,body,author}
//             console.log(Blog);

            axios.post(url, Blog)
              .then(function (response) {
                console.log(response);
                console.log('blog added successfully');
              })
              .catch(function (error) {
                console.log(error);
              });
    }
