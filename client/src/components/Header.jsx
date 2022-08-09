import logo from './assets/logo.png';

export default function Header() {
  return (
    <nav className='navbar bg-light mb-4 p-0'>
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className='d-flex flex-row'>
            <img src={logo} alt="logo" className="mr-2" />
            <div>Project Graphql MERN</div>
          </div>
        </a>
      </div>
    </nav>
  )
}