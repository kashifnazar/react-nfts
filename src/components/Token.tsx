import { Nft } from "../pages/NFTs"

type Props = {
    token: Nft
    onClick: (token: Nft) => void
}

const Token = ({token, onClick}: Props) => {

  const {name, symbol, token_address, contract_type} = token

  return (
    <div onClick={() => onClick(token)} className='flex flex-col m-5 px-3 py-8 
                  bg-gray-900 border-2 border-sky-500 hover:border-4 
                  rounded-lg cursor-pointer text-sky-200 
                  shadow-sm shadow-sky-500 hover:shadow-xl hover:shadow-sky-800
                  items-center w-[350px] h-[240px]'>
        <div className='text-lg'>{name}</div>
        <div className='text-xl font-bold'>({symbol})</div>
        <div className='text-xs wrap mt-8'>{token_address}</div>
        <div className='mt-8'>Contract Type: {contract_type}</div>
    </div>
  )
}

export default Token