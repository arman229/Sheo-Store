import React from "react";
import {useParams} from 'react-router-dom'
import {makeStyles} from "@material-ui/core";
import {getShoeDetailById} from '../data/ShoeData'
import Button from "@material-ui/core/Button/Button";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import ShopIcon from '@material-ui/icons/Shop';


const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 40
    },
    h3: {
        backgroundColor: "blue",
        color: "yellow",
        padding: theme.spacing(1)
    },
    div: {
        boxSizing: "border-box",
        paddingLeft: 40,
        paddingRight: 40,
        display: "inline-block",
        height: 400,
        width: "60%"
    },
    img: {
        float: "right",
        height: 400,
        width: "40%"
    }
}));

function ProductDetail() {
    // const {classes} = props;
    const classes = useStyles();
    const {id} = useParams();
    const shoe = getShoeDetailById(id);
    return (
        <div className={classes.root}>
            <img className={classes.img} src={shoe.image} alt={shoe.title}/>
            <div className={classes.div}>
                <h1>{shoe.title} </h1>
                <strong>Price: {shoe.price} pkr </strong>
                <h3>{shoe.description} </h3>
                <Button variant="contained" color="primary" startIcon={<ShopIcon/>}>Buy</Button>
                <Button style={{marginLeft: 20}} variant="outlined" color="primary" startIcon={<FavoriteBorderIcon/>}>Add
                    to Favourites</Button>
            </div>

        </div>
    );
}


export default ProductDetail
