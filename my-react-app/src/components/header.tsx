import './header.css'
import logoW from '../assets/Andow_William-removebg-preview.png'
import cell from '../assets/icons8-iphone-50.png'


function Header(){
    return(
        <div className="header">
            <div className="container-header">
                <img className="img-logow" src={logoW} />
                <p>SOBRE MIM</p>
                <div className="content-tell">
                <p>(11) 96357-9142</p>
                <div className="circle-tell">
                <img src={cell}/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Header
