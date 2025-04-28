export async function Header() {
  return (
    <header className="h-30 sticky top-0 z-20 border-b border-b-stone-400 bg-stone-200 p-2 pl-4 dark:bg-stone-900 md:h-20">
      <div className="flex h-full w-full items-center justify-end md:justify-between">
        <div className="ml-10 flex w-full flex-col items-center gap-2 md:ml-0 md:w-auto md:flex-row">
          Header Search
        </div>
      </div>
    </header>
  );
}
