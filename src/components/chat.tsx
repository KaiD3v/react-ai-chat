export function Chat({
  className,
  askText,
}: {
  className: string;
  askText?: string;
}) {
  return (
    <main className={`flex flex-col justify-between ${className}`}>
      <header className="flex text-white bg-blue-400 py-4 px-2 rounded">
        <h1>ReactAI</h1>
      </header>
      <section className="main mt-3 w-full flex flex-col overflow-y-auto">
        <div className="right w-full flex justify-end">
          <div className="relative">
            <p className="bg-gray-100 p-2 rounded inline-block">pergunta</p>
          </div>
        </div>
        <div className="left w-full flex justify-start">
          <div className="relative">
            <p className="bg-blue-100 p-2 rounded inline-block">resposta</p>
          </div>
        </div>
      </section>
    </main>
  );
}
