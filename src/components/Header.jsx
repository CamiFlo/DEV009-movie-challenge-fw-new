import  logo  from '../assets/logo50years.jpg'

export function Header(){
    return (
      <>
      
      <header className="header">
        <div className="logo-container">
          <img 
          className="logo"
          src={logo} 
          alt="Logo 50 years of hip hop"
          width={100}
          height={100}
        />
        </div>
        <div className="title-container">
          <h1 className="title">HIP HOP CULTURE CINEMA</h1>
        </div>
      </header>
      
      </>
  
    )
  
  }