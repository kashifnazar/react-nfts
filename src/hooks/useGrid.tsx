import React, { useEffect, useState } from "react"
import Grid from "../layouts/Grid"

type Props<T, R> = {
    url: string
    getList: (response: R) => Array<T>
    renderItem: (t: T) => React.ReactElement
}

export const useGrid = <T, R>({url, getList, renderItem}: Props<T, R>) => {

    const [data, setData] = useState<Array<T>>([])
    const [isProgressBar, setIsProgressBar] = useState(false)
    const [error, setError] = useState<Error | null>(null)

    const getNFTs = async () => {

        try{
        setIsProgressBar(true)
        const response = await fetch(url, {
            headers: {
                "X-API-KEY": "lart9HUN3wggl7fXvAwZNXOTO8J7azv3J9RvQuhTbmj0WcoGRwpfYYfMukzXKAD9"
            }
        })
        
        const data = (await response.json()) as R
        setData(getList(data))
        } catch(e) {
            setError(e as Error)
        } finally {
            setIsProgressBar(false)
        }

    }

    useEffect(() => {
       getNFTs()
    }, [])

    return isProgressBar ? 
            <div className="flex justify-center">Please wait...</div> : 
            error ? <div className="flex justify-center text-red-500">{error.message}</div>  :
            <Grid<T> data={data} resolver={(item: T) => renderItem(item)}/>

}