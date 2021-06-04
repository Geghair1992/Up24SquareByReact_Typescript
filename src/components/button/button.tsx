import styled from  'styled-components'
import Icon from '../icon/icon';

const StyledButton = styled.button`
  border:none;
  outline:none;
  background-color:#dedede;
  color:#000;
  border-radius:50px;
  display: inline-block;
  padding:6px 12px;
`

interface ButtonProps{
    icon:string
}

const Button: React.FC <ButtonProps> = ({icon}) => {
    return(
        <StyledButton>
           {Icon}
        </StyledButton>

    )
}




export default Button;