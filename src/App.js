import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { HomePage } from './pages/HomePage';
import { PhotoDetail } from './pages/PhotoDetail';

export const App = () => {

  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/photos/:id' element={<PhotoDetail />} />
        </Routes>
      </Router>
    </div>
  )

}
