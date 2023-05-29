import React from 'react'
import { Nav, Link } from './styles'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'
import { useLocation } from 'react-router-dom';

const SIZE = '32px'

export const NavBar = () => {
  const { pathname } = useLocation()

  const setCurrentArea = (path) => {
    return pathname === path ? 'area-current' : ''
  }

  return (
    <Nav>
      <Link to='/' className={setCurrentArea('/')}><MdHome size={SIZE} /></Link>
      <Link to='/favorites' className={setCurrentArea('/favorites')}><MdFavoriteBorder size={SIZE} /></Link>
      <Link to='/user' className={setCurrentArea('/user')}><MdPersonOutline size={SIZE} /></Link>
    </Nav >
  )
}
