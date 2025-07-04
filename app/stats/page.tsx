import StatsTable from "@/components/stats/StatsTable";

export const generateMetadata = () => {
  return {
    title: 'Stats',
    description: 'View detailed statistics of your recorded emotions.',
  }
}

export default function StatsPage() {
  return (
    <div className="w-full flex justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <StatsTable />
    </div>
  );
}