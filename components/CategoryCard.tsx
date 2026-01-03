import Image from "next/image";

type Props = {
  title: string;
  image: string;
};

export default function CategoryCard({ title, image }: Props) {
  return (
    <div className="flex flex-col items-center p-4 rounded-xl bg-white hover:shadow-lg transition">
      <div className="w-20 h-20 rounded-full overflow-hidden">
        <Image src={image} alt={title} width={80} height={80} />
      </div>
      <span className="mt-3 font-bold">{title}</span>
    </div>
  );
}
