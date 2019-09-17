import React from 'react';
import Typography from '@material-ui/core/Typography';
import Loader from '../loader/loader';
import useStyles from './other-style';

const Other = () => {
    const classes = new useStyles();
    return (
        <div className={classes.container}>
            <Loader className={classes.icon}/>
            <Typography variant="h3" className={classes.madeBy}>SORRY!</Typography>
            <Typography className={classes.author}>This one too</Typography>
        </div>
    );
}

export default Other;