export function MessageInput() {
  return (
    <div className="flex gap-3 mb-10">
      <textarea
        className="w-full items-center rounded border px-1 resize-none"
        placeholder="Digite a sua pergunta..."
      ></textarea>
      <button className="bg-blue-500 text-white px-4 border rounded">
        Send
      </button>
    </div>
  );
}
