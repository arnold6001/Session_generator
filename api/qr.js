export default function handler(req, res) {
  const qrUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=SampleQRCode';

  const instructions = [
    'Open WhatsApp on your phone',
    'Go to Settings > Linked Devices',
    'Tap on Link a Device',
    'Scan this QR code'
  ];

  res.json({
    qr: qrUrl,
    instructions
  });
}
