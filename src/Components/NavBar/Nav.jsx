
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logoCirculo from '../Imagenes/logoCirculo.png'
import logoNodos from '../Imagenes/logoNodos.png'
import LogoNodos2 from '../Imagenes/LogoNodos2.png'
import { Avatar, Grid, ListItemAvatar } from "@material-ui/core";
import style from '../NavBar/NavBar.module.css'
import Divider from '@material-ui/core/Divider';
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

          <Paper className={style.PaperGrid} elevation={15} style={{ borderRadius: '30px' }}>

            <Container className={style.Titulo} >
              <h3>Apariencias para Libretas</h3>
              <Divider style={{ backgroundColor: 'black', width: '98%' }} orientation="horizontal" ></Divider>
              <h4>Elija Colegio:</h4>
            </Container>
            <Grid container spacing={1} className={style.Grid} >
              <Grid item xs={12} md={3} sm={6} style={{height:'40%'}} >
                <Paper className={style.Grid12} elevation={15}>
                  <Container style={{ width: '60%', height: '70%', borderRadius: '50%' }}>
                    <a><img style={{ width: '70%', height: '100%' }} src={logoCirculo} alt="img" /></a>
                  </Container>
                  <h3>Colegio Nodos A</h3>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3} sm={6} style={{height:'40%'}}>
                <Paper className={style.Grid12} elevation={15}>
                  <Container style={{ width: '60%', height: '70%', borderRadius: '50%' }}>
                    <a><img style={{ width: '70%', height: '100%' }} src={logoCirculo} alt="img" /></a>
                  </Container>
                  <h3>Colegio Nodos B</h3>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3} sm={6} style={{height:'40%'}}>
                <Paper className={style.Grid12} elevation={15}>
                  <Container style={{ width: '60%', height: '70%', borderRadius: '50%' }}>
                    <a><img style={{ width: '70%', height: '100%' }} src={logoCirculo} alt="img" /></a>
                  </Container>
                  <h3>Colegio Nodos C</h3>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3} sm={6} style={{height:'40%'}}>
                <Paper className={style.Grid12} elevation={15}>
                  <Container style={{ width: '60%', height: '70%', borderRadius: '50%' }}>
                    <a><img style={{ width: '70%', height: '100%' }} src={logoCirculo} alt="img" /></a>
                  </Container>
                  <h3>Colegio Nodos D</h3>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3} sm={6} style={{height:'40%'}}>
                <Paper className={style.Grid12} elevation={15}>
                  <Container style={{ width: '60%', height: '70%', borderRadius: '50%' }}>
                    <a><img style={{ width: '70%', height: '100%' }} src={logoCirculo} alt="img" /></a>
                  </Container>
                  <h3>Colegio Nodos E</h3>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3} sm={6} style={{height:'40%'}}>
                <Paper className={style.Grid12} elevation={15}>
                  <Container style={{ width: '60%', height: '70%', borderRadius: '50%' }}>
                    <a><img style={{ width: '70%', height: '100%' }} src={logoCirculo} alt="img" /></a>
                  </Container>
                  <h3>Colegio Nodos F</h3>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3} sm={6} style={{height:'40%'}}>
                <Paper className={style.Grid12} elevation={15}>
                  <Container style={{ width: '60%', height: '70%', borderRadius: '50%' }}>
                    <a><img style={{ width: '70%', height: '100%' }} src={logoCirculo} alt="img" /></a>
                  </Container>
                  <h3>Colegio Nodos G</h3>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3} sm={6} style={{height:'40%'}}>
                <Paper className={style.Grid12} elevation={15}>
                  <Container style={{ width: '60%', height: '70%', borderRadius: '50%' }}>
                    <a><img style={{ width: '70%', height: '100%' }} src={logoCirculo} alt="img" /></a>
                  </Container>
                  <h3>Colegio Nodos H</h3>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3} sm={6} style={{height:'40%'}}>
                <Paper className={style.Grid12} elevation={15}>
                  <Container style={{ width: '60%', height: '70%', borderRadius: '50%' }}>
                    <a><img style={{ width: '70%', height: '100%' }} src={logoCirculo} alt="img" /></a>
                  </Container>
                  <h3>Colegio Nodos I</h3>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3} sm={6} style={{height:'40%'}}>
                <Paper className={style.Grid12} elevation={15}>
                  <Container style={{ width: '60%', height: '70%', borderRadius: '50%' }}>
                    <a><img style={{ width: '70%', height: '100%' }} src={logoCirculo} alt="img" /></a>
                  </Container>
                  <h3>Colegio Nodos J</h3>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3} sm={6} style={{height:'40%'}}>
                <Paper className={style.Grid12} elevation={15}>
                  <Container style={{ width: '60%', height: '70%', borderRadius: '50%' }}>
                    <a><img style={{ width: '70%', height: '100%' }} src={logoCirculo} alt="img" /></a>
                  </Container>
                  <h3>Colegio Nodos K</h3>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3} sm={6} style={{height:'40%'}}>
                <Paper className={style.Grid12} elevation={15}>
                  <Container style={{ width: '60%', height: '70%', borderRadius: '50%' }}>
                    <a><img style={{ width: '70%', height: '100%' }} src={logoCirculo} alt="img" /></a>
                  </Container>
                  <h3>Colegio Nodos L</h3>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Container>
        <div style={{paddingTop:'10px',display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', marginTop:'-70px !important', textAlign:'center'}}>
          
          <ListItemAvatar>
            <Avatar>
              <a style={{ width: '100%', height: '100%' }}><img style={{width:'100%', height:'100%'}}src={LogoNodos2} alt="imagen" /></a>
            </Avatar>
          </ListItemAvatar>
          <div className={style.DivFooter}>
           <h3 style={{color:'#EE3124', paddingRight:'25px', marginTop:'5px !important'}}>© 2022</h3>
          </div>
        </div>
    </div>
  );
}

