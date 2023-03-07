import NFTs from './pages/NFTs';
import { ModalProvider } from './context/ModalContext';

function App() {
  return (
    <div id='main' className='flex justify-center text-sky-300'>
        <ModalProvider>
          <NFTs address='0xd8da6bf26964af9d7eed9e03e53415d37aa96045'/>
        </ModalProvider>
      </div>
  ); 
}

export default App
