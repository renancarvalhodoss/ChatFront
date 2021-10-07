import { ArrowBack, ArrowForward, ContactlessRounded, Dashboard } from '@material-ui/icons';
import { useState } from 'react';

import { 
    ProSidebar, 
    Menu, 
    MenuItem, 
    SubMenu, 
    SidebarHeader, 
    SidebarFooter, 
    SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/logo3.png';

const Sidebar = () =>{
const collapsed = useSelector( store => store.collapsed);

    return(
        
<ProSidebar style={{position:'absolute'}}
   collapsed = {collapsed}
   breakPoint = "md"
  
>
    
<SidebarHeader  >
    <div style={{height: 100}}>
  <img src={Logo} alt="" height='90px' style={{
      display:'inline-block',
      marginTop:'30px',
      marginBottom:'30px',
              height: '40px',
              width: '50%',
              objectFit: 'contain'
            }} /> <h2 style={{display:'inline-block', position:'absolute', left:'36%',top:35, color:'white'}}>webChat</h2>
            </div>
  </SidebarHeader>

  <SidebarContent>
  <Menu iconShape="circle">
    <MenuItem icon={<Dashboard />}>Dashboard</MenuItem>
    <SubMenu title="Components" icon={<ContactlessRounded />}>
      <MenuItem><NavLink to="/"  activeStyle={{
              fontWeight: "bold",
              color: "white"
            }} >Component 1</NavLink></MenuItem>
      <MenuItem><NavLink to="/registro"  activeStyle={{
              fontWeight: "bold",
              color: "white"
            }} >Cadastrar</NavLink></MenuItem>
    </SubMenu>
  </Menu>
  </SidebarContent>
  <SidebarFooter>
<div>rodapé</div>
  </SidebarFooter>
</ProSidebar>


    );
};

export default Sidebar;
