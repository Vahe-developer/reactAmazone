import React ,{useContext} from 'react';
import "./layout.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Products from '../products/Products'
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'
import Container from '@material-ui/core/Container'
import {UserContext} from "../userContext/userContext"




const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function Layout() {
    const classes = useStyles();

    const context = useContext(UserContext)//useContext ogtagorceluc sa grum enq vorn ir mej parunakum e er mer tvac useStati value-nery
    // const myProducts = context.myProducts//sa mer useState-i popoxakann e vori mej pahum e productnery
    // const setProducts = context.setProducts//sa mer useState-i funlcian e vorov avelacnum enq  productnery
    const {myProducts, setProducts}:any = context//es6






    const handleClick = (index:any)=>{
        if (myProducts.find((element: any) => element.id === Products[index]["id"])===undefined){

            setProducts([
                ...myProducts,
                {...Products[index], quantity: 1,total:Products[index].price}

            ])

        }else{
            alert("hop aper")
        }

    }


    return (

        <div>
            <Container maxWidth="sm">
            <Grid container spacing={3}>
                {
                    Products.map((item,index) => (
                            <Grid  key={item.id} item xs={3}>
                                <Card className={classes.card} key={item.id}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image="https://cnet2.cbsistatic.com/img/e3p4kfIn9ZP68TAeuLVQqwkrcVA=/1092x0/2019/09/16/850d36e0-9bdf-43cf-bef2-31bd5f105924/02-iphone-11-pro-and-iphone-11-max.jpg"
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {item.name}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {item.price}$
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Link style={{textDecoration:"none"}} to={`/product${item.id}`} >Read More</Link>
                                        <Button
                                            variant="contained"
                                            color="default"
                                            endIcon={<AddShoppingCartIcon/>}
                                            onClick={()=>handleClick(index)}

                                        >
                                            Add to
                                        </Button>
                                    </CardActions>
                                </Card>

                            </Grid>
                                ))
                }
            </Grid>


            </Container>


        </div>
    )
}
