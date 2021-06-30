import React,{ useState,useEffect} from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "./../../assests/Pak-Group-logo-1.png";
import { getToken, onMessageListener } from "./../../firebase";

import { connect } from "react-redux";
import { signOut } from "../../modules/Auth/actions";
import {
  IconButton,
  Tooltip,
  Button,
  Avatar,
  makeStyles,
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory, Link } from "react-router-dom";
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';

import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import NotificationList from "../notificatons/NotificationList";
import AdminNotification from "../notificatons/AdminNotificationList";
import ApiUrls from "../../utils/ApiUrls";
import { GET, POST } from "../../utils/Functions";
const TestHeader = () => {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const history = useHistory();
//   const User=props.user.user_info.first_name;



  
   
   
 

// console.log("user-------------------",User);
  const useStyles = makeStyles((theme) => ({
    white: {
      color: "gray",
      backgroundColor: "gray",
      width: theme.spacing(6),
      height: theme.spacing(6),
      border: 0,
    },
    logout: {
      "&, .MuiIconButton-root": {
        outline: "none !important",
      },
    },
  }));
  const classes = useStyles();

  return (
    <React.Fragment>
      <Navbar sticky="top" collapseOnSelect expand="lg" className="bg-dark mt-5 " style={{height:"40px",backgroundColor:"darkgray"}}>
        
      </Navbar>
     
    </React.Fragment>
  );
};

export default TestHeader;
