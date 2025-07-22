import { db } from "../../../firebaseConfig";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import type { GameData, GameProgress } from "../types";

const auth = getAuth();

export const fetchGameData = async (boothId: string): Promise<GameData | null> => {
  try {
    const boothRef = doc(db, "booths", boothId);
    const boothSnap = await getDoc(boothRef);
    
    if (!boothSnap.exists()) {
      // Return null instead of throwing error for direct game URLs
      return null;
    }
    
    return {
      id: boothSnap.id,
      ...boothSnap.data()
    } as GameData;
  } catch (error) {
    console.warn("Could not fetch booth data:", error);
    return null;
  }
};

export const fetchGameProgress = async (boothId: string): Promise<GameProgress | null> => {
  const userId = auth.currentUser?.uid;
  if (!userId) return null;
  
  const progressRef = doc(db, "users", userId, "user_booth_progress", boothId);
  const progressSnap = await getDoc(progressRef);
  
  if (!progressSnap.exists()) {
    return null;
  }
  
  return progressSnap.data() as GameProgress;
};

export const saveGameResult = async (
  boothId: string, 
  finalScore: number
): Promise<void> => {
  const userId = auth.currentUser?.uid;
  if (!userId) throw new Error("User not authenticated");
  
  const userRef = doc(db, "users", userId);
  const progressRef = doc(db, "users", userId, "user_booth_progress", boothId);

  try {
    console.log("Saving game result for:", userId, boothId, finalScore);

    // Save individual progress
    await setDoc(progressRef, {
      booth_id: boothId,
      score_obtained: finalScore,
      visited: true
    });

    // Update user's total score and visited_booths
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const userData = userSnap.data();
      const newScore = (userData.score || 0) + finalScore;
      
      const visitedBooths = userData.visited_booths || [];
      const updatedVisitedBooths = visitedBooths.includes(boothId)
        ? visitedBooths
        : [...visitedBooths, boothId];

      await updateDoc(userRef, {
        score: newScore,
        visited_booths: updatedVisitedBooths
      });
    }

    console.log("Game result saved successfully.");
  } catch (error) {
    console.error("Error saving game result:", error);
    throw error;
  }
}; 