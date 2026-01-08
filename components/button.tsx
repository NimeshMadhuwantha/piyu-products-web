type ButtonProps = {
  text: string;
  onClick?: () => void;
};

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-lg transition"
    >
      {text}
    </button>
  );
}
