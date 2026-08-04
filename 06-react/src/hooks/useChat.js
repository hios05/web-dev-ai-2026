import { useMutation } from "@tanstack/react-query";
import { postChat } from "../api/chat.js";

export const useChat = () => {
  return useMutation({
    mutationFn: () => postChat(),
  });
};
