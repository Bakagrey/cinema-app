import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from './about-style';

const About = () => {
    const classes = new useStyles();
    return (
        <div className={classes.container}>
            <Typography variant="h5" className={classes.madeBy}>MADE BY</Typography>
            <Typography className={classes.author}>Medyantsev Dmitriy</Typography>
        </div>
    );
};

export default About;