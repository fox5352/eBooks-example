import { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const fullURL = `${process.env.REACT_APP_URL}/444/${url}`
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