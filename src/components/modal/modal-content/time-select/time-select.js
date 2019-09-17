import React,{useState} from 'react';
import NavigationTab from "../../../styled-tabs/styled-tabs";
import useStyles from './time-select-style';
import Typography from '@material-ui/core/Typography';

const TimeSelect = ({days, tabClick, timeClick, times}) => {
    const classes = new useStyles();
    
    
    return(
        <div>
            <NavigationTab tabClick={tabClick} itemsArray={days}/>
            <div className={classes.timeWrapper}>
                {
                    times.map(time=>{
                        return <Typography 
                        className={classes.time} 
                        key={time.id} 
                        onClick={()=>{
                            timeClick(time.time)}}>
                            {time.time} <br />
                            {time.cost}
                        </Typography>
                    })
                }
            </div>
        </div>
    );
};

export default TimeSelect;