import IconesHeader from '../IconesHeader/index.js';
import Logo from '../Logo/index.js';
import OpcoesHeader from '../Opcoesheader/index.js';
import styled from 'styled-components';


const HeaderContainer = styled.header`
background-color: #fff;
display: flex;
justify-content: center;
`

function Header(){
    return(
         <HeaderContainer>
        <Logo></Logo>
        <OpcoesHeader></OpcoesHeader>
        <IconesHeader></IconesHeader>
        </HeaderContainer>
     
    )
}

export default Header;