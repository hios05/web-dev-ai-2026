import * as chatService from "../services/chatService.js";

export const writeChat = async (req, res) => {
  const message = req.body.message;
  const reply = await chatService.getChatReply(message);
  res.status(200).json({ reply });
};
