import {startCase} from 'lodash'

type Props = {
    title: string
    data: Record<string, string>
}

const KeyValueOutput = ({title, data}: Props) => {
    
  return (
    <div className="flex flex-col text-sky-300 my-3">
        <h1 className='flex justify-center text-lg font-bold my-3'>{title}</h1>
        {data ? <div className="grid grid-cols-2 auto-cols-max px-3">
            {Object.entries(data).reduce((acc, [key, value]) => typeof value !== 'object' ? [...acc, startCase(key), value] : [...acc], [] as Array<string>).map(item => <div>{item}</div>)}
        </div>: 'No data available'}
    </div>
  )
}

export default KeyValueOutput