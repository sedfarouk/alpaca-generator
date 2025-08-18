import "./App.css";
import Alpaca from "./components/Alpaca";
import AlpacaContextProvider from "./store/alpaca-store";
import { Analytics } from "@vercel/analytics/next";

function App() {
  return (
    <Analytics>
      <AlpacaContextProvider>
        <Alpaca />
      </AlpacaContextProvider>
    </Analytics>
  );
}

export default App;
