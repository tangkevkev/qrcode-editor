
import { QRCodeImg } from '@cheprasov/react-qrcode';
import QRCode from 'qrcode.react'


interface QRProps{
    content: string,
    color?: string,
    imageSrc?: string,
    subTitle?: string,
}

function QREditor(props: QRProps) {
  return (
    <div className="App">
      <QRCode
        size={256}
        fgColor={props.color}
        value= {props.content}
        level= {'H'}
        includeMargin={true}
      />
    </div>
  );
}

export default QREditor;
