import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import {Link} from "react-router-dom";
import '../App.css'
import {getShoeByCategory} from '../data/ShoeData.js'

/*const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    card: {
        backgroundColor: "red"
    },
    media: {
        height: 270,
    },

});*/


export default function ShoeList(props) {

    // const classes = useStyles();
    const  shoes=getShoeByCategory(props.category);
    return (
        <div className="container">
            <GridList cellHeight={180} cols={4} spacing={40}>
                {
                    shoes.map((item) => (
                        <GridListTile key={item.shoeId} component={Link} to={`product/${item.shoeId}`}>
                            <img src={item.image} alt={item.title}/>
                            <GridListTileBar
                                title={item.title}
                                subtitle={<span>Price: {item.price}</span>}
                            />
                        </GridListTile>

                    ))
                }

            </GridList>
        </div>
    )
}




















