import './../App.css';
import { useState } from "react";
import QREditor from './QR-Editor'
import Button from '@mui/material/Button';
import { BlockPicker } from 'react-color'
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
import InputBase from '@mui/material/InputBase';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import { kMaxLength } from 'buffer';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';



const theme = createMuiTheme();



const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  box: {
    borderStyle: 'solid',
  },
  rootGrid: {
    flexGrow: 1,
    margin: 3,
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
    maxWidth: 600,
    minWidth: 300,
    width: 600,
    [theme.breakpoints.between(0, 600)]: {
      width: "100%"
    }


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
  button: {
    margin: theme.spacing(2),


  },
}));


export default function SingleEditor() {

  const classes = useStyles();
  const { t, } = useTranslation();

  const DEFAULT_IMAGE_SRC = ""
  const DEFAULT_USE_IMAGE = false
  const DEFAULT_CONTENT = ""
  const DEFAULT_COLOR = ""
  const EXAMPLE_CONTENT = "www.qrcode-maker.io"
  const CONTENT_MAX_LENGTH = 600

  const [imageSrc, setImageSrc] = useState("")
  const [useImage, setUseImage] = useState(false)
  const [tempContent, setTempContent] = useState("")
  const [content, setContent] = useState("")
  const [subTitle, setSubtitle] = useState("")
  const [color, setColor] = useState("#000000")
  const [colorCorner, setColorCorner] = useState("#000000")
  const [showQR, setShowQR] = useState(false)
  const [open, setOpen] = useState(false);




  function reset() {
    setImageSrc(DEFAULT_IMAGE_SRC)
    setUseImage(DEFAULT_USE_IMAGE)
    setContent(DEFAULT_CONTENT)
    setColor(DEFAULT_COLOR)
  }


  return (
    <div className={`${classes.rootGrid}`}>

      <Grid item xs={12}>
        <Paper component="form" >
          <TextField id="outlined-basic"
            label={t("QR Content")}
            variant="outlined"
            className={classes.root}
            value={tempContent}
            maxRows={3}
            inputProps={{ maxLength: CONTENT_MAX_LENGTH }}
            onChange={
              (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                setTempContent(event.target.value)
                setContent(event.target.value)
              }}

          />
        </Paper>
      </Grid>

      <Grid item xs={12}
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={() => {
              setContent(tempContent)
              setShowQR(true)
            }}
          >
            {t("Generate")}
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={() => {
              setTempContent(EXAMPLE_CONTENT);
              setContent(EXAMPLE_CONTENT)
              setShowQR(true)
            }}
          >
            {t("Example")}
          </Button>
        </Grid>
      </Grid>
      {showQR &&
        <Grid item xs={12}>
          <QREditor content={content}
            color={color}
            imageSrc={imageSrc}
            subTitle={subTitle}
            colorCorner={colorCorner}

          />

        </Grid>
      }


    </div >
  );
}
  /** <InputBase
className={classes.input}
placeholder="QR content"
value={tempContent}
onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => { setTempContent(event.target.value) }}
inputProps={{ 'aria-label': 'QR Code' }}
/> */
