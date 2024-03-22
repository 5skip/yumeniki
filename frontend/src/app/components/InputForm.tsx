import React, { useRef } from "react";
import { Message } from "../types/custom";

type InputFormProps = {
  onSubmit: (message: Message) => Promise<void>;
};

const InputForm = ({ onSubmit }: InputFormProps) => {
  // input要素への参照を作成
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // input要素から直接値を取得
    const inputValue = inputRef.current?.value;

    if (inputValue) {
      onSubmit({
        role: "user",
        content: inputValue,
      });
      // inputRef.current.value = "";
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center p-4 border-b border-gray-200"
    >
      <textarea
        ref={inputRef}
        className="w-full h-40	 flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-100"
        placeholder="あなたの夢を入力..."
      />
      <button
        type="submit"
        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none focus:ring focus:border-blue-300"
      >
        送信
      </button>
    </form>
  );
};

export default InputForm;
