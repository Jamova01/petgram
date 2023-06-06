import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate, } from 'react-router-dom'

// Components
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'

// Pages
import { HomePage } from './pages/HomePage'
import { UserPage } from './pages/UserPage'
import { FavoritesPage } from './pages/FavoritesPage'
import { PhotoDetailPage } from './pages/PhotoDetail'
import { NotRegisteredUser } from './pages/NotRegisteredUserPage'
import { Context } from './Context'

// Styles
import { GlobalStyle } from './styles/GlobalStyles'
import { NotFoundPage } from './pages/NotFoundPage'

export const App = () => {
  const { isAuth } = useContext(Context)

  return (
    <div>
      <GlobalStyle />
      <Router>
        <Link to='/'>
          <Logo />
        </Link>
        <Routes>
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path="/pet/:id" element={<HomePage />} />
          <Route path="/login" element={<NotRegisteredUser />} />
          <Route path='/detail/:id' element={<PhotoDetailPage />} />
          <Route path="/user" element={isAuth ? <UserPage /> : <Navigate to='/login' />} />
          <Route path="/favorites" element={isAuth ? <FavoritesPage /> : <Navigate to='/login' />} />
        </Routes>
        <NavBar />
      </Router>
    </div>
  )
}
