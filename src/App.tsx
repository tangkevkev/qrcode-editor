import './App.css';
import { useState } from "react";
import QREditor from './QR-Editor';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TwitterPicker, BlockPicker } from 'react-color'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',      
    },
  },
  box:{
      borderStyle: 'solid', 
  },
  rootGrid: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



function App() {

  const classes = useStyles();

  const DEFAULT_IMAGE_SRC = ""
  const DEFAULT_USE_IMAGE = false
  const DEFAULT_CONTENT = ""
  const DEFAULT_COLOR = ""

  const [imageSrc, setImageSrc] = useState("")
  const [useImage, setUseImage] = useState(false)
  const [content, setContent] = useState("google.ch")
  const [subTitle, setSubtitle] = useState("")
  const [color, setColor] = useState("#00FF00")


  function reset() {
    setImageSrc(DEFAULT_IMAGE_SRC)
    setUseImage(DEFAULT_USE_IMAGE)
    setContent(DEFAULT_CONTENT)
    setColor(DEFAULT_COLOR)
  }


  return (
    <div className={`${classes.rootGrid}`}>
      <Grid container spacing={1}
        direction="row">
        <Grid item xs={12} lg={4} md={3} />
        <Grid item xs={12} lg={2} md={3}
         container
          direction="column"
          justifyContent="center"
          alignItems="center">
          <Grid item>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField id="standard-basic"
                label="QR Content"
                onChange={(event) => { setContent(event.target.value) }}
                value={content}
              />
            </form>
          </Grid>
          <Grid item>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField id="standard-basic"
                label="Subtitle"
                onChange={(event) => { setSubtitle(event.target.value) }}
                value={subTitle}
              />
            </form>
          </Grid>
          <Grid item>
            <BlockPicker color={color} onChange={(event) => setColor(event.hex)} triangle={'hide'} />
          </Grid>
        </Grid>
        <Grid item xs={12} lg={2} md={3}>
          <QREditor content={content} color={color} imageSrc={imageSrc} subTitle={subTitle} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
