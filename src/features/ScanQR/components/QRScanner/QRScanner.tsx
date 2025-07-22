import { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import jsQR from 'jsqr';
import type { QRScannerProps } from '../../types';

export const QRScanner = ({ onScan }: QRScannerProps) => {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCameraReady, setIsCameraReady] = useState(false);

  useEffect(() => {
    if (!isCameraReady) return;

    const interval = setInterval(() => {
      const webcam = webcamRef.current;
      const canvas = canvasRef.current;
      
      if (!webcam?.video?.readyState || webcam.video.readyState < 4 || !canvas) return;

      const video = webcam.video;
      const context = canvas.getContext('2d');
      if (!context) return;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      try {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);
        
        if (code) {
          console.log("QR detectado:", code.data);
          onScan(code.data);
        }
      } catch (error) {
        console.error("Error processing image:", error);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [onScan, isCameraReady]);

  return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/png"
        videoConstraints={{
          facingMode: 'environment',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        onUserMedia={() => setIsCameraReady(true)}
        onUserMediaError={(error) => console.error("Camera error:", error)}
      />
      <canvas 
        ref={canvasRef} 
        style={{ display: 'none' }}
        width={1280}
        height={720}
      />
    </>
  );
};