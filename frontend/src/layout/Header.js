import React from "react";
// Router
import { Link } from "react-router-dom";

import "./Header.css";

// Images
import logo from "../assets/logo.png";

// Material Ui
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { fade, makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ImportContactsOutlinedIcon from "@material-ui/icons/ImportContactsOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AddBoxIcon from "@material-ui/icons/AddBox";
import BookOutlinedIcon from "@material-ui/icons/BookOutlined";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";

// intern components
import SearchInput from "../components/SearchInput";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  carrinhoLogo: {
    width: "50px",
    height: "50px",
    color: "#fff"
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const _id = "5dc1cf33e4caa528dcc63d6b";

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#6f42c1" }}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap align="left">
            <Link id="toth-link" to={"/"}>
              <img src={logo} alt="logo" width="50px" height="50px" align="left" />
            </Link>
          </Typography>

          <SearchInput />

          <Link to={"/login"}>
            <Button style={{ color: "#fff" }}>
              <AccountCircleIcon />
            </Button>
          </Link>

          <Link to={""}>
            <ShoppingCartIcon className={"shopp-button"} />
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
