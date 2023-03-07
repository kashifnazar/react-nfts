type Props<T> = {
    data: Array<T>
    resolver: (t: T) => React.ReactElement
}

const Grid = <T extends unknown>({data, resolver}: Props<T>) => {
    
  return (
    <div className='flex flex-wrap justify-center'>
        {data.map(token => <div className="self-start">{resolver(token)}</div>)}
    </div>
  )
}

export default Grid