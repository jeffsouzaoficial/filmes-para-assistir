import { useState } from "react";
import Filme from "./components/Filme";

function App() {
  const [filmes, setFilmes] = useState([
    { id: 1, nome: "The Good, the Bad and the Ugly", genero: "Epic",ano:1966, duracao: 180 },
    { id: 2, nome: "Unforgiven", genero: "Drama",ano:1992, duracao: 131 },
    { id: 3, nome: "Once Upon a Time in the West", genero: "Epic",ano:1968, duracao: 166 },
  ])

  const [filmeEscolhido, setFilmeEscolhido] = useState("Epic")

  const filmesFiltrados = filmes.filter((filme) => filme.genero === filmeEscolhido)

  return (
    <div>
      <h1>Movies to Watch</h1>

      <select value={filmeEscolhido} onChange={(evento) => setFilmeEscolhido(evento.target.value)}>
        <option value="Epic">Epic</option>
        <option value="Drama">Drama</option>
        <option value="Adventure">Adventure</option>
        <option value="Action">Action</option>
      </select>

      {filmesFiltrados.map((filme) => (
        <Filme
        key={filme.id} 
        nome={filme.nome} 
        genero={filme.genero} 
        ano={filme.ano} 
        duracao={filme.duracao}
        />
      ))}


      {/*<Filme nome="The Searchers" genero="Western / Adventure" ano={1956} duracao={119} />
      <Filme nome="Stagecoach" genero="Western / Adventure" ano={1939} duracao={97} />
      <Filme nome="The Magnificent Seven" genero="Western / Action" ano={1960} duracao={128} />
      <Filme nome="Django Unchained" genero="Western / Drama" ano={2012} duracao={164} />
      <Filme nome="The Revenant" genero="Western / Adventure / Drama" ano={2015} duracao={156} />*/}
      
    </div>
  )
}

export default App