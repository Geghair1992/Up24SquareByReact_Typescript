import styled from  'styled-components'
import Icon from '../icon/icon';

const Item = styled.li`
 margin-bottom:20px;

 a{
     text-direction:none;
     color:#000;
     text-decoration:none;
 }
`
interface ItemProps {
    title:string
    link:string
    icon:string
}

const SidebarItem: React.FC<ItemProps> = ({title,link,icon}) => {
   return(
       <Item>
           <Icon title={icon} color="#333" size={14}/>
           <a href={link}>{title}</a>
       </Item>
   )
}

export default SidebarItem;