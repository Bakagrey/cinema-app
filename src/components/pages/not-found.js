import React from 'react';
import useStyles from './not-found-style';
import Typography from '@material-ui/core/Typography';
import LocalMovies from '@material-ui/icons/LocalMovies';

const NotFound = () => {
    const classes = new useStyles();
    return (
        <div className={classes.container}>
            <LocalMovies className={classes.icon}/>
            <Typography variant="h3" className={classes.madeBy}>OOOOOPS!</Typography>
            <Typography className={classes.author}>Page not found</Typography>
        </div>
    );
}

export default NotFound;