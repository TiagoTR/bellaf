import logo from './logo.svg';
import './App.css';
import {  Container, Options, Card, BigCard, Title, LineAnswers } from "./appStyle";
import dispositivos from "./public/icons/dispositivos.svg";
import casinha from "./public/icons/casinha.svg";
import api from './services/api';

var value;
async function charge (){
  value = await api.get();
  console.log(value.data.value);
}

charge();

function App() {
  return (
    <Container>
      <Options>
        <div className="two-cards">
          <Card>
            <img src={dispositivos} alt="icon"/>
            <h2>Dispositivos</h2>
          </Card>
          <Card>
            <img src={casinha} alt="icon"/>
            <h2>House</h2>
          </Card>
        </div>
        <BigCard>
          <Title>Notificações</Title>

          <div className='null'>
          
          </div>
        </BigCard>
        <BigCard>
          <Title>Respostas rapidas</Title>
          <div className='respostas'>
            <LineAnswers>
              <h3>“Já vou”</h3>
              <button>Enviar</button>
            </LineAnswers>
            <LineAnswers>
              <h3>“Um minuto”</h3>
              <button>Enviar</button>
            </LineAnswers>
            <LineAnswers>
              <h3>“Não estou em casa”</h3>
              <button>Enviar</button>
            </LineAnswers>
          </div>
        </BigCard>
        <BigCard>
          <Title>Sobre o App</Title>
        </BigCard>

      </Options>
    </Container>
  );
}

export default App;
