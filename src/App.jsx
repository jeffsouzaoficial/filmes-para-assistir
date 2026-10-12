import Filme from "./components/Filme";

function App() {
  return (
    <div>
      <h1>Filmes para Assistir</h1>
      <Filme nome="The Good, the Bad and the Ugly" genero="Western / Epic" ano={1966} duracao={180} />
      <Filme nome="Unforgiven" genero="Western / Drama" ano={1992} duracao={131} />
      <Filme nome="Once Upon a Time in the West" genero="Western / Epic" ano={1968} duracao={166} />
      <Filme nome="The Searchers" genero="Western / Adventure" ano={1956} duracao={119} />
      <Filme nome="Stagecoach" genero="Western / Adventure" ano={1939} duracao={97} />
      <Filme nome="The Magnificent Seven" genero="Western / Action" ano={1960} duracao={128} />
      <Filme nome="Django Unchained" genero="Western / Drama" ano={2012} duracao={164} />
      <Filme nome="The Revenant" genero="Western / Adventure / Drama" ano={2015} duracao={156} />
    </div>
  )
}

export default App