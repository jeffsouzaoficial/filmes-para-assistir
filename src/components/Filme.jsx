function Filme(props) {
  return (
    <div>
      <h2>{props.nome}</h2>
      <p>Gênero: {props.genero}</p>
      <p>Ano: {props.ano}</p>
      <p>Duração: {props.duracao}</p>
    </div>
  )
}

export default Filme