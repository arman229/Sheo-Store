import React from 'react';
import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import Aboutus from "./components/Aboutus";
import ShoeList from "./components/ShoeList";
import {makeStyles} from "@material-ui/core/styles";
import ProductDetail from "./components/ProductDetail";

function App() {
    const useStyles = makeStyles((theme) => ({
            toolbarMargin: theme.mixins.toolbar,
            container: {
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",

            }
        }
    ));
    const classes = useStyles();
    return (
        <Router>
            <NavigationBar/>
            <div className={classes.toolbarMargin}/>
            <div className={classes.container}>
                <Switch>
                    <Route path="/mens">
                        <ShoeList category="mens"/>
                    </Route>
                    <Route path="/womens">
                        <ShoeList category="womens"/>
                    </Route>
                    <Route path="/kids">
                        <ShoeList category="kids"/>
                    </Route>

                    <Route path="/aboutus">
                        <Aboutus/>
                    </Route>
                    <Route path="/home">
                        <Home/>
                    </Route>
                    <Route path="/product/:id">
                        <ProductDetail/>
                    </Route>
                    <Redirect from="/" to="/home"/>
                    <Route path="*" render={() => <h1>Not Found</h1>}/>

                </Switch>
            </div>

        </Router>


    );

}


export default App;
