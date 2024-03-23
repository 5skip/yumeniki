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
      className="flex flex-col py-4 mb-4 border-b border-gray-200"
    >
      <div className="w-full my-4  border rounded-lg border-fuchsia-600">
        <textarea
          ref={inputRef}
          className="w-full h-40 flex-grow px-4 py-2 "
          placeholder="あなたの夢を入力..."
        />
      </div>
      <div className="w-16 border rounded-lg border-fuchsia-600 flex items-center justify-center hover:bg-fuchsia-50">
        <button
          type="submit"
          className="w-16 py-2 font-black text-center text-fuchsia-600"
        >
          送信
        </button>
      </div>
    </form>
  );
};

export default InputForm;
