//CSS´s
import './App.css';
import './light-theme.css';
import './dark-theme.css';
//dependemces
import { useState } from 'react';
//components
import Modal from './components/Modal/Modal';
import about from './IMGS/Slide-IMGS/aboutus-image3.jpeg';
import Projects from './pages/Projects/Projects';
//IMGS
import Lobu from './IMGS/Ramos-IMGS/ramo-lobinho4.jpeg';
import Esco from './IMGS/Ramos-IMGS/ramo-escoteiro.jpeg';
import Sen from './IMGS/Ramos-IMGS/ramo senior.jpeg';
// import Gato from './download.jfif'
// import Carous1 from './IMGS/Slide-IMGS/carousel-esc2edit.jpeg';
// import Carous2 from './IMGS/Slide-IMGS/carousel-esc6.jpeg'


function App() {
  //Alterar o tema 
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  //Modal Aboutus
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  //Modal Ramo Senior
  const [isOpener, setIsopener] = useState(false);

  const ModalOpener = () => setIsopener(true);
  const ModalCloser = () => setIsopener(false);
  //Modal Ramo Escoteiro
  const [Open, setOpen] = useState(false);

  const Opener = () => setOpen(true);
  const Closer = () => setOpen(false);

  //Modal Ramo Lobinho
  const [Opens, setOpener] = useState(false);

  const Opsn = () => setOpener(true);
  const Closn = () => setOpener(false);


  return (
    <div className={`App ${theme}`}>
      <head> <meta name="viewport" content="width=device-width,minium-scale=1.0, initical-scale=1.0, user-scalable=no " /></head>
      <header>

      </header>

      <button onClick={toggleTheme}>Alternar tema</button>
      <div className='aboutus'>
        <div className='aboutus--left'>
          <h4><p>ESCOTISMO DO MAR</p></h4>
          <div className='txt'>
            <p> <br />- ¨Quem vai para o mar, avia-se primeiro em terra. ¨<br />
              O Escotismo do Mar procura desenvolver nos jovens o gosto pela vida no mar através de uma cultura
              marítima e de um espírito marinheiro, podendo também ser praticado em lagoas, represas, mares e
              rios.</p>
            <p>
              Pelas artes e técnicas marinheiras, pela navegação à vela e a motor, pelas viagens, pelos
              transportes marítimos, pela pesca, pelo estudo da oceanografia, pela exploração, pelos esportes
              submarinos e náuticos, incentivando o culto das tradições de nossa Marinha os Escoteiros do Mar
              praticam o escotismo realizando também os acampamentos e excursões em terra.</p>
            <button className='btn' onClick={openModal}>ler mais</button>
          </div>
          <Modal isOpen={isOpen} onClose={closeModal}>
            <h1>escotismo do mar </h1>
            <div className='txt2'>
              <h2>¨Quem vai para o mar, avia-se primeiro em terra."</h2>
              <p>
                O Escotismo do Mar procura desenvolver nos jovens o gosto pela vida no mar através de uma cultura
                marítima e de um espírito marinheiro, podendo também ser praticado em lagoas, represas, mares e
                rios.</p>
              <p>
                Pelas artes e técnicas marinheiras, pela navegação à vela e a motor, pelas viagens, pelos
                transportes marítimos, pela pesca, pelo estudo da oceanografia, pela exploração, pelos esportes
                submarinos e náuticos, incentivando o culto das tradições de nossa Marinha os Escoteiros do Mar
                praticam o escotismo realizando também os acampamentos e excursões em terra.</p>
              <p >
                Além da divisão de tarefas na sede e no campo, os Escoteiros do Mar também dividem suas
                responsabilidades nas guarnições em que participam das atividades embarcadas, reforçando assim
                a execução do Sistema de Patrulhas Embarcado conforme a criação dos irmãos Robert e Warrington
                Baden-Powell no período de 1907 a 1910.</p>
              <p>
                As vestimentas próprias da cultura marinheira e a familiarização com o ambiente náutico, a que
                o jovem é apresentado, são parte de todo um conteúdo pelo qual o Brasil necessita de futuros
                profissionais e de amantes das coisas que vem do mar, afinal, possuímos um dos maiores espaços
                marítimos do globo terrestre, que pelo porte a grandiosidade chamam de “Amazônia Azul”.</p>
            </div>
            <button className='btn2' onClick={closeModal}>Fechar</button>
          </Modal>
        </div>
        <div className='aboutus--right'>
          <img src={about} alt='texto alt' />
        </div>
      </div>

      <div className='List-Container'>
        <ul>


          <li>
            <img onClick={Opsn} src={Lobu} alt='Lobinhos imagem' />
            <h2>Ramo Lobinho</h2>
            <span>de 6 a 10 anos.</span>
            <Modal isOpen={Opens} onClose={Closn}>
              <h1>Ramo Lobinho</h1>
              <p>Destinado a crianças de 6 a 10 anos, o Ramo Lobinho proporciona atividades lúdicas e divertidas que incentivam a imaginação, a sociabilidade e o trabalho em equipe.
                As atividades são organizadas em torno de jogos, canções, histórias e desafios adequados para essa faixa etária,
                incentivando a descoberta e a exploração do mundo ao seu redor.</p>
              <hr />
              <button className='btn2' onClick={Closn}>Fechar</button>
            </Modal>
          </li>

          <li>
            <img onClick={Opener} src={Esco} alt='Escoteiros imagem' />
            <h2>Ramo Escoteiro</h2>
            <span> de 11 a 14 anos.</span>

            <Modal isOpen={Open} onClose={Closer}>
              <h1>Ramo Escoteiro</h1>
              <p> Voltado para jovens de 11 a 14 anos, o Ramo Escoteiro tem como objetivo desenvolver habilidades práticas, liderança e autossuficiência.
                Os escoteiros aprendem a acampar, construir abrigos, cozinhar ao ar livre, navegar e aprimorar suas habilidades sociais.
                O trabalho em equipe é incentivado e os escoteiros têm a oportunidade de conquistar distintivos e emblemas que simbolizam suas realizações individuais.</p>
              <hr />
              <button className='btn2' onClick={Closer}>Fechar</button>
            </Modal>
          </li>

          <li>
            <img onClick={ModalOpener} src={Sen} alt='Senior imagem' />
            <h2>Ramo Sênior</h2>
            <span>de 15 a 17 anos.</span>
            <Modal isOpen={isOpener} onClose={ModalCloser}>
              <h1>Ramo Sênior</h1>
              <p>Destinado a jovens de 15 a 17 anos, o Ramo Sênior busca desafiar os jovens a explorar sua autonomia e liderança.
                Os membros desse ramo têm a oportunidade de planejar e executar suas próprias atividades,
                além de se envolver em projetos comunitários e aprender habilidades de sobrevivência e acampamento mais avançadas.
                O Ramo Sênior também incentiva a reflexão sobre questões sociais, culturais e ambientais.</p>
              <hr />
              <button className='btn2' onClick={ModalCloser}>Fechar</button>
            </Modal>
          </li>
          {/* 
          <li>
            <img src={Pio}  alt='Pioneiro imagem'/>
            <h2>Ramo Pioneiro</h2>
            <p>de 18 a 21 anos.</p>
            </li> */}

        </ul>
      </div>
      <div>
        <h2>nossos projetos</h2>
        <Projects />
      </div><br />
      <footer>
        <h2>nosso local</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.5244404864684!2d-46.71479597096741!3d-23.692958943358363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4e29a20b5fed%3A0x3a5d86ee9413f2fb!2sR.%20Peixe%20Vivo%20-%20Jardim%20Santa%20Helena%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004772-100!5e0!3m2!1spt-BR!2sbr!4v1653958926280!5m2!1spt-BR!2sbr" className='map' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </footer>
    </div>
  );

}

export default App;
