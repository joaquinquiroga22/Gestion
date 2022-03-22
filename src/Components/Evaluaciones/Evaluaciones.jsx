import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import style from './Evaluaciones.module.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import LogoNodos2 from '../Imagenes/LogoNodos2.png'
import { Avatar, Grid, ListItemAvatar, Container, Button } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';



const useStyles = makeStyles((theme) => ({
    root: {
        width: 'auto',

        backgroundColor: theme.palette.background.paper,
    },
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export default function Evaluaciónes() {

    const [OpenEvaluaciones, SetOpenEvaluaciones] = React.useState(false);

    const handleClickTutores = () => {
        SetOpenEvaluaciones(!OpenEvaluaciones);
    };


    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };
    const classess = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });
    const classes = useStyles();
    return (
        <div className={style.ContainerBox}>
            <div className={style.ContainerMargenIzquierdo}>

                <AppBar className={style.AppBar}>
                    <Toolbar>
                        <Typography className={style.Typography} variant="h6">Colegio Santo Domingo - Nivel</Typography>
                    </Toolbar>
                </AppBar>

                <div className={classes.root}>


                    <List component="nav" aria-label="secondary mailbox folders" className={style.List}>
                        <ListItem button className={style.Evaluaciónes}>
                            <ListItemText primary="Seleccion de Colegio"  />
                        </ListItem>

                        <ListItem button className={style.Evaluaciónes}>
                            <ListItemText primary="Asistencia" />
                        </ListItem>

                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }} onClick={handleClickTutores} className={style.Evaluaciónes}>

                                <ListItemText primary="Evaluaciónes" />
                                {OpenEvaluaciones ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={OpenEvaluaciones} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 7 }} className={style.Despliegue}>

                                        <ListItemText primary="Crear Evaluación"/>

                                    </ListItemButton>
                                </List>
                            </Collapse>
                            <Collapse in={OpenEvaluaciones} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 7 }} className={style.Despliegue}>

                                        <ListItemText primary="Resumen de Evaluaciónes" />

                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>
                        <ListItem button className={style.Evaluaciónes}>
                            <ListItemText primary="Calificaciónes" />
                        </ListItem>
                        <ListItem button className={style.Evaluaciónes}>
                            <ListItemText primary="Conducta" />
                        </ListItem>
                        <ListItem button className={style.Evaluaciónes}>
                            <ListItemText primary="Informes" />
                        </ListItem>
                        <Button style={{ height: '30px', backgroundColor: 'red', color: 'white' }} href='/' >Volver</Button>
                    </List>
                </div>
            </div>
            <div className={style.ContainerMargenDerecho}>
                <Paper className={style.PaperDerecho} elevation={15}>


                    <Container>
                        <Grid container>
                            <Grid item xs={12} sm={6} style={{ width: '80%', height: '80%' }} >
                                <Paper style={{ width: '90%', height: '40px' }}>
                                    <Container style={{ width: '100%', height: '100%' }}>
                                        <FormControl variant="filled" style={{ width: '100%', height: '100%' }}>
                                            <InputLabel htmlFor="filled-age-native-simple" style={{ width: '100% ', height: '100% ' }}>Age</InputLabel>
                                            <Select


                                                native
                                                value={state.age}
                                                onChange={handleChange}
                                                inputProps={{
                                                    name: 'age',
                                                    id: 'filled-age-native-simple',
                                                }}
                                                style={{ height: '100%' }}
                                            >
                                                <option aria-label="None" value="" />
                                                <option value={10}>Ten</option>
                                                <option value={20}>Twenty</option>
                                                <option value={30}>Thirty</option>
                                                <option value={30}>Thirty</option>
                                            </Select>
                                        </FormControl>
                                    </Container>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} style={{ width: '80%', height: '80%' }} >
                                <Paper style={{ width: '90%', height: '40px' }}>
                                    <Container style={{ width: '100%', height: '100%' }}>
                                        <FormControl variant="filled" style={{ width: '100%', height: '100%' }}>
                                            <InputLabel htmlFor="filled-age-native-simple" style={{ width: '100% ', height: '100% ' }}>Age</InputLabel>
                                            <Select


                                                native
                                                value={state.age}
                                                onChange={handleChange}
                                                inputProps={{
                                                    name: 'age',
                                                    id: 'filled-age-native-simple',
                                                }}
                                                style={{ height: '100%' }}
                                            >
                                                <option aria-label="None" value="" />
                                                <option value={10}>Ten</option>
                                                <option value={20}>Twenty</option>
                                                <option value={30}>Thirty</option>
                                                <option value={30}>Thirty</option>
                                            </Select>
                                        </FormControl>
                                    </Container>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} style={{ width: '80%', height: '80%' }} >
                                <Paper style={{ width: '90%', height: '40px' }}>
                                    <Container style={{ width: '100%', height: '100%' }}>
                                        <FormControl variant="filled" style={{ width: '100%', height: '100%' }}>
                                            <InputLabel htmlFor="filled-age-native-simple" style={{ width: '100% ', height: '100% ' }}>Age</InputLabel>
                                            <Select


                                                native
                                                value={state.age}
                                                onChange={handleChange}
                                                inputProps={{
                                                    name: 'age',
                                                    id: 'filled-age-native-simple',
                                                }}
                                                style={{ height: '100%' }}
                                            >
                                                <option aria-label="None" value="" />
                                                <option value={10}>Ten</option>
                                                <option value={20}>Twenty</option>
                                                <option value={30}>Thirty</option>
                                                <option value={30}>Thirty</option>
                                            </Select>
                                        </FormControl>
                                    </Container>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} style={{ width: '80%', height: '80%' }} >
                                <Paper style={{ width: '90%', height: '40px' }}>
                                    <Container style={{ width: '100%', height: '100%' }}>
                                        <FormControl variant="filled" style={{ width: '100%', height: '100%' }}>
                                            <InputLabel htmlFor="filled-age-native-simple" style={{ width: '100% ', height: '100% ' }}>Age</InputLabel>
                                            <Select


                                                native
                                                value={state.age}
                                                onChange={handleChange}
                                                inputProps={{
                                                    name: 'age',
                                                    id: 'filled-age-native-simple',
                                                }}
                                                style={{ height: '100%' }}
                                            >
                                                <option aria-label="None" value="" />
                                                <option value={10}>Ten</option>
                                                <option value={20}>Twenty</option>
                                                <option value={30}>Thirty</option>
                                                <option value={30}>Thirty</option>
                                            </Select>
                                        </FormControl>
                                    </Container>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} style={{ width: '80%', height: '80%' }} >
                                <Paper style={{ width: '90%', height: '40px' }}>
                                    <Container style={{ width: '100%', height: '100%' }}>
                                        <Button fullWidth style={{ height: '100%', backgroundColor: '#4CBEA0' }}>
                                            Listar
                                        </Button>
                                    </Container>
                                </Paper>
                            </Grid>

                            <Grid item xs={12} sm={6} style={{ width: '80%', height: '80%' }} >
                                <Paper style={{ width: '90%', height: '40px' }}>
                                    <Container style={{ width: '100%', height: '100%' }}>
                                        <FormControl variant="filled" style={{ width: '100%', height: '100%' }}>
                                            <InputLabel htmlFor="filled-age-native-simple" style={{ width: '100% ', height: '100% ' }}>Age</InputLabel>
                                            <Select


                                                native
                                                value={state.age}
                                                onChange={handleChange}
                                                inputProps={{
                                                    name: 'age',
                                                    id: 'filled-age-native-simple',
                                                }}
                                                style={{ height: '100%' }}
                                            >
                                                <option aria-label="None" value="" />
                                                <option value={10}>Ten</option>
                                                <option value={20}>Twenty</option>
                                                <option value={30}>Thirty</option>
                                                <option value={30}>Thirty</option>
                                            </Select>
                                        </FormControl>
                                    </Container>
                                </Paper>
                            </Grid>
                            <Button style={{ width: '15%', height: '40px', backgroundColor: '#4CBEA0' }}>
                                hola
                            </Button>
                        </Grid>
                    </Container>
                </Paper>


                <div className={style.Avatar}>

                    <ListItemAvatar>
                        <Avatar>
                            <a style={{ width: '100%', height: '100%' }}><img style={{ width: '100%', height: '100%' }} src={LogoNodos2} alt="imagen" /></a>
                        </Avatar>
                    </ListItemAvatar>
                    <div className={style.DivFooter}>
                        <h3 style={{ color: '#EE3124', paddingRight: '40px !important', marginTop: '5px !important' }}>© 2022</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}