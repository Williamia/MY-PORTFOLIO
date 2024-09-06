import './footer.css';
import Button from './Button';
import IconBook from '../assets/icons8-diário-30.png';
import IconGithub from '../assets/icons8-github-32.png';
import IconLap from '../assets/icons8-notebook-48.png';

interface FooterProps {
  openAcademicModal: () => void;
  openExperienceModal: () => void;
  openProjectsModal: () => void;
}

function Footer({ openAcademicModal, openExperienceModal, openProjectsModal }: FooterProps) {
  return (
    <div className='footer'>
      <div className='container-footer'>
        <Button
          text='FORMAÇÃO ACADÊMICA'
          imgSrc={IconBook}
          altText='Button 1'
          variant='primary'
          onClick={openAcademicModal}
        />
        <Button
          text='EXPERIÊNCIA PROFISSIONAL'
          imgSrc={IconLap}
          altText='Button 2'
          variant='secondary'
          onClick={openExperienceModal}
        />
        <Button
          text='MEUS PROJETOS'
          imgSrc={IconGithub}
          altText='Button 3'
          variant='danger'
          onClick={openProjectsModal}
        />
      </div>
    </div>
  );
}

export default Footer;
