import MainContent from "@/components/MainContent";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <MainContent />
    </main>
  );
}