import React, {useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {UserContext} from '../userContext/userContext';
import DeleteIcon from '@material-ui/icons/Delete';
import BuyModal from '../BuyModal/BuyModal'


const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
});



export default function Bascet() {
    const classes = useStyles();
    const context = useContext(UserContext)
    const {myProducts, setProducts}:any = context//es6


    const removeProduct = (id:any)=>{
        setProducts(myProducts.filter((product:any) => (product["id"] !== id)))
    }



const  plus =(index:any)=>{

        if(myProducts[index].quantity>0){
            const firstPrice:any = myProducts[index].price
            myProducts[index].quantity+= 1
            myProducts[index].total =firstPrice*  myProducts[index].quantity
            setProducts([...myProducts])
        }else {
            return null
        }


}
const  minus =(index:any)=>{

    if(myProducts[index].quantity>1){
        const firstPrice:any = myProducts[index].price
        myProducts[index].quantity -= 1
        myProducts[index].total =firstPrice*  myProducts[index].quantity
        setProducts([...myProducts])
    }else {
        return null
    }

}




    let roots = myProducts.map(function(num:any) {
        return num.total
    });

    let sum = 0;
    for (let i = 0;i<roots.length;i++){
        sum+=roots[i]
    }

   const Buy = () =>{

        setProducts([])
   }


    return (
        <Paper className={classes.root}>
            <Table className={classes.table} aria-label="caption table">
                <caption>
                    <span style={{fontWeight:'bold'}}>Total Price:{sum}</span>

                    <span style={{float: 'right'}} onClick={Buy}>
                            <BuyModal/>
                    </span>

                </caption>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Description</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Tag</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Total</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {myProducts.map((row:any,index:number) => (

                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.description}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right">{row.tag}</TableCell>
                            <TableCell align="right">{myProducts[index].quantity}
                                <button onClick={()=>plus(index)}>+</button>
                                <button onClick={()=>minus(index)}>-</button></TableCell>
                            <TableCell align="right">{row.total}</TableCell>
                            <TableCell align="right"><DeleteIcon  onClick={()=>removeProduct(row.id)}/></TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </Paper>
    );
}
