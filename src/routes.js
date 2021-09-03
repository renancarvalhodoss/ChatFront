import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated } from './auth';
import Home from './Home';
import Login from './Login/Login';
import Registro from './Login/Registro';


const PrivateRoute = ({ component: Component, ...rest }) =>(
    <Route {...rest} render={ props =>(
        isAuthenticated()?( <Component {...props}/>) : (<Redirect to={{pathname:'/login', state: {from: props.location} }}/>)
     )}/>
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={()=> <Login/>} />
            <Route exact path="/registro" component={()=> <Registro/>} />
            <PrivateRoute exact path="/" component={()=> <Home />}/>

        </Switch>
    </BrowserRouter>
);

export default Routes;