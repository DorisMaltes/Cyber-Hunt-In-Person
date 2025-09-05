import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { 
  fetchMemoryCardData, 
  fetchMemoryCardProgress, 
  saveMemoryCardResult 
} from "../api/memoryCardApi";
import type { MemoryCardType } from "../types";

export const useMemoryCard = (boothId: string, gameType: MemoryCardType) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  
  // React Query hooks - Disabled booth data fetch for now since we don't need it
  const { data: gameData, isLoading: loadingGame } = useQuery({
    queryKey: ["memoryCard", boothId],
    queryFn: () => fetchMemoryCardData(boothId),
    enabled: false, // Disabled to avoid loading delays
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

  const { data: progressData, isLoading: loadingProgress } = useQuery({
    queryKey: ["memoryCardProgress", boothId],
    queryFn: () => fetchMemoryCardProgress(boothId),
    enabled: !!boothId,
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });

  const saveGameMutation = useMutation({
    mutationFn: ({ finalScore }: { finalScore: number }) =>
      saveMemoryCardResult(boothId, finalScore),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["memoryCardProgress", boothId] });
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