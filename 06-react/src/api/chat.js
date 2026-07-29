import instance from "./instance";

export const postChat = async (message) => {
  // 내가 입력한 걸 url에 드러내고 싶지 않을 대 post
  const response = await instance.post("/chat", { message });
  return response.data;
};
