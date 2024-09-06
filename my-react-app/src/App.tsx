import { useState } from 'react';
import Modal from './components/Modal';
import './App.css';
import Layout from './components/Layout';
import IconJS from './assets/icons8-javascript-48.png';
import IconReact from './assets/icons8-react-a-javascript-library-for-building-user-interfaces-48.png';
import IconVue from './assets/icons8-visualizar-js-48.png';
import IconTS from './assets/icons8-texto-datilografado-48.png';
import IconNode from './assets/icons8-nó-js-48.png';
import IconEmail from './assets/icons8-nova-mensagem-64.png';
import IconSchool from './assets/icons8-escola-48.png'
import IconEtec from './assets/etec-icon.png'
import IconSptech from './assets/sptech-icon.png'
import IconForm from './assets/icons8-chapéu-de-formatura-100 (1).png'


function App() {
  const [isAcademicModalOpen, setIsAcademicModalOpen] = useState(false);
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);

  function openAcademicModal() {
    setIsAcademicModalOpen(true);
  }

  function closeAcademicModal() {
    setIsAcademicModalOpen(false);
  }

  function openExperienceModal() {
    setIsExperienceModalOpen(true);
  }

  function closeExperienceModal() {
    setIsExperienceModalOpen(false);
  }

  function openProjectsModal() {
    setIsProjectsModalOpen(true);
  }

  function closeProjectsModal() {
    setIsProjectsModalOpen(false);
  }

  return (
    <Layout
      openAcademicModal={openAcademicModal}
      openExperienceModal={openExperienceModal}
      openProjectsModal={openProjectsModal}
    >
      <div className='content-fp'>
        <Modal isOpen={isAcademicModalOpen} onClose={closeAcademicModal}>
          <p className='title-modal'>FORMAÇÃO ACADÊMICA</p>
          <img className='icon-form' src={IconForm} alt="formatura icon" />
          <div className="container-modal">
            <div className='content-circles'>
            <div className="circle">
              <img src={IconSchool} alt="icon" />
            </div>
            <div className="line"></div>
            <div className="circle etec">
              <img src={IconEtec} alt="icon" />
            </div>
            <div className='line'></div>
            <div className='circle sptech'>
              <img src={IconSptech} alt="icon" />
            </div>
            </div>
            <div className='content-modal'>
            <div className='content-circles'>
            <div className="circle">
              <b>Cleise marisa Siqueira</b>
              <p>ensino médio</p>
              <i>2018</i>
            </div>
            <div className="line"></div>
            <div className="circle">
              <b>Etec de guaianases</b>
              <p>desenvolvimento de sistemas</p>
              <i>2019 - 2020</i>
            </div>
            <div className='line'></div>
            <div className='circle sptech'>
              <b>sptech digital school</b>
              <p>análise e desenvolvimento de sistemas</p>
              <i>2022 - 2025</i>
            </div>
            </div>
            </div>
          </div>
        </Modal>

        <Modal isOpen={isExperienceModalOpen} onClose={closeExperienceModal}>
          Experiência Profissional
        </Modal>

        <Modal isOpen={isProjectsModalOpen} onClose={closeProjectsModal}>
          Meus Projetos
        </Modal>

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
            <div className='content-image-1'></div>
            <div className='content-image-2'></div>
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
  );
}

export default App;
