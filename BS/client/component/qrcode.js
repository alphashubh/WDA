import React from 'react';

export default class QrCode extends React.Component {
    render() {
        return (
            <div>
                <img src="http://localhost:3000/downloadQr" alt="qrcode" />
            </div>
        )
    }
}