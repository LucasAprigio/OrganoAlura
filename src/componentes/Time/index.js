import Agentes from '../Agentes'
import './Time.css'

const Time = (props) =>{
      const css = {backgroundColor: props.corSecundaria}

      return (
            props.agentes.length > 0 && <section className='time' style={css}>
                <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
                <div className='agentes'>

                {props.agentes.map(agente => <Agentes 
                key={agente.nome}
                nome={agente.nome} 
                cargo={agente.cargo}
                imagem={agente.imagem}
                corDeFundo={props.corPrimaria}
                />)}
                </div>
            </section>

      )

}

export default Time