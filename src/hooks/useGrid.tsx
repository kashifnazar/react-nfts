import React, { useEffect, useState } from "react"
import Grid from "../layouts/Grid"

type Props<T, R> = {
    url: string
    getList: (response: R) => Array<T>
    renderItem: (t: T) => React.ReactElement
}

export const useGrid = <T, R>({url, getList, renderItem}: Props<T, R>) => {

    const [data, setData] = useState<Array<T>>([])

    const getNFTs = async () => {
        
        const response = await fetch(url, {
            headers: {
                "X-API-KEY": "lart9HUN3wggl7fXvAwZNXOTO8J7azv3J9RvQuhTbmj0WcoGRwpfYYfMukzXKAD9"
            }
        })
        
        const data = (await response.json()) as R
        setData(getList(data))
    }

    useEffect(() => {
       getNFTs()
    }, [])

    return <Grid<T> data={data} resolver={(item: T) => renderItem(item)}/>

}