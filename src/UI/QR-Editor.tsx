
import { Grid } from '@material-ui/core';
import QRCode from 'qrcode.react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import IconButton from '@material-ui/core/IconButton';
import { Button } from '@material-ui/core';

import React, { useEffect, useRef, useState } from "react";
import QRCodeStyling, {Options} from "qr-code-styling";


interface QRProps {
  content: string,
  color?: string,
  imageSrc?: string,
  subTitle?: string,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }),
);



function QREditor(props: QRProps) {

  const classes = useStyles();
  const ref = useRef(null);

  const qrCode = new QRCodeStyling({
    width: 250,
    height: 250,
    data: props.content,
    image: 
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    dotsOptions: {
      color: "#000000",
      type: "rounded"
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 20
    }
  });

  useEffect(() => {
    qrCode.append(ref.current as any);
  }, []);

  useEffect(() => {
    qrCode.update({
      data: props.content
    });
  }, [props.content]);

  return (
    <div className="HpQrcode">

      <Grid container spacing={0}
        direction="column"
        justifyContent="center"
        alignItems="center">
        <QRCode
          size={256}
          fgColor={props.color}
          value={props.content}
          level={'H'}
          includeMargin={true}
          imageSettings={{
            src: "https://static.zpao.com/favicon.png"
          }}
        />
        {props.subTitle}
        <Button variant="text" color="primary" component="span">
          Download
          <IconButton aria-label="delete" className={classes.margin} size="small">
            <ArrowDownwardIcon fontSize="inherit" />
          </IconButton>
        </Button>

      </Grid>
      <div ref={ref} />

    </div>
  );
}

export default QREditor;
