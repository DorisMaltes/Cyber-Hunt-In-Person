import { QRScanner } from './QRScanner';
import { useQRScanner } from '../hooks/useQRScanner';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CamaraContainer = () => {
  const { handleScan } = useQRScanner();
  const [cameraError, setCameraError] = useState('');
  const navigate = useNavigate();

  return (
    <div className="relative w-full max-w-md h-96 mx-auto overflow-hidden rounded-xl border-4 border-yellow-400 bg-black">
      {cameraError ? (
        <div className="flex items-center justify-center h-full text-white">
          Error: {cameraError}
        </div>
      ) : (
        <QRScanner 
          onScan={handleScan} 
          onError={(error) => {
            setCameraError(error.message);
            navigate('/home');
            alert('Error scanning QR code, you will be redirected to the home page');
          }}
        />
      )}
    </div>
  );
};