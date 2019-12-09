import React, {useContext} from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Products from '../products/Products'
import AddShoppingCartIcon from '@material-ui/core/SvgIcon/SvgIcon'
import {makeStyles} from '@material-ui/core'
import Container from '@material-ui/core/Container';
import {UserContext} from '../userContext/userContext'
import BackButton from '../BackButton/BackButton'



const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const SelectedProduct = ()=>{
    const classes = useStyles();
    const url:any = window.location.href;
    const id = url.substring(url.lastIndexOf('/') + 8);
    const result = Products.filter(word => word.id === Number(id));
    const context = useContext(UserContext)
    const {myProducts, setProducts}:any = context//es6
    const handleClick = (index:any)=>{
        if (myProducts.find((element: any) => element.id === Products[index]["id"])===undefined){
            setProducts([
                ...myProducts,
                {...Products[index], quantity: 1,total:Products[index].price}
            ])
        }else{
            alert("Duq arden avelacrel eq zambyuxum")
        }
    }
    return(
        <div>
            {BackButton}
            <Container maxWidth="sm">

                {
                    result.map((item,index) => (
                            <Card className={classes.card} key={item.id}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://icdn3.digitaltrends.com/image/digitaltrends/iphone-11-pro-max-rear-full-rear.jpg"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {item.price}$
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button
                                        onClick={()=>handleClick(index)}
                                        variant="contained"
                                        color="default"
                                        endIcon={<AddShoppingCartIcon/>}
                                    >

                                        Add to Cart
                                    </Button>

                                </CardActions>
                            </Card>
                    ))
                }
                    </Container>
        </div>

            )


}



export default SelectedProduct
