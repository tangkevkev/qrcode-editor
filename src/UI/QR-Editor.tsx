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
  const [canvas, setCanvas] = useState<HTMLCanvasElement>(null as any)
  const ref = useRef(null);
  const classes = useStyles();




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
        color: props.color
      }
    });
  }, [props.color]);

  useEffect(() => {
    qrCode.update({
      cornersSquareOptions: {
        color: props.colorCorner
      }
    });
  }, [props.colorCorner]);


  const onExtensionChange = (event: any) => {
    setFileExt(event.target.value);
  };

  const onDownloadClick = () => {
    qrCode.download({
      extension: fileExt as any
    });

  };


  const canvasMousedown = () => {
    if (props.onClickQR) {
      props.onClickQR()
    }
  }

  const canvasHandler = (canvas: HTMLCanvasElement) => {
    canvas.removeEventListener('mousedown', canvasMousedown);
    canvas.addEventListener('mousedown', canvasMousedown, false);
  }



  return (
    <div className="QR-Code">

      <div ref={ref} className="App" onClick={(e: React.MouseEvent) => {
        if (e.target instanceof HTMLCanvasElement) {
          canvasHandler(e.target)
        }
      }} />
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
          Download
        </Button>

      </div>
    </div>
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
