interface CharacterCardProps {
  name: string;
  role: string;
  headshot: string;
  onClick: () => void;
}

export const CharacterCard = ({ name, role, headshot, onClick }: CharacterCardProps) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-2xl bg-black/30 border-2 border-white/10 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-white/30 hover:shadow-2xl h-72 backdrop-blur-sm"
      onClick={onClick}
    >
      <div 
        className="w-full h-48 bg-cover bg-center relative"
        style={{ backgroundImage: `url('${headshot}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      
      <div className="p-4 text-center">
        <div className="text-xl font-bold text-white mb-2">{name}</div>
        <div className="text-sm text-gray-300 opacity-80">{role}</div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </div>
  );
};