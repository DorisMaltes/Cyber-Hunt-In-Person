
import { useMutation } from "@tanstack/react-query";
import { signOutUser } from "../api/signOutUser";

export function useSignOut(onSuccess?: () => void) {
  return useMutation({
    mutationFn: () => signOutUser(),
    onSuccess,
  });
}
