import React from 'react';
import Typography from '@material-ui/core/Typography';
import UserMenu from './user-menu/user-menu';
import {Link} from 'react-router-dom';
import useStyles from './header-style';


const Header = () => {
    const classes = new useStyles();
    return (
        <header>
            <div className={classes.topSection}>
                <div className={classes.topSectionLabel}>
                    <Link to="/">
                        <Typography variant="h4">CINEMA <br /> APP</Typography>
                    </Link>
                    
                </div>
                <div className={classes.topSectionUser}><UserMenu /></div>
            </div> 
        </header>
    );
};

export default Header;