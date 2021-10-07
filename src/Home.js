import React from 'react';
import { useSelector } from 'react-redux';
import PrimarySearchAppBar from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
const Home = () =>{
const collapsed = useSelector(store => store.collapsed);
const marginleft = !collapsed ? 270 :80 ;
    return(
    <div className="app-toggled">
    <Sidebar
    collapsed = {false}
    toggled ={false}
    />
        <PrimarySearchAppBar />
        <div className="content-page" >
                <div className="content " style={{position:'fixed', left: marginleft, top:70,transition: 'all 0.3s ', width:'100%', height:'100%', background: '#f8f8fa' }}>
                    <div className="container-fluid"></div>
    <h1>Pagina Inicial</h1>
    <ul>
        <li>teste</li>
    </ul>
    </div>
    </div>
    </div>
    );
}
export default Home;