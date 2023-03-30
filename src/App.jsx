import './App.css'
import './components/PokemonCard'

function App() {
  const pokemon = {
    name: "bulbasaur",
    type: "?",
    weight: "4.0 kg"
  };

  return (
    <div>
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

export default App;
