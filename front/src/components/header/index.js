import React from 'react';
import './header.css';
import { Link } from 'react-router-dom'; 

export default function Header() {
    return (
        <header className="header">
        <nav>
          <ul>
            <li><Link to="/">Listar</Link></li>
            <li><Link to="/cadastrar">Cadastrar</Link></li>
          </ul>
        </nav>
      </header>
    )
}