import React, { useEffect, useRef, useState } from "react";
import QRCodeStyling, { cornerDotTypes, cornerSquareTypes } from "qr-code-styling";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import qrcode from "qrcode.react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'react-i18next';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { BlockPicker } from 'react-color'
import Fade from '@material-ui/core/Fade';
import EditIcon from '@material-ui/icons/Edit';
import Slide from '@material-ui/core/Slide';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';




interface QRProps {
  content: string,
  color?: string,
  colorCorner?: string,
  imageSrc?: string,
  subTitle?: string,
  onClickQR?: Function,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    button: {
      margin: theme.spacing(1),
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
  }),
);

const qrCode = new QRCodeStyling({
  width: 250,
  height: 250,
  type: 'canvas',
  image:
    "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  dotsOptions: {
    color: "#4267b2",
    type: "square"
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 5
  },
  cornersSquareOptions: {
    color: "#FFD800",
    type: "square"
  }



});

export default function OldQREditor(props: QRProps) {
  const [fileExt, setFileExt] = useState("png");
  const [canvasInit, setCanvasInit] = useState(false)
  const [content, setContent] = useState("google.ch")
  const [subTitle, setSubtitle] = useState("")
  const [color, setColor] = useState("#000000")
  const [colorCorner, setColorCorner] = useState("#000000")
  const [imageSrc, setImageSrc] = useState("")
  const [useImage, setUseImage] = useState(false)
  const [showTools, setShowTools] = useState(false)

  const ref = useRef(null);
  const classes = useStyles();
  const { t, } = useTranslation();





  useEffect(() => {
    qrCode.append(ref.current as any);
    console.log("Append")


  }, []);

  useEffect(() => {
    qrCode.update({
      data: (props.content.length == 0) ? "empty" : props.content
    });
    setCanvasInit(false)
  }, [props.content]);

  useEffect(() => {
    qrCode.update({
      dotsOptions: {
        color: color
      }
    });
  }, [color]);

  useEffect(() => {
    qrCode.update({
      cornersSquareOptions: {
        color: colorCorner
      }
    });
  }, [colorCorner]);


  const onExtensionChange = (event: any) => {
    setFileExt(event.target.value);
  };

  const onDownloadClick = () => {
    qrCode.download({
      extension: fileExt as any
    });

  };







  return (
    <div className="QR-Code">

      <div ref={ref} className="App" onClick={(e: React.MouseEvent) => {
        if (e.target instanceof HTMLCanvasElement) {
          setShowTools(!showTools)
        }

      }
      } />

      <div style={styles.inputWrapper}>

        <FormControl className={classes.formControl}>

          <InputLabel id="demo-simple-select-filled-label">Extension</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={fileExt}
            onChange={onExtensionChange}
          >
            <MenuItem value={"png"}>PNG</MenuItem>
            <MenuItem value={"jpeg"}>JPEG</MenuItem>
            <MenuItem value={"webp"}>WEBP</MenuItem>
          </Select>

        </FormControl>
        <Button
          color="default"
          onClick={onDownloadClick}
          className={classes.button}
          startIcon={<ArrowDownwardIcon />}
        >
          {t("Download")}
        </Button>

      </div>

      <Fade in={!showTools} timeout={1000}>
        <Button
          color="primary"
          onClick={() => { setShowTools(!showTools) }}
          className={classes.button}
          startIcon={<EditIcon />}
        >
          {t("Edit")}
        </Button>
      </Fade>

      <Fade in={showTools} timeout={1000}>
        <div className="background">
          <Button
            color="primary"
            onClick={() => { setShowTools(!showTools) }}
            className={classes.button}
            startIcon={<CloseIcon />
            }
          >
            {t("Close")}
          </Button>

          <Grid container spacing={5}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <div className="flex-container">
                <Paper elevation={4}>
                  <div className="Paper-header">
                    <h3>{t("Color")}</h3>
                  </div>
                  <BlockPicker
                    color={color}
                    colors={['#000000', '#808080', '#FF0000',
                      '#FFD800', '#4CFF00', '#00FFFF',
                      '#0094FF', '#0026FF', '#FF7FED', '#007F0E']}
                    onChange={(event) => setColor(event.hex)} triangle={'hide'} />
                </Paper>

              </div>
            </Grid>
            <Grid item>
              <Paper elevation={4}>
                <div className="Paper-header">
                  <h3>{t("Corner Color")}</h3>
                </div>
                <div className="flex-container">
                  <BlockPicker
                    color={colorCorner}
                    colors={['#000000', '#808080', '#FF0000',
                      '#FFD800', '#4CFF00', '#00FFFF',
                      '#0094FF', '#0026FF', '#FF7FED', '#007F0E']}
                    onChange={(event) => setColorCorner(event.hex)} triangle={'hide'} />
                </div>
              </Paper>
            </Grid>
            <Grid item>
              <Paper elevation={4}>
                <div className="Paper-header">
                  <h3>{t("Icon")}</h3>
                </div>
                <div className="flex-container">
                  <BlockPicker
                    color={colorCorner}
                    colors={['#000000', '#808080', '#FF0000',
                      '#FFD800', '#4CFF00', '#00FFFF',
                      '#0094FF', '#0026FF', '#FF7FED', '#007F0E']}
                    onChange={(event) => setColorCorner(event.hex)} triangle={'hide'} />
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div >

      </Fade >
    </div >

  );
}

const styles = {
  inputWrapper: {
    margin: "5px 0",
    display: "block",

    justifyContent: "center",
    width: "100%"
  },
  inputBox: {
    flexGrow: 1,
    marginRight: 20
  }
};
