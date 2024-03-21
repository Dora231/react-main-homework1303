import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div>
      <h1>I am Header</h1>
      <div>
        <Link to={'/'}>Главная страница</Link>
        <Link to={'/Basket'}>Kopзина</Link>
        <Link to={'/AboutUs'}>О нас</Link>



      </div>
    </div>
  )
}
