import './App.css'
import Layout from './components/Layout'
import IconJS from './assets/icons8-javascript-48.png'
import IconReact from './assets/icons8-react-a-javascript-library-for-building-user-interfaces-48.png'
import IconVue from './assets/icons8-visualizar-js-48.png'
import IconTS from './assets/icons8-texto-datilografado-48.png'
import IconNode from './assets/icons8-nó-js-48.png'
import IconEmail from './assets/icons8-nova-mensagem-64.png'

function App() {
  return (
    <Layout>
      <div className='content-fp'>
        <div className='content-container'>
          <div className='content-info'>
            <div className='info-title'>
              <p>Olá, eu sou o William.</p>
            </div>
            <div className='info-subtitle'>
              <p>Desenvolvedor front-end</p>
            </div>
            <div className='content-technologies-icon'>
              <img src={IconJS} alt="Javascript Icon" />
              <img src={IconTS} alt="Typescript Icon" />
              <img src={IconNode} alt="Node.Js Icon" />
              <img src={IconVue} alt="Vue.js Icon" />
              <img src={IconReact} alt="React Icon" />
            </div>
            <div className='info-email'>
            <div className='circle-email'>
              <img src={IconEmail} alt="Email Icon" />
            </div>
            <p>Wiusk8@gmail.com</p>
          </div>
          </div>
          <div className='content-image'>

          </div>
          <div className='content-experience'>
            <div className='experience-info'>
          <span>Anos de experiência</span>
            <div className='circle-experience'>
                <p>2</p>
            </div>
          </div>
          <div className='experience-title'>
            <p>Desenvolvedor front-end</p>
          </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App
