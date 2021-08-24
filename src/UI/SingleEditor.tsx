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
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  box: {
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
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: 'gray',
  },
}));


function SingleEditor() {

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


  function reset() {
    setImageSrc(DEFAULT_IMAGE_SRC)
    setUseImage(DEFAULT_USE_IMAGE)
    setContent(DEFAULT_CONTENT)
    setColor(DEFAULT_COLOR)
  }


  return (
    <div className={`${classes.rootGrid}`}>
      <Grid container spacing={2}
        direction="row"
        alignContent="center"
        justify="center">

        <Paper elevation={4}>


          <Grid item>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField id="standard-basic"
                multiline={true}
                maxRows={3}
                label="QR Content"
                onChange={(event) => { setContent(event.target.value) }}
                value={content}
              />
            </form>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField id="standard-basic"
                label="Subtitle [Optional]"
                onChange={(event) => { setSubtitle(event.target.value) }}
                value={subTitle}
              />
            </form>
            <Accordion defaultExpanded={true}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className={classes.heading}>{t("Color")}</Typography>
                <Typography className={classes.secondaryHeading}>{"[" + t("Optional") + "]"}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="flex-container">
                  <BlockPicker
                    color={color}
                    colors={['#000000', '#808080', '#FF0000',
                      '#FFD800', '#4CFF00', '#00FFFF',
                      '#0094FF', '#0026FF', '#FF7FED', '#007F0E']}
                    onChange={(event) => setColor(event.hex)} triangle={'hide'} />
                </div>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Paper>



        <Grid item>
          <QREditor content={content} color={color} imageSrc={imageSrc} subTitle={subTitle} />
        </Grid>

      </Grid>

    </div>
  );
}
export default SingleEditor;
//          <QREditor content={content} color={color} imageSrc={imageSrc} subTitle={subTitle} />
