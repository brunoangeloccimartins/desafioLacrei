import styled from 'styled-components'
import photo from '../../assets/908daec91429a7262777545c785e90da.jpeg'
import logo from '../../assets/Logo Lacrei Saúde - novo.svg'
import buttonScrollUp from '../../assets/Bounding box.svg'
import logoRedes from '../../assets/Logo+redes.svg'

function MainPage() {

  const Main = styled.main`
  margin: 0;
  padding: 0;
  max-width: 100%;
  font-family: 'Nunito';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `
  const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `

  const Header = styled.header`
  height: 80px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  `
  const ButtonContainer = styled.div`
  display: flex;
  `

  const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  `

  const HeaderButton = styled.button<{$primary?: boolean}>`
  background: ${props => props.$primary ? '#018762' : 'white'};
  color: ${props => props.$primary ? 'white' : '#018762'};
  border: ${props => props.$primary ? 'none' : 'white'};
  box-shadow: ${props => props.$primary ? '0px 5px 10px 0px #0000004D' : 'none'};
  font-size: 1em;
  font-weight: bold;
  margin: 5px;
  padding: 10px 32px 10px 32px;
  border-radius: 8px;
  `

  const QuemSomosButton = styled(HeaderButton)`
  margin-right: 50px;
`;

  const Body = styled.body`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 48px;
  margin-left: 100px;
  margin-right: 100px;
  `

  const BodyButton = styled.button<{$primary?: boolean}>`
  background: ${props => props.$primary ? '#018762' : 'white'};
  color: ${props => props.$primary ? 'white' : '#018762'};
  border: ${props => props.$primary ? 'none' : '2px solid #018762'};
  box-shadow: 0px 5px 10px 0px #0000004D;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  margin: 5px;
  padding: 10px 32px 10px 32px;
  border-radius: 8px;
  width: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  `

  const BodyTitle = styled.h1`
  width: 488px;
  height: 115px;
  text-align: left;
  font-size: 48px;
  wrap: wrap;
  `

  const BodyP = styled.p`
  text-align: left;
  font-size: 24px;
  line-height: 36px;
  font-weight: 400;
  `

  const BodyTextContainer = styled.div`
  margin-right: 226px;
  width: 488px;
  height: 330px;
  `

  const BodyImgContainer = styled.div`
  width: 400px;
  height: 491px;
  `

  const BodyImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  overflow: hidden;
  `
  const Retangle = styled.div`
  width: 160px;
  height: 2px;
  background-color: #018762;
  `

  const RetangleFooter = styled.div`
  margin-top: 48px;
  width: 100%;
  height: 2px;
  background-color: #B2DFD0;
  `

  const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-top: 48px;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  line-height: 24px;
  min-height: 200px;
  gap: 24px;
`;

const FooterLink = styled.a`
  color: #2D2D2D;
  line-height: 24px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const FooterButton = styled.button`
  background: white;
  color: #018762;
  border: 2px solid #018762;
  font-size: 1em;
  font-weight: bold;
  margin: 5px;
  padding: 10px 12px 10px 12px;
  border-radius: 8px;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
    &:hover {
      background-color: #016049;
      color: white;
    }
  `

  const FooterImgContainer = styled.div`
  height: 100%;
  `

  const FooterComplement = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  `

  const FooterComplementContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterTextContainer = styled.div`
  flex: 1;
  margin-right: 240px;
`;

const FooterButtonContainer = styled.div`
  margin-left: auto;
`;

const CopyrightContainer = styled.div`
  width: 90%;
  margin-top: 48px;
  padding: 16px 0;
  text-align: left;
  margin-top: 48px;
  margin-bottom: 48px;
  font-size: 14px;
  color: #2D2D2D;
`;

  return(
    <Main>
      <MainDiv>
    <Header>
      <LogoContainer>
      <img src={logo} alt="Logo Lacrei Saúde" />
      </LogoContainer>
      <ButtonContainer>
      <QuemSomosButton>Quem Somos</QuemSomosButton>
      <div>
      <HeaderButton>Ajuda</HeaderButton>
      <HeaderButton $primary>Entrar</HeaderButton>
      </div>
      </ButtonContainer>
    </Header>
    <Body>
      <BodyTextContainer>
    <BodyTitle>Junte-se à <br/> nossa comunidade</BodyTitle>
    <Retangle></Retangle>
    <BodyP>Encontre atendimento clínico de qualidade ou entre para o nosso time de profissionais da Lacrei Saúde.</BodyP>
    <ButtonContainer>
    <BodyButton $primary>Buscar Atendimento</BodyButton>
    <BodyButton>Oferecer Atendimento</BodyButton>
    </ButtonContainer>
      </BodyTextContainer>
      <BodyImgContainer>
    <BodyImg src={photo}/>
      </BodyImgContainer>
    </Body>
    <RetangleFooter></RetangleFooter>
    <Footer>
      <FooterContainer>
        <FooterImgContainer>
        <img src={logoRedes} alt="Redes sociais" style={{ width: '100%', height: '100%' }} />
        </FooterImgContainer>
      </FooterContainer>
      <FooterContainer>
        <h3>Lacrei Saúde</h3>
        <FooterLink href="">Quem Somos</FooterLink>
        <FooterLink href="">Nosso Propósito</FooterLink>
        <FooterLink href="">Missão, Visão e Valor</FooterLink>
        <FooterLink href="">Acessibilade</FooterLink>
        </FooterContainer>
      <FooterContainer>
        <h3>Saúde</h3>
        <FooterLink href="">Buscar atendimento</FooterLink>
        <FooterLink href="">Oferecer atendimento</FooterLink>
        </FooterContainer>
      <FooterContainer>
        <h3>Segurança e privacidade</h3>
        <FooterLink href="">Política e Privacidade</FooterLink>
        <FooterLink href="">Termos de Uso</FooterLink>
        <FooterLink href="">Direitos de Titular</FooterLink>
        </FooterContainer>
    </Footer>
    <RetangleFooter></RetangleFooter>
    <FooterComplement>
      <FooterComplementContainer>
  <FooterTextContainer>
    <p>A Lacrei não oferece tratamento médico emergencial. Em caso de emergência procure o hospital mais próximo. </p>
    <p>Em caso de problemas psicológicos, ligue para 188 (CVV) ou acesse o site www.cvv.org.br</p>
  </FooterTextContainer>
  <FooterButtonContainer>
    <FooterButton onClick={handleScrollToTop}>
      <img src={buttonScrollUp} alt="" />
    </FooterButton>
  </FooterButtonContainer>
      </FooterComplementContainer>
  <CopyrightContainer>
    <p style={{fontSize:'14px'}}>Copyright © 2021 Lacrei. Todos os direitos reservados. CNPJ: 51.265.351/0001-65</p>
  </CopyrightContainer>
</FooterComplement>
      </MainDiv>
    </Main>
  )
}

export default MainPage