import { useQuery } from "@tanstack/react-query";
import { db } from "../../../firebaseConfig";
import {
  collection, doc, getDoc, query, orderBy, limit, getDocs,
  where, getCountFromServer
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

type Player = {
  id: string;
  name?: string;
  company?: string;
  score: number;
  total_time: number;
};

export const useLeaderboardData = () => {
  return useQuery({
    queryKey: ["leaderboardData"],
    queryFn: async () => {
      try {
        const auth = getAuth();
        const userId = auth.currentUser?.uid || null;

        // ---- 1) Top 5 ordenado (score desc, total_time asc)
        const qTop = query(
          collection(db, "users"),
          orderBy("score", "desc"),
          orderBy("total_time", "asc"),
          limit(5)
        );
        const topSnap = await getDocs(qTop);

        const players: Player[] = topSnap.docs.map(d => {
          const x = d.data() as any;
          return {
            id: d.id,
            name: x.name ?? "Player",
            company: x.company ?? "",
            score: Number(x.score) || 0,
            total_time: Number(x.total_time) || 0,
          };
        });

        // ---- 2) Rank del usuario (opcional)
        let userRank: number | null = null;
        if (userId) {
          try {
            const meSnap = await getDoc(doc(db, "users", userId));
            if (meSnap.exists()) {
              const me = meSnap.data() as any;
              const myScore = Number(me.score) || 0;
              const myTime = Number(me.total_time) || 0;

              // Usuarios con score mayor
              const qHigher = query(
                collection(db, "users"),
                where("score", ">", myScore)
              );
              const higherCount = (await getCountFromServer(qHigher)).data().count;

              // Usuarios con mismo score pero menor tiempo
              const qTieBreak = query(
                collection(db, "users"),
                where("score", "==", myScore),
                where("total_time", "<", myTime)
              );
              const tieBreakCount = (await getCountFromServer(qTieBreak)).data().count;

              userRank = higherCount + tieBreakCount + 1;
            }
          } catch (rankErr) {
            // Si falla el rank (índice/reglas), no tumbes el top-5
            console.error("[Leaderboard] rank error:", rankErr);
            userRank = null;
          }
        }

        return { players, userId, userRank };
      } catch (err) {
        console.error("[Leaderboard] top query error:", err);
        throw err; // Esto hará que React Query marque isError y veas tu mensaje rojo
      }
    },
  });
};
