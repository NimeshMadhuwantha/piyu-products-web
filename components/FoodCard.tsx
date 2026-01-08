type Props = {
  name: string;
  price: string;
  image: string;
  description: string;
  badge?: string;
};

export default function FoodCard({
  name,
  price,
  image,
  description,
  badge,
}: Props) {
  return (
    <div className="group bg-card-light dark:bg-card-dark rounded-2xl border shadow hover:-translate-y-1 transition flex flex-col overflow-hidden">

      <div className="aspect-[4/3] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
          style={{ backgroundImage: `url(${image})` }}
        />
        {badge && (
          <div className="absolute top-3 left-3 bg-primary text-white text-[10px] px-2 py-1 rounded">
            {badge}
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col gap-2 flex-grow">
        <div className="flex justify-between">
          <h3 className="font-bold text-lg">{name}</h3>
          <span className="font-bold text-primary">{price}</span>
        </div>

        <p className="text-sm text-text-muted line-clamp-2">{description}</p>

        <div className="mt-auto grid grid-cols-2 gap-2 pt-4">
          <button className="border rounded-lg py-2 text-sm font-bold">View</button>
          <button className="bg-primary text-white rounded-lg py-2 text-sm font-bold flex justify-center gap-2">
            <span className="material-symbols-outlined text-[18px]">
              add_shopping_cart
            </span>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
