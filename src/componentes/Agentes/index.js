import './Agentes.css'

const Agente = ({nome, imagem, cargo, corDeFundo}) =>{
        return(
            <div className='Agente'>
                <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                    <img src={imagem} alt={nome}/>
                </div>
                <div className='rodape'>
                    <h4>{nome}</h4>
                    <h5>{cargo}</h5>
                </div>
            </div>
        )
}
export default Agente