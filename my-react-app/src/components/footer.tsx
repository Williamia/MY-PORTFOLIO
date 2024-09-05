import './footer.css'
import Button from './Button'
import IconBook from '../assets/icons8-diário-30.png'
import IconGithub from '../assets/icons8-github-32.png'
import IconLap from '../assets/icons8-notebook-48.png'

function Footer(){
    return(
        <div className='footer'>
            <div className='container-footer'>
                <Button text='FORMAÇÃO ACADÊMICA' imgSrc={IconBook} altText='Button 1' variant='primary'/>
                <Button text='EXPERIÊNCIA PROFISSIONAL' imgSrc={IconLap} altText='Button 2' variant='secondary'/>
                <Button text='MEUS PROJETOS' imgSrc={IconGithub} altText='Button 3' variant='danger'/>
            </div>
        </div>
    )
}

export default Footer