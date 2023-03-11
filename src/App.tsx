import "./App.css";
import Minesweeper_teste from "./components/Minesweeper_teste";
import Minesweeper from "./pages/Minesweeper";

function App() {
  return (
    <div className="App">
      <h1>Estudos React!</h1>
      <h2>Jogo de campo minado com tamanho e quantidade de bombas :</h2>
      {/* <Minesweeper_teste /> */}
      <Minesweeper />
    </div>
  );
}

export default App;
