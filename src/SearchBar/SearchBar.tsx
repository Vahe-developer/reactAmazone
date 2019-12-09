import React, {useEffect, useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Products from '../products/Products'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}))


export default function SearchBar(props: any) {
    const classes = useStyles()
    const found: any = Products.filter(element => element.name.includes(props.name.val))
    const [filter, setFilter] = useState([])
    const [close,setClose] = useState(true)

    useEffect(() => {
        setFilter(found)
    }, [props])

    const closeSearchBar = () => {
        setFilter([])
    }
    window.onclick = function() {
       setClose(false)
    }
    return (
        <List style={{backgroundColor: 'rgb(44, 44, 44)', display: filter.length > 0 && close? 'block' : 'none'}}
              className={classes.root}>
            {
                filter.length > 0 ? filter.map((item: any) => (

                    <ListItem className={"zoom modal"} key={item.id} alignItems="flex-start">
                        <Link onClick={closeSearchBar} style={{textUnderlineOffset: 'none', textDecoration: 'none'}}
                              to={`/product${item.id}`}>
                            <ListItemAvatar>
                                <Avatar alt="Cindy Baker"
                                        src="https://mobilestoreonline.com/wp-content/uploads/2019/09/iphone-11-pro-max-essential-crown-rose-gold.jpg"/>
                            </ListItemAvatar>
                            <ListItemText
                                style={{color: 'white'}}
                                primary={item.name}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            style={{color: 'white'}}
                                        >
                                            {/*{item.description}*/}
                                        </Typography>
                                    </React.Fragment>
                                }

                            />
                            <hr
                                style={{
                                    color: 'white',
                                    backgroundColor: 'grey',
                                    width: '260px'
                                }}
                            />
                        </Link>
                    </ListItem>


                )) : null


            }
            <Divider variant="inset" component="li"/>
        </List>
    )
}









