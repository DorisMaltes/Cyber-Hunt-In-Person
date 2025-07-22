import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { 
  fetchRandomData, 
  fetchRandomProgress, 
  saveRandomResult 
} from "../api/randomApi";
import type { RandomType } from "../types";

export const useRandom = (boothId: string, randomType: RandomType) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  
  // React Query hooks - Disabled booth data fetch for now since we don't need it
  const { data: randomData, isLoading: loadingRandom } = useQuery({
    queryKey: ["random", boothId],
    queryFn: () => fetchRandomData(boothId),
    enabled: false, // Disabled to avoid loading delays
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

  const { data: progressData, isLoading: loadingProgress } = useQuery({
    queryKey: ["randomProgress", boothId],
    queryFn: () => fetchRandomProgress(boothId),
    enabled: !!boothId,
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });

  const saveRandomMutation = useMutation({
    mutationFn: ({ finalScore }: { finalScore: number }) =>
      saveRandomResult(boothId, finalScore),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["randomProgress", boothId] });
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  const handleGoHome = () => {
    navigate("/home");
  };

  return {
    // Data
    randomData,
    progressData,
    
    // Loading states
    loadingRandom,
    loadingProgress,
    savingRandom: saveRandomMutation.isPending,
    
    // Handlers
    handleGoHome,
    saveRandomResult: saveRandomMutation.mutate,
    
    // Random type
    randomType,
  };
}; 