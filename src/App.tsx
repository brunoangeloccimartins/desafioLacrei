import Cover from './pages/cover/Cover'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/mainpage/MainPage'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle =  createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&display=swap');
  body {
    font-family: 'Nunito', sans-serif;
    margin: 0;
    padding: 0;
    }`

function App() {

  return (
    <>
      <GlobalStyle />
    <Routes>
      <Route path="/" element={<Cover />} />
      <Route path="/desafio" element={<MainPage />} />
    </Routes>
    </>
  )
}

export default App
