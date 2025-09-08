import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { 
  fetchHangmanData, 
  fetchHangmanProgress, 
  saveHangmanResult 
} from "../api/hangmanApi";
import type { HangmanType } from "../types";

export const useHangman = (boothId: string, gameType: HangmanType) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  
  // React Query hooks - Disabled booth data fetch for now since we don't need it
  const { data: gameData, isLoading: loadingGame } = useQuery({
    queryKey: ["hangman", boothId],
    queryFn: () => fetchHangmanData(boothId),
    enabled: false, // Disabled to avoid loading delays
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

  const { data: progressData, isLoading: loadingProgress } = useQuery({
    queryKey: ["hangmanProgress", boothId],
    queryFn: () => fetchHangmanProgress(boothId),
    enabled: !!boothId,
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });

  const saveGameMutation = useMutation({
    mutationFn: ({ finalScore }: { finalScore: number }) =>
      saveHangmanResult(boothId, finalScore),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hangmanProgress", boothId] });
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  const handleGoHome = () => {
    navigate("/home");
  };

  return {
    // Data
    gameData,
    progressData,
    
    // Loading states
    loadingGame,
    loadingProgress,
    savingGame: saveGameMutation.isPending,
    
    // Handlers
    handleGoHome,
    saveGameResult: saveGameMutation.mutate,
    
    // Game type
    gameType,
  };
};
