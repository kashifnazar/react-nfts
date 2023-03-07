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

  return (
    <div className='flex flex-col items-center'>
      <KeyValueOutput title="Page" data={rest} />
      <KeyValueOutput title="Metadata" data={restMetaData} />
      <KeyValueOutput title="Attributes" data={attributesMap as Record<string, string>} />
    </div>
  )
}

export default TokenDetails