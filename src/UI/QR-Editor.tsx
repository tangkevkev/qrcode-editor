
import { Grid } from '@material-ui/core';
import QRCode from 'qrcode.react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import IconButton from '@material-ui/core/IconButton';
import { Button } from '@material-ui/core';



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
    </div>
  );
}

export default QREditor;
