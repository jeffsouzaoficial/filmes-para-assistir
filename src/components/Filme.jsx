function Filme(props) {

  const horas = Math.floor(props.duracao / 60)
  const minutosRestantes = props.duracao % 60

  return (
    <div>
      <h2>{props.nome}</h2>
      <p>Gênero: {props.genero}</p>
      <p>Ano: {props.ano}</p>
      <p>Duração: {horas}h {minutosRestantes}min</p>
    </div>
  )
}

export default Filme