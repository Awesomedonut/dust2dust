import { useState, useEffect } from "react";
import { CharacterCard } from "@/components/CharacterCard";
import { CharacterModal } from "@/components/CharacterModal";
import { characters, Character } from "@/data/characters";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateCountdown = () => {
      const targetDate = new Date('December 16, 2025 00:00:00').getTime();
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-8 my-12">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="relative flex flex-col items-center bg-white/5 p-6 rounded-xl min-w-28 border border-white/10 backdrop-blur-sm overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-pulse" style={{ animationDuration: '3s' }} />
          <div className="text-5xl font-bold text-white text-shadow mb-2 relative z-10">
            {value.toString().padStart(2, '0')}
          </div>
          <div className="text-sm text-gray-300 uppercase tracking-wider relative z-10">
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
};

const Index = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  useEffect(() => {
    characters.forEach((character) => {
      const img = new Image();
      img.src = character.fullBody;
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-x-hidden relative">
      {/* Background Animation */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/10 via-transparent to-cyan-500/10 animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-8 text-center">
        <h1 className="text-6xl font-bold mt-16 mb-8 text-shadow-lg bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-pulse tracking-wide">
          COMING SOON
        </h1>
        
        <Countdown />

        <div className="grid grid-cols-3 grid-rows-2 gap-8 mt-16 max-w-6xl mx-auto">
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              name={character.name}
              role={character.role}
              headshot={character.headshot}
              onClick={() => setSelectedCharacter(character)}
            />
          ))}
        </div>
      </div>

      <CharacterModal
        character={selectedCharacter}
        open={!!selectedCharacter}
        onClose={() => setSelectedCharacter(null)}
      />
    </div>
  );
};

export default Index;