import React from "react";
import Carousel from "react-material-ui-carousel";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import Card from "@material-ui/core/Card/Card";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import CardContent from "@material-ui/core/CardContent/CardContent";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";

const usesSyles = makeStyles((theme) => ({
    mainDiv: {
        marginTop: 100
    },
    footer: {
        backgroundColor: "darkgrey",
        height: "200",

    },
    activeProb: {
        backgroundColor: "red"
    },
    media: {
        height: 200,
    },
}));
const banners = [
    "https://cdn.shopify.com/s/files/1/0055/5525/7462/files/1400-x-715_jpg_1800x.jpg?v=1592498159",
    "https://cdn.shopify.com/s/files/1/0055/5525/7462/files/Women_Main-Banner_WEB_1800x.jpg?v=1592212779",
    "https://cdn.shopify.com/s/files/1/0055/5525/7462/files/Web-Banner-Kids-selected-11_jpg_1800x.jpeg?v=1592225517",
    "https://cdn.shopify.com/s/files/1/0055/5525/7462/files/website_banner_1800x.jpg?v=1594894068"

];

function Home() {
    const classes = usesSyles();
    return (
        <div>
            <Carousel interval={2000} navButtonsAlwaysVisible={true}>
                {
                    banners.map((item, i) => <Item key={i} item={item}/>)
                }
            </Carousel>
            <br/>
            <Typography variant="h4">Categories</Typography>
            <hr/>
            <br/>
            <Grid container spacing={10}>
                <Grid item xs={12} sm={4} md={4}>
                    <Card>
                        <CardActionArea component={Link} to="/mens">
                            <CardMedia
                                className={classes.media}
                                image="https://image.made-in-china.com/202f0j00KwjTMPZdQGrm/Mens-Shoes-Loafer-Casual-Leather-Suede-Shoes-Men-s-Loafer-Shoes.jpg"
                                title="Mens Collection"/>

                            <CardContent>
                                <Typography variant={"h5"}>Mens</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Card>
                        <CardActionArea component={Link} to="/womens">
                            <CardMedia
                                className={classes.media}
                                image="https://www.unze.com.pk/media/catalog/product/cache/1/thumbnail/600x600/9df78eab33525d08d6e5fb8d27136e95/L/2/L29996.jpg"
                                title="Womens Collection"/>
                            <CardContent>
                                <Typography variant={"h5"}>Womens</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Card>
                        <CardActionArea component={Link} to="/kids">
                            <CardMedia
                                className={classes.media}
                                image="https://static-01.daraz.pk/p/f2ade2ef7d2dcfe7f22dce6ae9b64cb4.jpg_340x340q80.jpg_.webp"
                                title="Kids Collection"/>
                            <CardContent>
                                <Typography variant={"h5"}>Kids</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
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