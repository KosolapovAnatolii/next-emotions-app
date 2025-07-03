import EmotionsGrid from "@/components/emotions/EmotionsGrid";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <EmotionsGrid />
      </main>
    </div>
  );
}

// TODO:
// 1) Add dnd and swipe libs and markup
// 2) Add emotion card
// 3) Add switching theme depends on time of day
// 4) move modal to emotions folder
