import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MoodBad from '@material-ui/icons/MoodBad';
import useStyles from './error-message-style';

const ErrorMessage = () => {
    const classes = new useStyles();
    return (
        <div className={classes.container}>
            <MoodBad className={classes.icon}/>
            <Typography variant="h3" className={classes.madeBy}>OOOOOPS!</Typography>
            <Typography className={classes.author}>Global error just happened!</Typography>
        </div>
    );
}

export default ErrorMessage;