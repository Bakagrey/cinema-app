import React from 'react';
import { withStyles,makeStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Badge from '@material-ui/core/Badge';

const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })(props => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));

  const StyledBadge1 = withStyles(theme => ({
    badge: {
      right: -3,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);
  
  const useStyles = makeStyles(theme => ({
    rightIcon: {
      marginLeft: theme.spacing(1),
      color: '#f5821e'
    },
    leftIcon: {
        marginRight: theme.spacing(1),
      color: '#f5821e'
    },
    userButton: {
        color: 'white'
    },
    menu:{
      '& a': {
        textDecoration: 'none',
        color: 'rgba(0, 0, 0, 0.87)'
      }
    }
  }));
  const StyledMenuItem = withStyles(theme => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);

  export {
    StyledMenu,
    StyledBadge1,
    useStyles,
    StyledMenuItem
  }