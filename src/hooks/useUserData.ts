import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { db } from "../firebaseConfig";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";

export type UserData = {
  name: string;
  score: number;
  visited_booths: string[];
  total_time?: number;
};

export const useUserData = () => {
  const queryClient = useQueryClient();

  const query = useQuery<UserData | null>({
    queryKey: ["userData"],
    queryFn: async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) return null; // Mejor que lanzar un error

      const userRef = doc(db, "users", user.uid);
      const snap = await getDoc(userRef);
      return snap.exists() ? (snap.data() as UserData) : null;
    },
    // staleTime: 5 * 60 * 1000, // 5 minutos (opcional)
  });

  useEffect(() => {
    const auth = getAuth();
    
    const handleAuthChange = (user: User | null) => {
      if (!user) {
        queryClient.setQueryData(["userData"], null);
        return;
      }

      const userRef = doc(db, "users", user.uid);
      const unsubscribeSnapshot = onSnapshot(userRef, (doc) => {
        queryClient.setQueryData(
          ["userData"], 
          doc.exists() ? (doc.data() as UserData) : null
        );
      });

      return unsubscribeSnapshot;
    };

    const unsubscribeAuth = onAuthStateChanged(auth, handleAuthChange);
    
    return () => {
      unsubscribeAuth();
    };
  }, [queryClient]);

  return query;
};