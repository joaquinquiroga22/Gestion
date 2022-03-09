
import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import logoNodos from '../Imagenes/logoNodos.png'
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar, Grid, ListItemAvatar } from "@material-ui/core";
import style from '../NavBar/NavBar.module.css'
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import LogoNodosNuevo from '../Imagenes/LogoNodosNuevo.png'
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },

  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100ch"
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

export default function Nav() {
  const classes = useStyles();
  const classess = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={style.AppBar}>
        <Toolbar className={style.Toolbar}>
          <Container className={style.ContainerImg}>
            <a >
              <img src={LogoNodosNuevo} alt="img" />
            </a>
          </Container>
          <Container className={style.h1} >
            <h3>Gestion Escolar más Simple</h3>
          </Container>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <h3 style={{ textAlign: 'center' }}>McGonagall,
              <br />
              Minerva</h3>
            <ListItemAvatar>

              <Avatar style={{ backgroundColor: 'transparent', marginLeft: '10px', aspectRatio: '1/1', imageRendering: 'crisp-edges', marginTop: '20px' }}>

                <a style={{ width: '100%', height: '100%' }}>
                  <img style={{ width: '100%', height: '100%' }} src={logoNodos} alt="IMG" />
                </a>
              </Avatar>
            </ListItemAvatar>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={style.ContainerPadre}>
        <Container className={style.BoxGrid}>
          <Paper className={style.PaperGrid} elevation={15} >
            <Grid container spacing={1} className={style.Grid} >
              <Grid item xs={12}>
                <Paper>
                  <h1>1</h1>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <h1>2</h1>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <h1>3</h1>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <h1>4</h1>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <h1>5</h1>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <h1>6</h1>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <h1>7</h1>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <h1>8</h1>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <h1>9</h1>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <h1>10</h1>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <h1>11</h1>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <h1>12</h1>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Container>

      </Container>
    </div>
  );
}

