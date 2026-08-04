import OpenAI from "openai";

client = new OpenAI({ apikey: process.env.OPENAI_API_KEY });

export const getChatReply = async () => {
  response = await client.chat.completions.create({
    model: "gpt-5.6-luna",
    messages: [
      { role: "system", content: "넌 칵테일을 추천해주는 상담사야" },
      ...messages,
    ],
  });

  return response.choices[0].message.content;
};
