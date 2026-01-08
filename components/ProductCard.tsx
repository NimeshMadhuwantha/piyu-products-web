import Image from "next/image";


type Props = {
  name: string;
  price: string;
  image: string;
  description: string;
};

export default function ProductCard({
  name,
  price,
  image,
  description,
}: Props) {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow hover:shadow-lg transition flex flex-col overflow-hidden">
      
      {/* Image */}
      <div className="relative w-full aspect-square">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 150px,
                 (max-width: 768px) 200px,
                 300px"
        />
      </div>

      {/* Content */}
      <div className="p-2 sm:p-3 lg:p-4 flex flex-col flex-grow">
        
        <h3 className="text-sm sm:text-base lg:text-lg font-bold leading-tight">
          {name}
        </h3>

        <p className="text-xs sm:text-sm text-gray-500 line-clamp-2 mt-1 mb-2">
          {description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-2">
          <span className="text-sm sm:text-base lg:text-lg font-bold">
            {price}
          </span>

          <button className="bg-primary hover:bg-primary-dark text-white text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 rounded-md sm:rounded-lg transition">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
