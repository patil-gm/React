// ************ get request **********
const [data, setData] = useState(null)
const fetchData = async () => {
      const res = await fetch(url)
      const json = await res.json()
      if (res.ok) {
        setWorkouts(json)
      }
}

useEffect(() => {
    fetchData()
  }, [])

// ********** Post request ***********
 const handleSubmit = async (e) => {
    e.preventDefault()

    const Object = {param1, param2, param3}
    
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(Object),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {     
      // setting params values to null
      param1('')
      param2('')
      param3('')
      setError(null)
      console.log('new Object added:', json)
    }

 }
