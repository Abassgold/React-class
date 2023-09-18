import React, {useState} from 'react'
import axios from 'axios'

function Async() {
    const [data, setData] = useState([])
    const endpoint = `https://jsonplaceholder.typicode.com/users`
    const fetchData = ()=>{
        // const response = await axios.get(endpoint);
        // console.log(response);
        axios.get(endpoint).then((response) => {
            console.log(response)
            setData(response)
        })
    }
    useEffect(() => {
      }, [])
    
  return (
    <div>
        <button className='btn btn-success text-white' onClick={fetchData}>Fetch data</button>

        {data.map((item)=>{
            return (
            <h1>{item.login}</h1>
            )
        })}
    </div>
  )
}

export default Async