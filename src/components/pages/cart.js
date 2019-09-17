import React,{useState} from 'react';
import {connect} from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import useStyles from './cart-style';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Delete  from '@material-ui/icons/Delete';
import { withSnackbar } from 'notistack';

const checkSelectedItems = (items,id) => {
    const idx = items.findIndex(c=> c === id);    
    if(idx >= 0)
        return true;
    return false;
}

const selectAll = (items,itemsChecked,checkId) => {
    if(itemsChecked.length>0){
        checkId([]);
    }
    else {
        let newItems = items.slice();
        newItems = newItems.map(c=> c.id);
        checkId(newItems);
    }
}

const handleChange = (items, id,checkId) => {
    const newItems = items.slice();
    const idx = newItems.findIndex(c=> c === id);   
    if(idx >= 0) {
        newItems.splice(idx,1);
    }
    else {
        newItems.push(id);
    }
    checkId(newItems);
}

const removeFromCart = (items,tickets,cartChange) => {
    let newTickets = tickets.slice();
    newTickets = newTickets.filter(c=>!items.includes(c.id));
    cartChange(newTickets);
}

const buyTickets = (items,tickets,cartChange,buyTicketsFromCart,enqueueSnackbar,boughtTickets) => {

    let newTickets = tickets.slice();
    newTickets = newTickets.filter(c=>items.includes(c.id));
    newTickets = boughtTickets.concat(newTickets);
    buyTicketsFromCart(newTickets);
    removeFromCart(items,tickets,cartChange);
    enqueueSnackbar('Payment confirmed!',{
        variant: 'success',
    })
}

const CartPage = ({tickets,cartChange,buyTicketsFromCart,enqueueSnackbar,boughtTickets}) => {  
    const classes = new useStyles();
    const [checkedIds,checkId] = useState([]);
    return(
       <div className={classes.cartWrapper}>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <td>
                            <Typography className={classes.tableItem}>MOVIE</Typography>                            
                        </td>
                        <td>
                        <Typography className={classes.tableItem}>DATE</Typography>   
                        </td>
                        <td>
                        <Typography className={classes.tableItem}>SIT</Typography>   
                        </td>
                        <td>
                        <Typography className={classes.tableItem}>COST</Typography>   
                        </td>
                        <td>
                        <Checkbox    
                        color="primary"
                        onChange={()=>{selectAll(tickets,checkedIds,checkId)}}               
                        inputProps={{
                        'aria-label': 'secondary checkbox',
                        }}
                        />
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        tickets.map((ticket,idx)=>{
                            return <tr key={idx} className={classes.movieRow}>
                                <td>
                                <Typography className={classes.tableItem}> {ticket.movie.name}</Typography>
                                </td>
                                <td>
                                <Typography className={classes.tableItem}> {`${ticket.timeDetails.movieDate} (${ticket.timeDetails.movieTime})`}</Typography>
                                </td>
                                <td>
                                <Typography className={classes.tableItem}> {`${ticket.row} row ${ticket.number} sit`}</Typography>
                                </td>
                                <td>
                                <Typography className={classes.tableItem}> 5$</Typography>
                                </td>
                                <td className={classes.checkBox}>
                                <Checkbox  
                                checked={checkSelectedItems(checkedIds,ticket.id)}
                                onChange={() => {handleChange(checkedIds,ticket.id,checkId)}}
                                color="primary"                      
                                inputProps={{
                                'aria-label': 'secondary checkbox',
                                }}
                                />
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>    
            <div className={classes.buttonsWrapper}> 
                <Button 
                className={classes.button} 
                onClick={() => {buyTickets(checkedIds,tickets,cartChange,buyTicketsFromCart,enqueueSnackbar,boughtTickets)}} 
                variant="contained" 
                color="primary" 
                disabled={checkedIds.length === 0}
                >BUY</Button>
                <Button 
                className={classes.buttonRemove} 
                onClick={() => {removeFromCart(checkedIds,tickets,cartChange)}} 
                variant="contained" 
                color="secondary" 
                disabled={checkedIds.length === 0}>
                    <Delete />
                </Button>
            </div>
       </div>
    );
}

const mapStateToProps = ({ticketsToBuy,boughtTickets}) => {
    return {
        tickets:ticketsToBuy,
        boughtTickets:boughtTickets
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        cartChange: (itemsInCart) => {
            dispatch({
                type: 'TICKETS_ADD_TO_CART',
                value: itemsInCart
            });
        },
        buyTicketsFromCart: (tickets) => {
            dispatch({
                type: 'TICKETS_BUY',
                value: tickets
            });
        }
    }
}

export default withSnackbar(connect(mapStateToProps, mapDispatchToProps)(CartPage));