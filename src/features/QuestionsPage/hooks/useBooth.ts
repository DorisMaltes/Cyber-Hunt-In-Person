import { useQuery } from "@tanstack/react-query";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import type { BoothProgress } from "../types";

export const useBoothData = (boothId: string) => {
  return useQuery({
    queryKey: ["booth", boothId],
    queryFn: async () => {
      const boothRef = doc(db, "booths", boothId);
      const boothSnap = await getDoc(boothRef);
      if (!boothSnap.exists()) throw new Error("Booth not found");
      return boothSnap.data();
    },
    enabled: !!boothId,
  });
};

export const useBoothProgress = (boothId: string, userId: string) => {
  return useQuery({
    queryKey: ["boothProgress", boothId, userId],
    queryFn: async (): Promise<BoothProgress> => {
      if (!userId) return null;
      const progressRef = doc(db, "users", userId, "user_booth_progress", boothId);
      const progressSnap = await getDoc(progressRef);
      return progressSnap.exists() ? progressSnap.data() as BoothProgress : null;
    },
    enabled: !!boothId && !!userId,
  });
};