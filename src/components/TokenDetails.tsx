import { Nft } from "../pages/NFTs"
import KeyValueOutput from "./KeyValueOutput"

type Props = {
    token: Nft
}

type Metadata = {
  attributes?: Array<{trait_type: string, value: string}>
}

const TokenDetails = ({token}: Props) => {

  const { metadata, ...rest} = token

  const {attributes, ...restMetaData} = metadata ? JSON.parse(metadata) as Metadata : {} as Metadata
  
  const attributesMap = attributes && attributes.reduce((acc, element) => ({...acc, [element.trait_type]: element.value}), {})

  const goToOpenSea = (token: Nft) => window.open('https://opensea.io/assets/0x59325733eb952a92e069c87f0a6168b29e80627f/6234', '_blank')

  return (
    <div className='flex flex-col items-center p-10'>
      <button type='button' 
          className="bg-sky-600 text-white px-12 py-3 text-xl rounded-lg" 
          onClick={() => goToOpenSea(token)}>Go to OpenSea</button>
      <KeyValueOutput title="Page" data={rest} />
      <KeyValueOutput title="Metadata" data={restMetaData} />
      <KeyValueOutput title="Attributes" data={attributesMap as Record<string, string>} />
    </div>
  )
}

export default TokenDetails