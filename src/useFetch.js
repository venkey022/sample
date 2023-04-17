import React, { useEffect } from 'react'

function useFetch() {
    const 
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data =>{
      setData(data);
    });
   
    

    },[])
  return (
    <div>
      
    </div>
  )
}

export default useFetch
