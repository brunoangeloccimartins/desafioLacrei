import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from '../../assets/LOGO_LACREI.svg'
import background from '../../assets/Background.png'



function Cover() {

  const Main = styled.main`
  width: 100%;
  height: 100%;
  max-width: 100%;
  min-height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  font-family: 'Nunito';
  display: flex;
  justify-content: center;
  align-items: center;
  `

  const MainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `

  const MainButton = styled.button`
  background: #018762;
  color: white;
  border: none;
  box-shadow: 0px 5px 10px 0px #0000004D;
  font-size: 1em;
  font-weight: bold;
  margin: 5px;
  padding: 10px 32px 10px 32px;
  border-radius: 8px;
  &:hover {
    background: #016f57;
  }
  &:active {
    box-shadow: none;
  }
  `
  const MainText = styled.p`
  font-size: 1.5em;
  `

  const navigate = useNavigate();
  const routeChange = () =>{
    const path = `/desafio`; 
    navigate(path);
  }

  return(
    <Main>
      <MainTextContainer>
      <h1>Desafio Lacrei Saúde</h1>
      <MainText>Desafio feito utilizando React, Typescript e Styled-Components.</MainText>
      <MainButton onClick={routeChange} test-id = 'MainButton'>Desafio</MainButton>
      </MainTextContainer>
      <img src={logo} alt="Logo Lacrei Saúde" />
    </Main>
  )
}

export default Cover