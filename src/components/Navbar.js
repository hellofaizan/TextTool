import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../Faizan.png'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <img src={Logo} alt="logo" width="30" height="30" className="logo d-inline-block align-text-top"/>
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Indexes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Links</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page"target="_blank" rel="noopener noreferrer" href="https://discord.gg/invite/EHthxHRUmr">Discord Server</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Socials
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" target="_blank" rel="noopener noreferrer" href="https://github.com/hellofaizan">Github</a></li>
            <li><a className="dropdown-item" target="_blank" rel="noopener noreferrer" href="https://instagram.com/hellofaizan">Instagram</a></li>
            <li><a className="dropdown-item" target="_blank" rel="noopener noreferrer" href="https://discord.com/users/890232380265222215">Discord</a></li>
            <li><a className="dropdown-item" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@HelloFaizan/">Youtube</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" target="_blank" rel="noopener noreferrer" href="https://github.com/sponsors/hellofaizan">Github Sponser</a></li>
            <li><a className="dropdown-item" target="_blank" rel="noopener noreferrer" href="https://discord.gg/invite/EHthxHRUmr">Discord Server</a></li>
          </ul>
        </li>
      </ul>
      <ul className='navbar-nav  mb-2 mb-lg-0'>
      <li className="nav-item">
          <a className="nav-link active socialI" target="_blank" rel="noopener noreferrer" aria-current="page" href="https://instagram.com/hellofaizan"><i class="bi bi-instagram"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active socialI" target="_blank" rel="noopener noreferrer" aria-current="page" href="https://github.com/hellofaizan"><i class="bi bi-github"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active socialI" target="_blank" rel="noopener noreferrer" aria-current="page" href="https://www.youtube.com/@HelloFaizan"><i class="bi bi-youtube"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active socialI" target="_blank" rel="noopener noreferrer" aria-current="page" href="https://discord.com/users/890232380265222215"><i class="bi bi-discord"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active socialI" target="_blank" rel="noopener noreferrer" aria-current="page" href="https://twitter.com/HelloFaizandev"><i class="bi bi-twitter"></i></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}


Navbar.defaultProps = {
  title: "Set title here",
}