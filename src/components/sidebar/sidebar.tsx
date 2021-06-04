import React from 'react';
import styled from 'styled-components';
import Button from '../button/button';
import SidebarItem from './sidebarItem';


const Aside = styled.aside`
  width:10%;
  
  
  @media only screen and (max-width:768px){
    width:100%
  }
  
`
const SidebarList = styled.ul` 
 display:flex;
 flex-direction:column;
 background_color:#dedede;
 justify-content: flex-start;
 padding:50px;
 list-style:none
`

const items = [
  {
    title:'Dashboard',
    link:'/',
    icon:'list'
  },
  {
    title:'Products',
    link:'/products',
    icon:'diamond'
  },
  {
    title:'Users',
    link:'/users',
    icon:'users-outline'
  },
  {
    title:'Carts',
    link:'/carts',
    icon:'folder-open'
  },
  {
    title:'LogOut',
    link:'/logout',
    icon:'folder-open-empty'
  },

];




const Sidebar: React.FC  = () => {
    return(
        <Aside>
          <SidebarList>
               {
                 items.map(item=>{
                   return(
                     <SidebarItem title={item.title} link={item.link} icon={item.icon} />
                   )
                 })
               }
          </SidebarList>   
          <Button icon="Log Out"/>       
        
        </Aside>
    )
}

export default Sidebar;