
import { Grid } from '@material-ui/core';
import QRCode from 'qrcode.react'


interface QRProps {
  content: string,
  color?: string,
  imageSrc?: string,
  subTitle?: string,
}

function QREditor(props: QRProps) {
  return (
    <Grid container spacing={0}
      direction="column"
      justifyContent="center"
      alignItems="center">
      <QRCode
        size={256}
        fgColor={props.color}
        value={props.content}
        level={'H'}
      >
      </QRCode>
      {props.subTitle}
    </Grid>
  );
}

export default QREditor;
