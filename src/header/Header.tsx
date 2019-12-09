import React, {useContext, useState} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import {UserContext} from '../userContext/userContext'
import {Link} from 'react-router-dom'
import BackButton from '../BackButton/BackButton'
import SearchBar from '../SearchBar/SearchBar'

const StyledBadge1 = withStyles(theme => ({
    badge: {
        right: -3,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 200,
            '&:focus': {
                width: 200,
            },
        },
    },
}));

const Header = () =>  {
    const classes = useStyles();
    const [val,setVal]:any=useState('')

    const context = useContext(UserContext)
    const {myProducts}:any = context//es6

    const handleBasket = (e:any) =>{
        if (window.location.pathname==="/basket"){
            e.preventDefault()

        }

    }
const HandleSearch = (e:any)=>{
    setVal({
        val:e.target.value
    })
}
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar style={{backgroundColor: "#2c2c2c"}} >
                    {BackButton}
                    <Typography className={classes.title} variant="h6" noWrap>
                        Shopping
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={HandleSearch}
                        />
                    </div>

                    {
                        !val.val ? "" :<div  className={"SearchBar"}>
                            <SearchBar name={val}/>
                        </div>


                    }
                      <Link onClick={handleBasket} style={{color:"white"}} to={"/basket"}>
                        <IconButton aria-label="cart" color="inherit">
                            <StyledBadge1 badgeContent={myProducts.length} color="secondary">
                                <ShoppingCartIcon />
                            </StyledBadge1>
                        </IconButton>
                      </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Header
