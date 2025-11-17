import { Character } from "@/data/characters";

interface CharacterModalProps {
  character: Character | null;
  open: boolean;
  onClose: () => void;
}

export const CharacterModal = ({ character, open, onClose }: CharacterModalProps) => {
  if (!open || !character) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 p-12 rounded-3xl border border-white/20 max-w-3xl w-11/12 text-center text-white shadow-2xl animate-in slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-6 text-white text-3xl font-bold opacity-70 hover:opacity-100 transition-opacity"
          onClick={onClose}
        >
          &times;
        </button>
        
        <div 
          className="w-72 h-96 rounded-2xl mx-auto mb-8 bg-cover bg-center border-4 border-white/30"
          style={{ backgroundImage: `url('${character.fullBody}')` }}
        />
        
        <div className="text-4xl font-bold mb-4 text-shadow">{character.name}</div>
        <div className="text-xl text-gray-300 mb-8">{character.role}</div>
        <div className="text-lg leading-relaxed opacity-90">{character.description}</div>
      </div>
    </div>
  );
};