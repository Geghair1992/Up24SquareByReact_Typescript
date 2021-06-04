import styled from  'styled-components'
import Icon from '../icon/icon';



const StyledSquare = styled.div`
  height:150px;
  width:200px;
  border-radius:20px;
  background-color:#000;
  margin:50px;
  a{
    text-decoration:none;
    list-style:none;
    color:#fff;
    padding:50px
  }
`
const StyledIcon = styled.span`
  margin:20px;
  display:block;
  color:#fff;
  border:#fff 1px solid;
  border-radius:20px  
`

interface SquareProps{
  title:string
  link:string
  icon:string
}

const Square: React.FC<SquareProps> = ({title,link,icon}) => {
    return(
        <StyledSquare>
            <StyledIcon>
                 <Icon title={icon} color="#fff" size={30} />
            </StyledIcon>
                 <a href={link}>{title}</a>
        </StyledSquare>
              
       
    )
}

export default Square;