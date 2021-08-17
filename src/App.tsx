import './App.css';
import { useState } from "react";
import QREditor from './QR-Editor';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TwitterPicker, BlockPicker } from 'react-color'
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
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
    <div className="flex-container">
      <QREditor content={content} color={color} imageSrc={imageSrc} subTitle={subTitle} />
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic"
          label="QR Content"
          onChange={(event) => { setContent(event.target.value) }}
          value={content}
        />
      </form>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic"
          label="Subtitle"
          onChange={(event) => { setSubtitle(event.target.value) }}
          value={subTitle}
        />
      </form>
      <BlockPicker color = {color} onChange={(event) => setColor(event.hex)}/>
    </div>
  );
}

export default App;
