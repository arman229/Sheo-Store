import React from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {NavLink} from "react-router-dom";
import "../App.css"

function NavigationBar() {
    const useStyles = makeStyles((theme) => ({
        title: {
            marginLeft: "8%",
            flex:0.8

        },
        ul: {
            listStyleType: "none",
            padding: 0,
            margin: 0,
            float: "left",
        },
        li: {
            float: "left"
        },
        aActive:{
            backgroundColor:"darkBlue",
        }
    }));
    const styles = useStyles();
    return (
        <AppBar position={"fixed"}>
            <Toolbar>
                <Typography variant={"h5"} className={styles.title}>Shoe Store</Typography>
                <nav>
                    <ul className={styles.ul}>
                        <li className={styles.li}><NavLink to="/home" activeClassName={styles.aActive}>Home</NavLink></li>
                        <li className={styles.li}><NavLink to="/mens" activeClassName={styles.aActive}>Mens</NavLink></li>
                        <li className={styles.li}><NavLink to="/womens" activeClassName={styles.aActive}>Womens</NavLink></li>
                        <li className={styles.li}><NavLink to="/kids" activeClassName={styles.aActive}>Kids</NavLink></li>
                        <li className={styles.li}><NavLink to="/aboutus" activeClassName={styles.aActive}>About Us</NavLink></li>
                    </ul>
                </nav>

            </Toolbar>

        </AppBar>
    )
}

export default NavigationBar