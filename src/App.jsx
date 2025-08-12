import './App.css'
import Alpaca from './components/Alpaca'
import AlpacaContextProvider from './components/store/alpaca-store'

function App() {
  return (
    <AlpacaContextProvider>
      <Alpaca />
    </AlpacaContextProvider>
  )
}

export default App;
