import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

  
function App() {

  const times = [
    {
      nome: 'Desenvolverdor',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Customer Sucess',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Marketing',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5'
    },
    {
      nome: 'Onboarding',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9'
    }
  ]

  const [agentes, setAgentes] = useState([])

  const aoNovoAgenteAdicionado = (agente)=>{
    setAgentes([...agentes, agente])
  }
  
  return (
    <div className="App">
      <Banner />
      <Formulario 
      times = {times.map(time => time.nome)}
      aoAgenteCadastrado={agente => aoNovoAgenteAdicionado(agente)}/>
      
      {times.map(time =>
         <Time 
         key={time.nome} 
         nome={time.nome} 
         corPrimaria={time.corPrimaria} 
         corSecundaria={time.corSecundaria}
         agentes={agentes.filter(agentes => agentes.time === time.nome)}
         />)}

     

    </div>
  );
}

export default App;
