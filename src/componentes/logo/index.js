import logo from '../../imagens/logo.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`

const LogoImage = styled.img`
    margin-right: 10px;
`

function Logo() {
    return (    
        <LogoContainer>
            <LogoImage 
                src={logo} 
                alt='Logo'
            />
            <p><strong>Alura Books</strong></p>
        </LogoContainer>
    )
}

export default Logo