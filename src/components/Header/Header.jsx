import logo from "../../images/logo.png";

export default function Header(){
    return (
        <header className="header">
          <img src={logo} 
          alt="Title Picture" 
          className="header__img" 
          />
        </header>
    )
}