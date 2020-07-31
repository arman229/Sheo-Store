import React from "react";
import Carousel from "react-material-ui-carousel";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {Link} from "react-router-dom";

/*const usesSyles = makeStyles((theme) => ({
    mainDiv: {
        marginTop: 100
    },
    footer:{
        backgroundColor:"darkgrey",
        height:"200",

    }
}));*/
const banners = [
    "https://cdn.shopify.com/s/files/1/0055/5525/7462/files/1400-x-715_jpg_1800x.jpg?v=1592498159",
    "https://cdn.shopify.com/s/files/1/0055/5525/7462/files/Women_Main-Banner_WEB_1800x.jpg?v=1592212779",
    "https://cdn.shopify.com/s/files/1/0055/5525/7462/files/Web-Banner-Kids-selected-11_jpg_1800x.jpeg?v=1592225517",
    "https://cdn.shopify.com/s/files/1/0055/5525/7462/files/website_banner_1800x.jpg?v=1594894068"

];

function Home() {
    // const classes = usesSyles();
    return (
        <div>
            <Carousel  >
                {
                    banners.map((item, i) => <Item key={i} item={item}/>)
                }
            </Carousel>
            <Typography variant="h4">Categories</Typography>
            <hr/>
            <Grid container spacing={10}>
                <Grid item xs={12} sm={4} md={4}>
                    <Paper>
                        <Link to="/mens">
                            <img
                                src="data:image/jpeg;base64,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"
                                height="200" width="100%" alt="Mens Collection"/>
                            <Typography  variant={"h5"}>Mens</Typography>
                        </Link>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Paper>
                        <Link to="/womens">

                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFLF9ticoJV6F5qNEysQs_Ssj2i9KICrkBOg&usqp=CAU"
                                height="200" width="100%" alt="Womens Collection"/>
                            <Typography  variant={"h5"}>Womens</Typography>

                        </Link>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Paper>
                        <Link to="/kids">
                            <img
                                src="https://i.pinimg.com/originals/d5/e8/b3/d5e8b309ec10147d4e5d2f8d65d1915f.jpg"
                                height="200" width="100%" alt="Kids Collection"/>
                            <Typography  variant={"h5"}>Kids</Typography>
                        </Link>
                    </Paper>
                </Grid>
            </Grid>

        </div>
    )
}


function Item(props) {
    const useStyles = makeStyles((theme) => ({
        img: {
            height: "400px",
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block"
        }
    }));

    const styles = useStyles();
    return (
        <>
            <img src={props.item} className={styles.img} alt="Crousal img"/>
        </>
    )
}

export default Home