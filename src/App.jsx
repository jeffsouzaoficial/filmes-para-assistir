import { useState, useEffect } from "react";
import Filme from "./components/Filme";

function App() {
  const filmesSalvos = JSON.parse(localStorage.getItem("filmes-para-assistir"))

  const [filmes, setFilmes] = useState(filmesSalvos ||[
    { id: 1, nome: "The Good, the Bad and the Ugly", genero: "Epic",ano:1966, duracao: 180, assistido: true },
    { id: 2, nome: "Unforgiven", genero: "Drama",ano:1992, duracao: 131, assistido: true },
    { id: 3, nome: "Once Upon a Time in the West", genero: "Epic",ano:1968, duracao: 166, assistido: false },
  ])

  const [generoEscolhido, setGeneroEscolhido] = useState("Epic")

  const [novoNome, setNovoNome] = useState("")

  const [novoGenero, setNovoGenero] = useState("Epic")

  const [novoAno, setNovoAno] = useState("")

  const [novaDuracao, setNovaDuracao] = useState("")

  const [sugestoes, setSugestoes] = useState([])



  useEffect(() => {
    localStorage.setItem("filmes-para-assistir", JSON.stringify(filmes))
  }, [filmes])

  useEffect(() => {
    async function buscarSugestoes() {
      const resposta = await fetch(`https://api.sampleapis.com/movies/western`)
      const dados = await resposta.json()
      setSugestoes(dados)
    }

    buscarSugestoes()
  }, [])

  const filmesFiltrados = filmes.filter((filme) => filme.genero === generoEscolhido)

  const filmesOrdenados = [...filmesFiltrados].sort((a, b) => a.ano - b.ano)

  const minutosFilmes = filmes.reduce((total, filme) => total + filme.duracao, 0)

  const horas = Math.floor(minutosFilmes / 60)
  const minutosRestantes = minutosFilmes % 60

  const filmesAssistidos = filmes.filter((filme) => filme.assistido === true)

  function cadastrarFilme() {
    if (novoNome === "" || novoGenero === "" || novoAno === "" || novaDuracao === "") {
      alert("Preencha todos os campos.")
      return
    }

    const filmeRepetido = filmes.some(
      (filme) => filme.nome === novoNome
    )

    if (filmeRepetido) {
      alert("Esse filme já está na lista.")
      return
    }

    const novoFilme = {
        id: Date.now(),
        nome: novoNome,
        genero: novoGenero,
        ano: Number (novoAno),
        duracao: Number(novaDuracao),
        assistido: false,
      }
      setFilmes([...filmes, novoFilme])

      setNovoNome("")
      setNovoAno("")
      setNovaDuracao("")
      setNovoGenero("Epic")
}

  function filmeAssistido(id) {
    const confirmou = confirm("O filme foi assistido?")

    if (confirmou === false) {
      return
    }
    setFilmes(
      filmes.map((filme) =>
        filme.id === id ? { ...filme, assistido: true } : filme
      )
    )
}

  return (
    <div>
      <h1>Movies to Watch</h1>

      <p>Tempo de filme: {horas}h {minutosRestantes}min</p>  
      <p>Filmes ativos: {filmesAssistidos.length}</p>
      <p>Total de filmes: {filmes.length}</p>

      <h2>Novo Filme</h2>
      <input 
        type="text"
        placeholder="Nome do Filme"
        value={novoNome}
        onChange={(evento) => setNovoNome(evento.target.value)}
      />

      <select value={novoGenero} onChange={(evento) => setNovoGenero(evento.target.value)}>
        <option value="Epic">Epic</option>
        <option value="Drama">Drama</option>
        <option value="Adventure">Adventure</option>
        <option value="Action">Action</option>
      </select>

      <input 
        type="number"
        placeholder="Ano do filme"
        value={novoAno}
        onChange={(evento) => setNovoAno(evento.target.value)}
      />

      <input 
        type="number"
        placeholder="Tempo do filme"
        value={novaDuracao}
        onChange={(evento) => setNovaDuracao(evento.target.value)}
      />

      <button onClick={cadastrarFilme}>Cadastrar</button>
      <p>Prévia: {novoNome} | {novoGenero} | {novoAno} | {novaDuracao} </p>

      <h2>Lista</h2>
      <select value={generoEscolhido} onChange={(evento) => setGeneroEscolhido(evento.target.value)}>
        <option value="Epic">Epic</option>
        <option value="Drama">Drama</option>
        <option value="Adventure">Adventure</option>
        <option value="Action">Action</option>
      </select>

      {filmesOrdenados.map((filme) => (
        <Filme
        key={filme.id} 
        nome={filme.nome} 
        genero={filme.genero} 
        ano={filme.ano} 
        duracao={filme.duracao}
        filmeAssistido={filmeAssistido}
        assistido={filme.assistido}
        id={filme.id}
        />
      ))}



      {/*
      <Filme nome="The Magnificent Seven" genero="Western / Action" ano={1960} duracao={128} />
      <Filme nome="Django Unchained" genero="Western / Drama" ano={2012} duracao={164} />
      <Filme nome="The Revenant" genero="Western / Adventure / Drama" ano={2015} duracao={156} />*/}
      
    <h2>Sugestões de westerns</h2>
      <ul>
        {sugestoes.map((sugestao) => (
          <li key={sugestao.id}>
            <img src={sugestao.posterURL} alt={sugestao.title} width="100" />
            <p>{sugestao.title}</p>
          </li>
        ))}
      </ul>
        
    </div>
  )
}

export default App