import React, { Suspense, lazy, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'

// Context
import { Context } from './Context'

// Components
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'

// Styles
import { GlobalStyle } from './styles/GlobalStyles'
import { NotFoundPage } from './pages/NotFoundPage'

// Pages
const HomePage = lazy(() => import('./pages/HomePage'))
const UserPage = lazy(() => import('./pages/UserPage'))
const FavoritesPage = lazy(() => import('./pages/FavoritesPage'))
const PhotoDetailPage = lazy(() => import('./pages/PhotoDetail'))
const NotRegisteredUser = lazy(() => import('./pages/NotRegisteredUserPage'))

export const App = () => {
  const { isAuth } = useContext(Context)

  return (
    <div>
      <GlobalStyle />
      <Router>
        <Link to='/'>
          <Logo />
        </Link>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='*' element={<NotFoundPage />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/pet/:id' element={<HomePage />} />
            <Route path='/login' element={<NotRegisteredUser />} />
            <Route path='/detail/:id' element={<PhotoDetailPage />} />
            <Route path='/user' element={isAuth ? <UserPage /> : <Navigate to='/login' />} />
            <Route path='/favorites' element={isAuth ? <FavoritesPage /> : <Navigate to='/login' />} />
          </Routes>
        </Suspense>
        <NavBar />
      </Router>
    </div>
  )
}
