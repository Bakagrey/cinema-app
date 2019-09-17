import React,{useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withSnackbar } from 'notistack';
import useStyles from './cinema-room-style';

const checkSit = (arr, row,num,id,date,time) => {
    return arr.filter(c=>c.row === row 
        && c.number === num 
        && c.movie.id === id
        && c.timeDetails.movieDate === date
        && c.timeDetails.movieTime === time).length;
  }
const checkSitBought = (bought,toBuy) => {
    let newBuy = toBuy.slice();
    newBuy = newBuy.filter(c=> checkSit(bought,c.row,c.number,c.movie.id,c.timeDetails.movieDate,c.timeDetails.movieTime) === 0);
    return newBuy;
}
const classSelect = (sitsSelected,row,num,classes,movieSelected,timeDetails,boughtTickets) => {
    return checkSit(boughtTickets,row,num,movieSelected.id,
        timeDetails.movieDate,timeDetails.movieTime) !== 0 ?
        classes.boughtSit :
    checkSit(sitsSelected,row,num,movieSelected.id,
        timeDetails.movieDate,timeDetails.movieTime) === 0 ? 
    classes.sit : 
    `${classes.sit} ${classes.sitSelected}`
}

const Sits = ({row,sitSelect,sitsSelected,movieSelected,timeDetails,boughtTickets}) => {   
    const classes = new useStyles();
    const sitsInRow = new Array(10).fill('');
    return (        
        <div key={`sitsRow_${row}`} className={classes.rowSits}>
            {
                sitsInRow.map((sit,idx)=>{
                    const num = idx+1;
                    return (
                    <div className={classes.sitContainer} key={`sit_container${row}_${num}`}>
                        <div 
                        className={classSelect(sitsSelected,row,num,classes,movieSelected,timeDetails,boughtTickets)} 
                            key={`sit_${row}_${num}`} 
                            onClick={()=>{sitSelect(row,num)}}>

                            </div>
                    </div>)
                })
            }
                      
        </div>
        
    );
  }

const sitSelectHandler = (sitsSelected,sitSelect,r,n, movie,timeDetails) => {
    let newSits = sitsSelected.slice();
    const id = newSits.length === 0 ? 1 : newSits[newSits.length-1].id + 1;
    const idx = newSits.findIndex(c=>c.row === r 
        && c.number === n 
        && c.movie.id === movie.id 
        && c.timeDetails.movieTime === timeDetails.movieTime
        && c.timeDetails.movieDate === timeDetails.movieDate);
    idx === -1 ? newSits.push({id: id,row: r,number: n, movie: movie,timeDetails: timeDetails}) : newSits.splice(idx,1)
    sitSelect(newSits);
}

const CinemaRoom = ({enqueueSnackbar,addToCart,ticketsInCart,movie,timeDetails,boughtTickets}) => {
    const classes = new useStyles();
    const [sitsSelected,sitSelect] = useState(ticketsInCart);
    let rows = new Array(10).fill('');      
        return (
            <div className={classes.roomContainer}>
            {
                rows.map((s,idx)=>{
                    return (
                        <div className={classes.roomRow} key={`row_${idx+1}`}>
                            <div className={classes.rowNumber} key={`first_${idx+1}`}>{idx+1}</div>
                                <Sits 
                                row={idx+1} 
                                movieSelected={movie} 
                                timeDetails={timeDetails} 
                                sitSelect={(r,n)=>{
                                    sitSelectHandler(sitsSelected,sitSelect,r,n,movie,timeDetails);
                                }}
                                sitsSelected={sitsSelected}
                                boughtTickets={boughtTickets}/>
                            <div className={classes.rowNumber}  key={`second_${idx+1}`}>{idx+1}</div>
                            
                        </div>
                    )
                })
            }

                    <Button 
                    className={classes.button} 
                    disabled={sitsSelected.length==0}
                    onClick={()=>{
                        addToCart(checkSitBought(boughtTickets,sitsSelected));
                        enqueueSnackbar('Successfully added to the cart',{
                            variant:'success'
                        });
                    }}
                    >ADD TO CART</Button>

            </div>
        );
};

export default withSnackbar(CinemaRoom);