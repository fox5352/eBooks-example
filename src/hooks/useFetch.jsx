import { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [response, setResponse] = useState()
    const fullURL = `http://localhost:8000/${url}`

    const getData = async () => {
        const data = await fetch(fullURL)
        setResponse(await data.json()) 
    }

    /* eslint-disable */
    useEffect(()=>{
        getData()
    }, [])
    /* eslint-enable */


    return { response }
}