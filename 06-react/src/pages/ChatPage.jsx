import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useChat } from "../hooks/useChat.js";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "안녕하세요! 무엇을 도와드릴까요?" },
  ]);
  const [input, setInput] = useState("");
  const { mutate: sendChat, isPending } = useChat();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input.trim()) return;

    const nextMessages = [...messages, { role: "user", content: input }];
    setMessages(nextMessages);
    setInput("");

    sendChat(nextMessages, {
      onSuccess: (reply) => setMessages((prev) => [...prev, reply]),
    });
  };

  return (
    <div className="max-w-[700px] mx-auto my-10 px-6">
      <h2 className="text-2xl font-bold mb-6">칵테일 상담 챗봇</h2>

      <div className="flex flex-col gap-3 mb-6">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`px-4 py-3 rounded-[14px] max-w-[80%] ${
              msg.role === "user"
                ? "self-end bg-[#7b2d43] text-white"
                : "self-start bg-gray-100 text-gray-800 [&_h1]:text-lg [&_h1]:font-bold [&_h2]:text-lg [&_h2]:font-bold [&_h3]:text-base [&_h3]:font-bold [&_h3]:mt-3 [&_h3]:mb-1 [&_h3:first-child]:mt-0 [&_p]:mb-2 [&_p:last-child]:mb-0 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-2 [&_li]:mb-1 [&_strong]:font-semibold [&_em]:italic"
            }`}
          >
            {msg.role === "assistant" ? (
              <ReactMarkdown>{msg.content}</ReactMarkdown>
            ) : (
              msg.content
            )}
          </div>
        ))}
        {isPending && <div className="self-start text-gray-500 text-sm">답변 생성 중...</div>}
      </div>

      <form className="flex gap-2.5" onSubmit={handleSubmit}>
        <input
          className="flex-1 px-[18px] py-3 border-[1.5px] border-gray-300 rounded-[10px] text-[15px] outline-none bg-[#fafafa] transition-colors focus:border-[#7b2d43] focus:bg-white"
          type="text"
          placeholder="칵테일에 대해 물어보세요"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button
          className="px-6 py-3 bg-[#7b2d43] text-white rounded-[10px] text-[15px] font-semibold cursor-pointer transition-colors hover:bg-[#5f2233]"
          disabled={isPending}
        >
          전송
        </button>
      </form>
    </div>
  );
};

export default ChatPage;
