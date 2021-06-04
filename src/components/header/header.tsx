import styled from  'styled-components'

const StyledHeader = styled.header`
  padding:20px;  
  height:70px;
  background-color:#dedede;
  display: flex;
  justify-content:space-between;
  align-items:center;
   
`

const Title = styled.h2`
    color:#000;
    font-size:1.5em
`    


const Name = styled.h3`
    color:#000;
    font-size:1.2em;
`


interface HeaderProps {
    title:string
    name:string
}

const Header: React.FC <HeaderProps> = ({title,name}) =>{
    return(
        <StyledHeader>
           <Title>{title}</Title>
           <Name>{name}</Name>
        </StyledHeader>
     
    )
}

export default Header;