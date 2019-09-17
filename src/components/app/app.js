import React from 'react';
import './app.css';
import {Route,Switch} from 'react-router-dom';
import HomePage from '../pages/home';
import ProfilePage from '../pages/profile';
import CartPage from '../pages/cart'
import NotFound from '../pages/not-found';
import Header from '../header/header';
import About from '../about/about';
import useStyles from './app-style';

const App = () => {
    const classes = new useStyles();
      return(
        <div className={classes.container}>
            <Header />            
            <div role="main" className={classes.pageContent}> 
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/profile" component={ProfilePage}/>
                    <Route path="/cart" component={CartPage}></Route>
                    <Route component={NotFound}/>
                </Switch>
            </div>
            <div role="img" className={classes.bottomShine}></div>
            <div role="info" className={classes.infoPanel}>
                <About />
            </div>
       </div>
    );
}

export default App;