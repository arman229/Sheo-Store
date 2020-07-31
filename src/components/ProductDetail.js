import React from "react";
import {useParams} from 'react-router-dom'
import {makeStyles} from "@material-ui/core";
import {getShoeDetailById} from '../data/ShoeData'
/*
const MyStyledHeading = styled("h3")({
    backgroundColor: "red",
    color: "yellow",
    padding: 24
});*/


/*const styles = {
    h3: {
        backgroundColor: "green",
        color: "yellow",
        padding: 24
    }
};*/

const useStyles = makeStyles(theme => ({
    h3: {
        backgroundColor: "blue",
        color: "yellow",
        padding: theme.spacing(1)
    },
    div: {},
    img: {
        float: "left"
    }
}));

function ProductDetail() {
    // const {classes} = props;
    const classes = useStyles();
    const {id} = useParams();
    const shoe = getShoeDetailById(id);
    return (
        <div>
            <img className={classes.img} height={400} width={400} src={shoe.image} alt={shoe.title}/>
            <div className={classes.div}>
                <h1>{shoe.title} </h1>
                <strong>Price: {shoe.price} pkr </strong>
                <h3>{shoe.description} </h3>
            </div>

        </div>
    );


}



export default ProductDetail
