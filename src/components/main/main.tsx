import React from 'react';
import styled from 'styled-components';
import Square from './square';


const StyledMain = styled.main`
  height:100vh;
  width:90%;
  margin-right:50px;
  display:flex;
  border-radius:40px;
  background-color:#fff;
  list-style:none
`




const Main: React.FC = () => {
    return(
       <StyledMain>
         <Square  title="price" link="/price" icon="diamond" />
         <Square title="price" link="/price" icon="users-outline" />
         <Square title="price" link="/price" icon="list" />
         <Square title="price" link="/price" icon="folder-open" />             
       </StyledMain>
    )
}

export default Main;