import { useEffect, useState } from 'react'

export const useFetch = (url) => {
    const [response, setResponse] = useState()
    const fullURL = `http://localhost:8000/${url}`

    const getData = async () => {
        try {
            const data = await fetch(fullURL)
            setResponse(await data.json()) 
        } catch (error) {
            new Error(`failed: ${error}`)
            setResponse(null)
        }
    }

    /* eslint-disable */
    useEffect(()=>{
        getData()
    }, [])
    /* eslint-enable */


    return { response }
}