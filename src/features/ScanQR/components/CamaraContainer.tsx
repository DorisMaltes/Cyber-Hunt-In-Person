import { QRScanner } from './QRScanner';
import { useQRScanner } from '../hooks/useQRScanner';
import { useState } from 'react';

export const CamaraContainer = () => {
  const { handleScan } = useQRScanner();
  const [cameraError, setCameraError] = useState('');

  return (
    <div className="relative w-full max-w-md h-96 mx-auto overflow-hidden rounded-xl border-4 border-yellow-400 bg-black">
      {cameraError ? (
        <div className="flex items-center justify-center h-full text-white">
          Error: {cameraError}
        </div>
      ) : (
        <QRScanner 
          onScan={handleScan} 
          onError={(error) => setCameraError(error.message)}
        />
      )}
    </div>
  );
};