import Token from '../components/Token'
import { useGrid } from '../hooks/useGrid'

type NftResponse = {
    "total": number | null,
    "page": number
    "page_size": number,
    "cursor": string,
    "result": Array<Nft>
  }
  
  export type Nft = {
    "token_address": string,
    "token_id": string,
    "amount": string,
    "owner_of": string,
    "token_hash": string,
    "block_number_minted": string,
    "block_number": string,
    "contract_type": string,
    "name": string,
    "symbol": string,
    "token_uri": string,
    "metadata": string,
    "last_token_uri_sync": string,
    "last_metadata_sync": string,
    "minter_address": string,
  }

  type Props = {
    address: string
  }

const NFTs = ({address}: Props) => {

    const nftsGrid = useGrid<Nft, NftResponse>({
        url: `https://deep-index.moralis.io/api/v2/${address}/nft`,
        renderItem: (token: Nft) => <Token token={token} onClick={() => alert('test')} />,
        getList: (response: NftResponse) => response.result
      })

  return (
    <div className="flex-col items-center">
        <div className='flex-col items-center text-sky-300 p-10 flex justify-center font-bold sticky top-0 bg-black'>
            <h1 className="text-6xl">NFTs</h1>
            <h3>${address}</h3>
        </div>
        {nftsGrid}
    </div>
    
  )
}

export default NFTs