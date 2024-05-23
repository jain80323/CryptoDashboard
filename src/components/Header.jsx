import { AppBar, Container, MenuItem, Select, ThemeProvider, Toolbar, Typography, createTheme, makeStyles } from '@material-ui/core'
import React, { useContext } from 'react'
import {useNavigate} from "react-router-dom";
import { CryptoContext } from '../CryptoContext';

const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
    }
}))

const Header = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const {currency, setCurrency} = useContext(CryptoContext);
    
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff"
            },
            type: "dark",
        }
    })

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
        <Container>
           <Toolbar>
            <Typography onClick = {() => navigate("/")} className={classes.title} variant='h6'>Crypto Hunter</Typography>
            <Select variant='outlined' value={currency} onChange={(e) => setCurrency(e.target.value)} style={{width: 100, height: 40, marginRight:15}}>
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
           </Toolbar>
        </Container>
    </AppBar>
    </ThemeProvider>
  )
}

export default Header