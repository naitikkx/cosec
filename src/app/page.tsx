import BirthdayCard from '@/components/BirthdayCard';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-br from-orange-100 via-rose-100 to-amber-100 overflow-hidden">
      <BirthdayCard />
    </main>
  );
}
