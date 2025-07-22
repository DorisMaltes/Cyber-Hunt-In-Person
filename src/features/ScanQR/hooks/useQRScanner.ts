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
    } else if (relativePath.includes("/game")) {
      // Handle game URLs like /game?boothId=game1&game=tictactoe
      navigate(relativePath);
    } else if (relativePath.includes("/random")) {
      // Handle random URLs like /random/roulette?boothId=random1
      navigate(relativePath);
    } else {
      alert("QR code not valid. Scan Again.");
      navigate('/home');
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