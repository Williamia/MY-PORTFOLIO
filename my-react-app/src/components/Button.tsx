import classNames from "classnames";
import './Button.css'

interface ButtonProps{
    text: string;
    imgSrc: string;
    altText: string;
    className?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'danger';
}

function Button({ text, imgSrc, altText, onClick, className, variant }: ButtonProps) {
    return (
      <button onClick={onClick} className={classNames('button', className,{
        'primary-color': variant === 'primary',
       'secondary-color': variant === 'secondary',
       'danger-color': variant === 'danger'})}>
        <div className="circle-icon">
        <img src={imgSrc} alt={altText} className="button-icon" />
        </div>
        <span>{text}</span>
      </button>
    );
  }
  
  export default Button;