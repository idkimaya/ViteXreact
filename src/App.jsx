import './App.css'
import './components/PokemonCard'
import './components/NavBar'

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
];



const [pokemonIndex, setPokemonIndex] = useState(0);

  return (
    <div>
      <PokemonCard 
        pokemonList={pokemonList}
        pokemonIndex={pokemonIndex}
        setPokemonIndex={setPokemonIndex}
      />
      <Navbar pokemonList={pokemonList} setPokemonIndex={setPokemonIndex} />
    </div>
  );


export default App;
