import React, { useEffect, useRef, useState } from "react";
import QRCodeStyling, { cornerDotTypes, cornerSquareTypes } from "qr-code-styling";
import './../App.css';

import Select from '@material-ui/core/Select';
import qrcode from "qrcode.react";



interface QRProps {
  content: string,
  color?: string,
  colorCorner?: string,
  imageSrc?: string,
  subTitle?: string,
}

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

export default function QREditor(props: QRProps) {
  const [fileExt, setFileExt] = useState("png");
  const [canvasInit, setCanvasInit] = useState(false)
  const [canvas, setCanvas] = useState<HTMLCanvasElement>(null as any)
  const ref = useRef(null);



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

  const canvasHandler = (event: React.MouseEvent<HTMLDivElement>, canvas: HTMLCanvasElement) => {
    setCanvas(canvas)
    canvas.removeEventListener('mousemove', mouseMove)
    canvas.removeEventListener('mouseout', mouseOut)
    canvas.addEventListener('mouseout', mouseOut, false)
    canvas.addEventListener('mousemove', mouseMove, false)
    setCanvasInit(true)
  }



  const mouseOut = (event: MouseEvent) => {
    if (canvas)
      canvas.style.cursor = 'default'
  }

  const mouseMove = (event: MouseEvent) => {
    console.log("Touched me " + event.offsetX)
    if (canvas)
      canvas.style.cursor = 'pointer'
  }

  return (
    < >
      <div ref={ref} onMouseMove={(event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target instanceof HTMLCanvasElement) {
          canvasHandler(event, event.target)
        }
      }} />
      <div style={styles.inputWrapper}>
        <select onChange={onExtensionChange} value={fileExt}>
          <option value="png">PNG</option>
          <option value="jpeg">JPEG</option>
          <option value="webp">WEBP</option>
        </select>
        <button onClick={onDownloadClick}>Download</button>
      </div>
    </>
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
