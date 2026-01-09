import FoodCard from "./FoodCard";

type Props = {
  items: {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    badge?: string;
    category?: string;
  }[];
};

export default function FoodGrid({ items }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item) => {
        // Avoid passing non-card props down to FoodCard.
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { category, ...cardProps } = item;
        return <FoodCard key={item.id} {...cardProps} />;
      })}
    </div>
  );
}
