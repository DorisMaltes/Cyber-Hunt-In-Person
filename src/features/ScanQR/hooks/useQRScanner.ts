import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

export const useQRScanner = () => {
  const navigate = useNavigate();

  const handleScan = async (data: string) => {
    let relativePath = data;

    if (data.startsWith("http")) {
      const url = new URL(data);
      relativePath = url.pathname + url.search;
    }

    if (relativePath.includes("/booths/")) {
      await handleBoothScan(relativePath);
    } else if (relativePath.includes("/game") || relativePath.includes("/random")) {
      navigate(relativePath);
    } else {
      alert("QR no válido.");
    }
  };

  const handleBoothScan = async (path: string) => {
    const splitted = path.split("/booths/");
    const boothId = splitted[1];
    
    const boothRef = doc(db, "booths", boothId);
    const boothSnap = await getDoc(boothRef);

    if (!boothSnap.exists()) {
      alert("Booth no encontrado.");
      return;
    }

    const boothData = boothSnap.data();
    console.log("Booth data:", boothData);

    switch (boothData.type) {
      case "questions":
        navigate(`/quiz?boothId=${boothId}`);
        break;
      case "game":
        navigate(`/game?boothId=${boothId}&game=tictactoe`);
        break;
      case "random":
        navigate(`/random/roulette?boothId=${boothId}`);
        break;
      default:
        alert("Tipo de booth no reconocido.");
    }
  };

  return { handleScan };
};