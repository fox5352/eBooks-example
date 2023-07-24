import { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const fullURL = `http://localhost:8000/444/${url}`
    const [response, setResponse] = useState([])

    /* eslint-disable */
    useEffect(()=>{
        fetch(fullURL)
            .then(data=> data.json())
            .then(data=> setResponse([...data]))
    },[url,fullURL])
    /* eslint-enable */

    return response
}