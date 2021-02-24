import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import "./App.css";
import { LocalOffer } from "@material-ui/icons";
import React from 'react';
import { Carousel  } from "./Carousel";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



// function Carousel() {
  
//   const divStyle = {
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     left: 0,
//     right: 0,
//   };

//   return(
//     <div style={divStyle}>
//       <img src="./1.jpg" alt="first"/>
//       {/* <img src="./2.png"/> */}
//     </div>
//   );
// }

function App() {
  const classes = useStyles();

  return (
    <>
    <AppBar color="transparent" position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="tag"
        >
          <LocalOffer />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Little Tag
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
      
    </AppBar>
    <Carousel></Carousel> 
    </>

  );
}

export default App;
