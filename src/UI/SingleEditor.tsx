import './../App.css';
import { useState } from "react";
import QREditor from './QR-Editor'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BlockPicker } from 'react-color'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'react-i18next';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ForwardIcon from '@material-ui/icons/Forward';

const useStyles = makeStyles((theme) => ({
  box: {
    borderStyle: 'solid',
  },
  rootGrid: {
    flexGrow: 1,
    margin: 50,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },

  root: {
    padding: '2px 4px',
    display: 'flex',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));


export default function OldSingleEditor() {

  const classes = useStyles();
  const { t, } = useTranslation();

  const DEFAULT_IMAGE_SRC = ""
  const DEFAULT_USE_IMAGE = false
  const DEFAULT_CONTENT = ""
  const DEFAULT_COLOR = ""

  const [imageSrc, setImageSrc] = useState("")
  const [useImage, setUseImage] = useState(false)
  const [content, setContent] = useState("google.ch")
  const [subTitle, setSubtitle] = useState("")
  const [color, setColor] = useState("#000000")
  const [colorCorner, setColorCorner] = useState("#000000")
  const [showTools, setShowTools] = useState(false)



  function reset() {
    setImageSrc(DEFAULT_IMAGE_SRC)
    setUseImage(DEFAULT_USE_IMAGE)
    setContent(DEFAULT_CONTENT)
    setColor(DEFAULT_COLOR)
  }


  return (
    <div className={`${classes.rootGrid}`}>
      <Grid container spacing={3}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Paper component="form" className={classes.root}>
          <IconButton className={classes.iconButton} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder="QR content"
            value={content}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {setContent(event.target.value)}}
            inputProps={{ 'aria-label': 'QR Code' }}
          />
          <IconButton className={classes.iconButton} aria-label="search">
            <ForwardIcon />
          </IconButton>

        </Paper>


        <Grid item xs={12}>
          <QREditor content={content}
            color={color}
            imageSrc={imageSrc}
            subTitle={subTitle}
            colorCorner={colorCorner}

          />
        </Grid>






      </Grid>

    </div >
  );
}

