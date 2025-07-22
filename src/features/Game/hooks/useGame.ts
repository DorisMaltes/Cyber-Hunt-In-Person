import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { 
  fetchGameData, 
  fetchGameProgress, 
  saveGameResult 
} from "../api/gameApi";
import type { GameType } from "../types";

export const useGame = (boothId: string, gameType: GameType) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  
  // React Query hooks - Disabled booth data fetch for now since we don't need it
  const { data: gameData, isLoading: loadingGame } = useQuery({
    queryKey: ["game", boothId],
    queryFn: () => fetchGameData(boothId),
    enabled: false, // Disabled to avoid loading delays
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

  const { data: progressData, isLoading: loadingProgress } = useQuery({
    queryKey: ["gameProgress", boothId],
    queryFn: () => fetchGameProgress(boothId),
    enabled: !!boothId,
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });

  const saveGameMutation = useMutation({
    mutationFn: ({ finalScore }: { finalScore: number }) =>
      saveGameResult(boothId, finalScore),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gameProgress", boothId] });
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