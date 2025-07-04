import EmotionsGrid from "@/components/emotions/EmotionsGrid";
import EmotionsActions from "@/components/emotions/EmotionsActions"

export default function Home() {
  return (
    <div className="w-full flex justify-items-center min-h-screen p-8 pb-20  font-[family-name:var(--font-geist-sans)]">
      <main className="w-full flex flex-col">
        <EmotionsActions />
        <EmotionsGrid />
      </main>
    </div>
  );
}

