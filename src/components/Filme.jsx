function Filme(props) {

  const horas = Math.floor(props.duracao / 60)
  const minutosRestantes = props.duracao % 60

  const mensagem = `Assista o filme ${props.nome} (${props.ano})!`
  const link = `https://wa.me/?text=${encodeURIComponent(mensagem)}`

  return (
    <div>
      <h2>{props.nome}</h2>
      <p>Gênero: {props.genero}</p>
      <p>Ano: {props.ano}</p>
      <p>Duração: {horas}h {minutosRestantes}min</p>
      {props.assistido === false ? (
      <button onClick={() => props.filmeAssistido(props.id)}>Marcar como assistido</button>
      ) : (
        <p>Filme assistido</p>
      )}

      <a href={link} target="_blank">Compartilhar no WhatsApp</a>
    </div>
  )
}

export default Filme