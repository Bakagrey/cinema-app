import React from 'react';
import Typography from '@material-ui/core/Typography';
import Loader from '../loader/loader';
import useStyles from './information-style';

const Information = () => {
    const classes = new useStyles();
    return (
        <div className={classes.container}>
            <Loader className={classes.icon}/>
            <Typography variant="h3" className={classes.madeBy}>SORRY!</Typography>
            <Typography className={classes.author}>This part of my app is under construction</Typography>
        </div>
    );
}

export default Information;