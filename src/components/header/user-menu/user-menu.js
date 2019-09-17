import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {StyledMenu, StyledBadge1, useStyles, StyledMenuItem} from './user-menu-style';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToApp from '@material-ui/icons/ExitToApp';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import Person from '@material-ui/icons/Person'
import ShoppingCartIcon  from '@material-ui/icons/ShoppingCart'

  function handleClose() {
    setAnchorEl(null);
  }

const UserMenu = ({username,inCart}) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
      
    function handleClick(event) {
          setAnchorEl(event.currentTarget);
    }
      
    function handleClose() {
          setAnchorEl(null);
    }

    function menuLogoutCLick(){
        console.log("Menu Logout Clicked");
    }

    return(
        <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        color="default"
        onClick={handleClick}
        className={classes.userButton}
      >
        <Person className={classes.leftIcon}/>
         {username}
        <ArrowDropDown className={classes.rightIcon}/>
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.menu}
      >
        <Link to="/profile">
        <StyledMenuItem onClick={handleClose}> 
        <ListItemIcon >
              <Person />
        </ListItemIcon>  
        <ListItemText primary="My profile" />
        </StyledMenuItem> 
        </Link>       
        <Link to="/cart">
        <StyledMenuItem onClick={handleClose}> 
        <ListItemIcon >
              <StyledBadge1 badgeContent={inCart.length} color="primary">
                <ShoppingCartIcon />
              </StyledBadge1>
        </ListItemIcon>  
        <ListItemText primary="Cart" />
        </StyledMenuItem> 
        </Link> 
        <StyledMenuItem onClick={menuLogoutCLick}> 
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
    );
};

const mapStateToProps = (state) => {
  return {
    username: state.username,
    inCart: state.ticketsToBuy
  }
}

export default connect(mapStateToProps)(UserMenu);
